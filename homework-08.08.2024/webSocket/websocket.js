import {WebSocketServer} from 'ws';

const run = async () => {
	const port = 7000;
	const wss = new WebSocketServer(`${protocol}://${location.host}`);


	const clients = new Set();

	wss.on('connection', (ws) => {
		console.log('Client connected!');
		clients.add(ws);

		wss.on('message', (data) => {
			// Преобразуем данные в строку
			const message = typeof data === 'string' ? data : data.toString();
			console.log('Received data:', message);

			// Отправляем данные обратно всем подключённым клиентам
			clients.forEach(client => {
				if (client.readyState === WebSocket.OPEN) {
					client.send(message);
				}
			});
		});

		wss.on('close', () => {
			console.log('Client disconnected');
			clients.delete(ws);
		});
	});

	console.log('WebSocket server is running on ws://localhost:7000');
};

export default run;
