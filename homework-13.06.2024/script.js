let amper_result = document.querySelector(".amper-number");
let resistor_number = document.querySelector(".resistor-number");
let button_plus = document.querySelector(".button-plus");
let button_minus = document.querySelector(".button-minus");
let fire_script = document.querySelector(".fire-wrapper");


button_plus.addEventListener("click", function() {
	let resistor_to_number = +resistor_number.innerText;
	resistor_to_number += 1;
	resistor_number.innerHTML = resistor_to_number;
	let round = 12 / resistor_to_number;
	amper_result.innerHTML = round.toFixed(2);

})

button_minus.addEventListener("click", function() {
	let resistor_to_number = +resistor_number.innerText;
	resistor_to_number -= 1;
	if (resistor_to_number <= 0) {
        resistor_to_number = 1;
        fire_script.style.opacity = "1";
    } else {
        fire_script.style.opacity = "0";
    }
	resistor_number.innerHTML = resistor_to_number;
	let round = 12 / resistor_to_number;
	amper_result.innerHTML = round.toFixed(2);

})



