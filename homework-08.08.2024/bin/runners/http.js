import http from 'http';
import server from "../../http/server.js";
import { WebSocketServer } from 'ws';

export default function startServer() {
  const httpServer = http.createServer(server);

  const wss = new WebSocketServer({ server: httpServer });

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
  const PORT = 8080;

  httpServer.listen(PORT, () => {
    console.log(`HTTP Server is running on port ${PORT}`);
  });
}