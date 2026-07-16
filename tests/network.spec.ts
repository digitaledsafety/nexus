import { test, expect } from '@playwright/test';
import path from 'path';
import http from 'node:http';
import fs from 'node:fs';

test.describe('Network Detection', () => {
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

  test('should display Sepolia network badge on landing page when connected to chain 11155111', async ({ page }) => {
    await page.addInitScript(() => {
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts') return ['0x0000000000000000000000000000000000000123'];
                if (request.method === 'eth_chainId') return '0xaa36a7'; // 11155111
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };
        localStorage.setItem('wallet_connected', 'true');
    });

    await page.goto(landingUrl);
    const badge = page.locator('#networkBadge');
    await expect(badge).toHaveText('Sepolia');
  });

  test('should display Sepolia network status on manager page when connected to chain 11155111', async ({ page }) => {
    await page.addInitScript(() => {
        const mockAddress = '0x0000000000000000000000000000000000000123';
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return [mockAddress];
                if (request.method === 'eth_chainId') return '0xaa36a7'; // 11155111
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };
    });

    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/manager';
    });
    // Wait for the view to load and router to inject HTML
    const btnConnect = page.locator('#btnConnect');
    await expect(btnConnect).toBeVisible({ timeout: 15000 });
    await btnConnect.click();
    const networkBadge = page.locator('#networkBadge');
    await expect(networkBadge).toHaveText('Sepolia');
  });

  test('Login page should use correct Chain ID in SIWE message', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).ethereum = {
        request: async (request: any) => {
          if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return ['0x1234567890123456789012345678901234567890'];
          if (request.method === 'eth_chainId') return '0xaa36a7';
          if (request.method === 'personal_sign') {
            (window as any).capturedMessage = request.params[0];
            return '0xsig';
          }
        },
        on: () => {}
      };
    });

    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/login';
    });
    const btnSiwe = page.locator('#btnSiwe');
    await expect(btnSiwe).toBeVisible({ timeout: 15000 });
    page.on('dialog', dialog => dialog.dismiss());

    await btnSiwe.click();

    // Wait for message to be captured
    await expect.poll(async () => {
      const hex = await page.evaluate(() => (window as any).capturedMessage || '');
      if (hex.startsWith('0x')) {
        return Buffer.from(hex.substring(2), 'hex').toString('utf8');
      }
      return hex;
    }).toContain('Chain ID: 11155111');
  });
});
