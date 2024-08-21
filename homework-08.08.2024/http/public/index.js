let form = document.querySelector(".form");
let messagesDiv = document.getElementById("messages");
let formArea = document.querySelector(".form__area");

let sendMessage = () => {
	let formData = new FormData(form);
	let formDataValue = formData.get("text"); // Получаем значение конкретного поля, например "text"

	console.log("Отправляем значение:", formDataValue);

	if (socket.readyState === WebSocket.OPEN) {
		socket.send(formDataValue); // Отправляем только значение поля
		formArea.value = "";
	} else {
		console.log("WebSocket not connected");
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	sendMessage();
});

formArea.addEventListener("keydown", (e) => {
	if (e.key === "Enter" && !e.shiftKey) {
		e.preventDefault();
		sendMessage();
	}
});

const socket = new WebSocket('wss://chat-app-xa4t7.ondigitalocean.app');

// Загрузка истории сообщений при загрузке страницы
window.addEventListener('load', () => {
	let messages = JSON.parse(localStorage.getItem('messages')) || [];
	messages.forEach((message) => {
		let messageElement = document.createElement('p');
		messageElement.textContent = message;
		messagesDiv.appendChild(messageElement);
	});
});

socket.onmessage = (e) => {
	console.log('Received data:', e.data);

	let messageElement = document.createElement('p');
	messageElement.textContent = e.data;
	messagesDiv.appendChild(messageElement);

	// Сохранение сообщения в localStorage
	let messages = JSON.parse(localStorage.getItem('messages')) || [];
	messages.push(e.data);
	localStorage.setItem('messages', JSON.stringify(messages));
};

socket.onopen = (e) => {
	console.log("WebSocket connection established");
};

socket.onclose = (e) => {
	console.log("WebSocket connection closed");
};

socket.onerror = (e) => {
	console.error("WebSocket error:", e);
};
