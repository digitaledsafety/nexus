import { spawn, execSync } from 'child_process';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.join(__dirname, '..');
const PORT = 9002;
export const getAppEnv = () => process.env.APP_ENV || 'local';
export const isStaging = () => getAppEnv() === 'staging';

export const services = {
    hardhat: {
        command: 'npx',
        args: ['hardhat', 'node'],
        process: null,
        status: 'stopped',
        logs: []
    },
    bridge: {
        command: 'node',
        args: ['scripts/nft-bridge.js'],
        process: null,
        status: 'stopped',
        logs: []
    },
    frontend: {
        command: 'npx',
        args: ['serve', 'frontend', '-p', '3000'],
        process: null,
        status: 'stopped',
        logs: []
    },
    manager: {
        command: 'npm',
        args: ['start'],
        process: null,
        status: 'stopped',
        logs: [],
        cwd: path.join(ROOT, 'external', 'bedrock-server-manager'),
        env: { PORT: '9003' }
    }
};

// Placeholder for Bedrock Server Manager API URL
const getManagerApiUrl = () => isStaging() ? process.env.STAGING_MANAGER_URL : (process.env.MANAGER_API_URL || 'http://localhost:9003');

function log(service, data) {
    const message = data.toString().trim();
    if (!message) return;
    const entry = { timestamp: new Date().toISOString(), message };
    services[service].logs.push(entry);
    if (services[service].logs.length > 100) services[service].logs.shift();
    console.log(`[${service.toUpperCase()}] ${message}`);
}

function startService(name) {
    if (services[name].process) return;

    console.log(`Starting ${name}...`);
    const svc = services[name];
    svc.process = spawn(svc.command, svc.args, {
        cwd: svc.cwd || ROOT,
        shell: true,
        env: { ...process.env, ...svc.env, FORCE_COLOR: 'true' }
    });

    svc.status = 'running';

    svc.process.stdout.on('data', (data) => log(name, data));
    svc.process.stderr.on('data', (data) => log(name, data));

    svc.process.on('close', (code) => {
        console.log(`${name} process exited with code ${code}`);
        svc.status = 'stopped';
        svc.process = null;
    });
}

function stopService(name) {
    if (services[name].process) {
        console.log(`Stopping ${name}...`);
        if (process.platform === 'win32') {
            execSync(`taskkill /pid ${services[name].process.pid} /T /F`);
        } else {
            services[name].process.kill('SIGTERM');
        }
    }
}

async function checkManagerStatus() {
    try {
        const res = await fetch(`${getManagerApiUrl()}/api/status`);
        return res.ok;
    } catch (e) {
        return false;
    }
}

export async function prepareAddon() {
    console.log('Preparing NFT addon...');
    const sourceDir = path.join(ROOT, 'addons', 'minecraft-bedrock-addon');

    // Inject configuration into config.js
    const configJsPath = path.join(sourceDir, 'development_behavior_packs', 'behavior_pack_sample', 'scripts', 'config.js');

    let wsUrl = process.env.WS_URL || 'ws://127.0.0.1:9001';
    let serverId = process.env.SERVER_ID || 'local-dev';
    let nexusAddress = process.env.CONTRACT_ADDRESS_BRAGNFT || '0x0000000000000000000000000000000000000000';

    if (isStaging()) {
        wsUrl = process.env.STAGING_BRIDGE_URL || process.env.WS_URL || wsUrl;
        nexusAddress = process.env.STAGING_BRAGNFT_ADDRESS || process.env.CONTRACT_ADDRESS_BRAGNFT || nexusAddress;
    } else {
        const deploymentPath = path.join(ROOT, 'ignition', 'deployments', 'chain-31337', 'deployed_addresses.json');
        if (fs.existsSync(deploymentPath)) {
            const deployments = JSON.parse(fs.readFileSync(deploymentPath, 'utf8'));
            nexusAddress = process.env.CONTRACT_ADDRESS_BRAGNFT || deployments['AppModule#BragNFT'] || nexusAddress;
        }
    }

    const configContent = `export const WS_URL = "${wsUrl}";\nexport const SERVER_ID = "${serverId}";\nexport const NEXUS_ADDRESS = "${nexusAddress}";\n`;

    fs.writeFileSync(configJsPath, configContent);
    console.log(`Addon prepared with WS_URL=${wsUrl}, SERVER_ID=${serverId}, NEXUS=${nexusAddress}`);
    return sourceDir;
}

