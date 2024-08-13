let form = document.querySelector(".form");
let messagesDiv = document.getElementById("messages");
let formArea = document.querySelector(".form__area");

let sendMessage = () => {
    let formData = new FormData(form);
    let formDataValue = formData.get("text");

    console.log("Отправляем значение:", formDataValue);

    if (socket.readyState === WebSocket.OPEN) {
        socket.send(formDataValue);
        formArea.value = "";
    } else {
        console.log("WebSocket not connected");
    }
}

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

// Автоматически определяем, использовать ли 'ws' или 'wss' в зависимости от протокола страницы
const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
const socket = new WebSocket(`${protocol}://${location.host}`);

socket.onmessage = (e) => {
    console.log('Received data:', e.data);

    let messageElement = document.createElement('p');
    messageElement.textContent = e.data;

    messagesDiv.appendChild(messageElement);
}

socket.onopen = (e) => {
    console.log("WebSocket connection established");
}

socket.onclose = (e) => {
    console.log("WebSocket connection closed");
}

socket.onerror = (error) => {
    console.error("WebSocket error observed:", error);
}
