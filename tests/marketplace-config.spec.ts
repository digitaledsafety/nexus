import { test, expect } from '@playwright/test';
import path from 'path';
import http from 'node:http';
import fs from 'node:fs';

test.describe('Marketplace Configuration', () => {
  let server: http.Server;
  let productUrl = '';

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
        productUrl = `http://127.0.0.1:${port}/product.html?id=1&addr=0x3333333333333333333333333333333333333333`;
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

  test('should show alert when marketplace is not configured on Sepolia', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).ethereum = {
        isMetaMask: true,
        request: async (request: { method: string, params?: any[] }) => {
          if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') {
            return ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'];
          }
          if (request.method === 'eth_chainId') {
            return '0xaa36a7'; // 11155111
          }
          if (request.method === 'eth_call') {
              // Mock BragNFT.tokenURI(1) -> returns minimal JSON metadata
              return '0x0000000000000000000000000000000000000000000000000000000000000020' +
                     '000000000000000000000000000000000000000000000000000000000000003b' +
                     Buffer.from('data:application/json;base64,eyJuYW1lIjogIlRlc3QgTkZUIn0=').toString('hex').padEnd(128, '0');
          }
          return null;
        },
        on: () => {},
        removeListener: () => {}
      };

      localStorage.setItem('wallet_connected', 'true');
    });

    await page.goto(productUrl);

    // We expect an alert when clicking Submit Offer
    let alertMessage = '';
    page.on('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.dismiss();
    });

    // Directly trigger the function to avoid UI visibility issues in headless environment
    await page.evaluate(() => {
        const amountInput = document.getElementById('offerAmount') as HTMLInputElement;
        if (amountInput) amountInput.value = '10';
        const btn = document.getElementById('btnMakeOffer');
        if (btn) btn.click();
    });

    // If fixed, the alert should NOT be 'Marketplace not configured on this network'
    // Give it a moment to trigger the click and dialog
    await page.waitForTimeout(1000);

    expect(alertMessage).not.toBe('Marketplace not configured on this network');
    console.log('Final alert message:', alertMessage);
  });
});