async function initEnvironment() {
    if (services.hardhat.status === 'initializing') return;
    services.hardhat.status = 'initializing';

    console.log(`--- Initializing Environment (${getAppEnv()}) ---`);

    if (isStaging()) {
        if (!process.env.STAGING_BRIDGE_URL || !process.env.STAGING_MANAGER_URL) {
            console.error('STAGING_BRIDGE_URL and STAGING_MANAGER_URL must be set for staging environment.');
            services.hardhat.status = 'stopped';
            return;
        }
        console.log('Verifying staging connectivity...');
        try {
            const res = await fetch(`${getManagerApiUrl()}/api/status`);
            if (res.ok) {
                console.log('Connected to Staging Manager.');
            } else {
                throw new Error('Staging Manager returned non-OK status.');
            }
        } catch (e) {
            console.error('Failed to connect to Staging Manager:', e.message);
            services.hardhat.status = 'stopped';
            return;
        }
        await prepareAddon();
        console.log('Staging environment ready. Manual addon injection may be required.');
        services.hardhat.status = 'running';
        return;
    }

    try {
        // 1. Start Hardhat Node
        startService('hardhat');

        // Wait for node to be ready
        await new Promise(resolve => setTimeout(resolve, 8000));

        console.log('Deploying contracts...');
        await new Promise((resolve, reject) => {
            const child = spawn('npm', ['run', 'deploy:local'], { cwd: ROOT, shell: true });
            child.stdout.on('data', d => log('hardhat', d));
            child.stderr.on('data', d => log('hardhat', d));
            child.on('close', code => code === 0 ? resolve() : reject(new Error('Deploy failed')));
        });

        console.log('Seeding data...');
        await new Promise((resolve, reject) => {
            const child = spawn('npm', ['run', 'seed:local'], { cwd: ROOT, shell: true });
            child.stdout.on('data', d => log('hardhat', d));
            child.stderr.on('data', d => log('hardhat', d));
            child.on('close', code => code === 0 ? resolve() : reject(new Error('Seed failed')));
        });

        // 2. Clone and setup Manager
        const managerPath = path.join(ROOT, 'external', 'bedrock-server-manager');
        if (!fs.existsSync(managerPath)) {
            console.log('Cloning Bedrock Server Manager...');
            fs.mkdirSync(path.join(ROOT, 'external'), { recursive: true });
            execSync(`git clone https://github.com/digitaledsafety/bedrock-server-manager ${managerPath}`);
            console.log('Installing Manager dependencies...');
            execSync(`npm install`, { cwd: managerPath });
        }

        // 3. Prepare Addon
        const addonPath = await prepareAddon();

        // 4. Start Manager
        startService('manager');
        await new Promise(resolve => setTimeout(resolve, 5000));

        // 5. Inject Addon
        console.log('Injecting addon into local manager...');
        await fetch(`${getManagerApiUrl()}/api/inject`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: addonPath })
        });

        console.log('Environment initialized successfully.');
        services.hardhat.status = 'running';
    } catch (e) {
        console.error('Initialization failed:', e.message);
        services.hardhat.status = 'stopped';
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    if (url.pathname === '/status') {
        checkManagerStatus().then(connected => {
            const status = {
                services: {},
                minecraft: {
                    managerUrl: getManagerApiUrl(),
                    connected: connected
                }
            };
            for (const [name, svc] of Object.entries(services)) {
                status.services[name] = { status: svc.status, logCount: svc.logs.length };
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(status));
        });
    } else if (url.pathname === '/logs') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(services[service].logs));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/start' && req.method === 'POST') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            startService(service);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/stop' && req.method === 'POST') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            stopService(service);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/init' && req.method === 'POST') {
        initEnvironment();
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, message: 'Initialization started' }));
    } else if (url.pathname === '/minecraft/start' && req.method === 'POST') {
        console.log(`Requesting Minecraft server start via ${getManagerApiUrl()}`);
        fetch(`${getManagerApiUrl()}/api/start`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/stop' && req.method === 'POST') {
        console.log(`Requesting Minecraft server stop via ${getManagerApiUrl()}`);
        fetch(`${getManagerApiUrl()}/api/stop`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/restart' && req.method === 'POST') {
        console.log(`Requesting Minecraft server restart via ${getManagerApiUrl()}`);
        fetch(`${getManagerApiUrl()}/api/restart`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/inject' && req.method === 'POST') {
        // Proxy to bedrock-server-manager
        const addonPath = path.join(ROOT, 'addons', 'minecraft-bedrock-addon');

        console.log(`Injecting addon from ${addonPath} to ${getManagerApiUrl()}`);

        fetch(`${getManagerApiUrl()}/api/inject`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: addonPath })
        }).then(r => r.json())
          .then(data => {
              res.writeHead(200);
              res.end(JSON.stringify(data));
          }).catch(err => {
              res.writeHead(500);
              res.end(JSON.stringify({ error: err.message }));
          });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const mode = process.argv[2];
if (mode === 'init') {
    initEnvironment().then(() => {
        if (!isStaging()) {
            startService('bridge');
            startService('frontend');
        }
    });
} else if (mode === 'start') {
    if (!isStaging()) {
        startService('hardhat');
        startService('bridge');
        startService('frontend');
        startService('manager');
    } else {
        console.log('In staging mode, services are expected to be running externally.');
    }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    server.listen(PORT, () => {
        console.log(`Environment Manager running at http://localhost:${PORT}`);
    });
}

process.on('SIGINT', () => {
    console.log('Shutting down services...');
    for (const name in services) {
        stopService(name);
    }
    process.exit();
});
