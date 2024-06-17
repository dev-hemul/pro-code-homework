let battery = document.querySelector('.battery');

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