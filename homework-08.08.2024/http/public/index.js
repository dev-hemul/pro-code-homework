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

const url = 'wss://jellyfish-app-xsopg.ondigitalocean.app:7000';
const socket = new WebSocket(url);

socket.onmessage = (e) => {
    console.log('Received data:', e.data);

    let messageElement = document.createElement('p');
    messageElement.textContent = e.data;

    messagesDiv.appendChild(messageElement);
}

socket.onopen = (e) => {
    console.log("WebSocket connection established");
}

message();
