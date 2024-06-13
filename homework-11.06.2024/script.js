document.querySelectorAll(".switch-check").forEach(switchCheck => {
    switchCheck.addEventListener("change", function() {
				let battery = document.querySelector(".battery")
        let battery_mode = document.querySelector(".battery-mode");
        let label = this.nextElementSibling;
        let elementStyle = getComputedStyle(label, "::after");

        if (elementStyle.getPropertyValue("background-color") === "rgb(144, 220, 255)") {
					battery_mode.classList.toggle("battery-mode-active");
        } else if(battery.classList.contains("battery-mode-active")) {
            battery_mode.classList.remove("battery-mode-active");
            battery_mode.classList.add("battery-mode");
        }
    });
});