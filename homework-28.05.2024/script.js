let success = document.querySelector('.success');
let button = document.querySelector('.form__button');
let err = document.querySelector('.err');
let err_2 = document.querySelector('.err-2');

button.addEventListener('click', (evt) => {
	evt.preventDefault();
	let moneyInput = document.querySelector('.form__input-name');
	let readyToUseInput = document.querySelector('.form__input-accept');

	let money = +moneyInput.value;
	let ready_to_use = +readyToUseInput.value;


	if (money < ready_to_use) {
		function time_pause() {
			button.style.marginTop = "50px";
			err.style.display = 'block';
			moneyInput.value = '';
			readyToUseInput.value = '';
		}


		function close() {
			button.style.marginTop = "15px";
			err.style.display = 'none';
			moneyInput.value = '';
			readyToUseInput.value = '';

		}

		setTimeout(time_pause, 1500);
		setTimeout(close, 3500);

		return;

	} else if (money > ready_to_use) {
		function time_pause() {
			button.style.marginTop = "50px";
			success.style.display = 'block';
			moneyInput.value = '';
			readyToUseInput.value = '';
		}

		function close() {
			button.style.marginTop = "15px";
			success.style.display = 'none';
			moneyInput.value = '';
			readyToUseInput.value = '';
		}

		setTimeout(time_pause, 1500);
		setTimeout(close, 3500);

		return;
	}

	if (money === ready_to_use) {
		function time_pause() {
			button.style.marginTop = "70px";
			err_2.style.display = 'block';
			moneyInput.value = '';
			readyToUseInput.value = '';
		}



		function close() {
			button.style.marginTop = "15px";
			err_2.style.display = 'none';
			moneyInput.value = '';
			readyToUseInput.value = '';
		}

		setTimeout(time_pause, 1500);
		setTimeout(close, 3500);

	}

})
























