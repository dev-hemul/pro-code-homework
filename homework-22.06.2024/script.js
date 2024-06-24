let red = document.querySelector(".circle-red");
let orange = document.querySelector(".circle-orange");
let green = document.querySelector(".circle-green");
let btn = document.querySelector(".circle");
let alertBox = document.querySelector(".alert");

let colors = ["red", "orange", "green", "orange"];
let currentIndex = 0;

red.classList.add("active-red");

let lastClickTime = 0;

let changeColor = () => {
    red.classList.remove("active-red");
    orange.classList.remove("active-orange");
    green.classList.remove("active-green");

    if (colors[currentIndex] === "red") {
        red.classList.add("active-red");
    } else if (colors[currentIndex] === "orange") {
        orange.classList.add("active-orange");
    } else if (colors[currentIndex] === "green") {
        green.classList.add("active-green");
    }

    currentIndex = (currentIndex + 1) % colors.length;
}

btn.addEventListener("click", () => {
    let currentTime = new Date().getTime();
    if (currentTime - lastClickTime >= 5000) {
        red.classList.remove("active-red");
        orange.classList.remove("active-orange");
        green.classList.add("active-green");
        currentIndex = 2;
        lastClickTime = currentTime;
    } else {
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000);
    }
});

setInterval(changeColor, 3000);
