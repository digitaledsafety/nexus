import { test, expect } from '@playwright/test';
import path from 'path';
import http from 'node:http';
import fs from 'node:fs';

test.describe('Authentication Flow', () => {
  let server: http.Server;
  let landingUrl = '';

  test.beforeAll(async () => {
    server = http.createServer((req, res) => {
      const cleanPath = req.url?.split('?')[0].split('#')[0] || '';
      const filePath = path.resolve('frontend', cleanPath === '/' ? 'index.html' : cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath);

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        let contentType = 'text/html';
        if (filePath.endsWith('.js')) contentType = 'application/javascript';
        else if (filePath.endsWith('.css')) contentType = 'text/css';
        else if (filePath.endsWith('.json')) contentType = 'application/json';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });

    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', () => {
        const port = (server.address() as any).port;
        landingUrl = `http://127.0.0.1:${port}/index.html`;
        resolve();
      });
    });
  });

  test.afterAll(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    // Block esm.sh to speed up and use mock
    await page.route('https://esm.sh/**', route => route.abort());

    // Mock the environment control API to avoid connection refused errors
    await page.route('http://localhost:9002/**', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                services: {},
                minecraft: { connected: false }
            })
        });
    });
  });

  test('should redirect unauthenticated users to login page', async ({ page }) => {
    await page.goto(landingUrl);
    await page.evaluate(() => {
        localStorage.removeItem('wallet_connected');
        localStorage.removeItem('brag_address');
    });

    // Try to access manager page via hash
    await page.goto(`${landingUrl}#/manager`);

    // Should be redirected to login view
    await expect(page).toHaveURL(/#\/login/);
  });

  test('should show linking banner when token is present', async ({ page }) => {
    // Navigate to landing and then set hash with query
    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/login?token=LINK123';
    });

    const banner = page.locator('#linkingStatus');
    await expect(banner).toBeVisible({ timeout: 15000 });
    await expect(page.locator('#displayToken')).toHaveText('LINK123');
  });

  test('should connect wallet and see address', async ({ page }) => {
    // Mock ethers and window.ethereum - MUST BE BEFORE page.goto
    await page.addInitScript(() => {
        const mockAddress = '0x0000000000000000000000000000000000000123';
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return [mockAddress];
                if (request.method === 'eth_chainId') return '0x1';
                if (request.method === 'personal_sign') return '0xmocksignature';
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };
    });

    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/login';
    });

    // Wait for router/view to load
    const btnSiwe = page.locator('#btnSiwe');
    await expect(btnSiwe).toBeVisible({ timeout: 15000 });
    await btnSiwe.click();

    // Should redirect to manager
    await expect(page).toHaveURL(/#\/manager/);

    // Should show the mock address on the connect button
    const connectBtn = page.locator('#btnConnect');
    await expect(connectBtn).toContainText('0x0000...0123');
  });
});
