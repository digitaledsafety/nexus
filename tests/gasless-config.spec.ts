import { test, expect } from '@playwright/test';
import path from 'path';
import http from 'node:http';
import fs from 'node:fs';

test.describe('Gasless Configuration', () => {
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

    // Mock wallet connection and AA SDK
    await page.addInitScript(() => {
        const mockAddress = '0x1234567890123456789012345678901234567890';
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return [mockAddress];
                if (request.method === 'eth_chainId') return '0x1'; // Mainnet
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };

        // Mock AlchemyAA to avoid esm.sh loads
        (window as any).AlchemyAA = {
            createPublicClient: () => ({}),
            http: () => ({}),
            alchemy: () => ({}),
            custom: () => ({}),
            createWalletClient: () => ({}),
            sepolia: {},
            localhost: {},
            createMultiOwnerLightAccount: async () => ({}),
            createAlchemySmartAccountClient: async () => ({
                account: { address: '0xSCA_ADDRESS' }
            }),
            WalletClientSigner: class { constructor() {} }
        };

        // Pre-set wallet connected in localStorage
        localStorage.setItem('wallet_connected', 'true');
        localStorage.setItem('brag_address', mockAddress);
    });

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

    await page.goto(landingUrl + '#/manager');

    // Wait for the manager view to be loaded
    await page.waitForLoadState('networkidle');
    await page.locator('#toggleGasless').waitFor({ state: 'visible', timeout: 30000 });
  });

  test('should show gasless config fields when toggled', async ({ page }) => {
    const gaslessConfig = page.locator('#gaslessConfig');
    const toggleGasless = page.locator('#toggleGasless');

    // Initially hidden
    await expect(gaslessConfig).toBeHidden();

    // Toggle on
    await toggleGasless.check({ force: true });
    await expect(gaslessConfig).toBeVisible();

    // Toggle off
    await toggleGasless.uncheck({ force: true });
    await expect(gaslessConfig).toBeHidden();
  });

  test('should save and load gasless config from localStorage', async ({ page }) => {
    const toggleGasless = page.locator('#toggleGasless');
    const apiKeyInput = page.locator('#alchemyApiKey');
    const policyIdInput = page.locator('#alchemyPolicyId');

    // Toggle on to see fields
    await toggleGasless.check({ force: true });

    // Set values
    await apiKeyInput.fill('test-api-key');
    await policyIdInput.fill('test-policy-id');

    // Trigger change event (fill might not always trigger it depending on implementation)
    await apiKeyInput.dispatchEvent('change');
    await policyIdInput.dispatchEvent('change');

    // Verify localStorage
    const savedApiKey = await page.evaluate(() => localStorage.getItem('alchemyApiKey'));
    const savedPolicyId = await page.evaluate(() => localStorage.getItem('alchemyPolicyId'));

    expect(savedApiKey).toBe('test-api-key');
    expect(savedPolicyId).toBe('test-policy-id');

    // Reload page
    await page.reload();
    await page.evaluate(() => {
        window.location.hash = '#/manager';
    });

    // Toggle should still be on
    await expect(toggleGasless).toBeChecked();
    await expect(page.locator('#gaslessConfig')).toBeVisible();

    // Values should be loaded
    await expect(apiKeyInput).toHaveValue('test-api-key');
    await expect(policyIdInput).toHaveValue('test-policy-id');
  });
});
