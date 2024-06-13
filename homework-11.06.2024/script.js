let battery = document.querySelector('.battery');
let battery_mode = document.querySelector('.battery-mode');

document.querySelectorAll(".switch-check").forEach(switchCheck => {
    switchCheck.addEventListener("change", function() {
        if (this.checked) {
            let spanElement = this.nextElementSibling.querySelector('span');
            if (spanElement) {
							battery.classList.add('battery-mode-active');
            }
        }else {
					battery.classList.remove('battery-mode-active');
				}
    });
});