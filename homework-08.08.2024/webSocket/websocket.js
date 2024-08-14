import { WebSocketServer } from 'ws';

const run = async () => {
    /*const port = 2000;*/
    const wss = new WebSocketServer({server: Express });

    const clients = new Set();

    wss.on('connection', (ws) => {
        console.log('Client connected!');
        clients.add(ws);

        ws.on('message', (data) => {
            const message = typeof data === 'string' ? data : data.toString();
            console.log('Received data:', message);

            clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        ws.on('close', () => {
            console.log('Client disconnected');
            clients.delete(ws);
        });
    });

    wss.on('error', (error) => {
        console.error('WebSocket server error:', error);
    });

    console.log('WebSocket server is running on ws://localhost:2000');
};

export default run;
