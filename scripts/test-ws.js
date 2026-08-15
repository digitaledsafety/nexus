import { WebSocket } from 'ws';

const ws = new WebSocket('ws://localhost:9001');

ws.on('open', () => {
    console.log('Connected to bridge');

    // Handshake
    ws.send(JSON.stringify({
        body: {
            eventName: 'PlayerMessage',
            properties: { Message: 'nexus:handshake server-1' }
        }
    }));

    setTimeout(() => {
        // Test nexus:register with spaces in name
        console.log('Testing nexus:register with spaces...');
        ws.send(JSON.stringify({
            body: {
                eventName: 'PlayerMessage',
                properties: { Message: 'nexus:register test-xuid server-1 "Player With Spaces"' }
            }
        }));
    }, 500);

    setTimeout(() => {
        // Test nexus:check with spaces in name
        console.log('Testing nexus:check with spaces...');
        ws.send(JSON.stringify({
            body: {
                eventName: 'PlayerMessage',
                properties: { Message: 'nexus:check test-xuid server-1 "Player With Spaces"' }
            }
        }));
    }, 1000);

    setTimeout(() => {
        console.log('Closing connection');
        ws.close();
        process.exit(0);
    }, 2000);
});

ws.on('message', (data) => {
    const msg = JSON.parse(data);
    if (msg.body && msg.body.commandLine) {
        console.log('Received command:', msg.body.commandLine);
    } else {
        // console.log('Received message:', JSON.stringify(msg, null, 2));
    }
});

ws.on('error', (err) => {
    console.error('WS Error:', err);
    process.exit(1);
});
