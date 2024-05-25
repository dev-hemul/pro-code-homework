let input_name = document.querySelector(".form__input-name");
let input_accept = document.querySelector(".form__input-accept");
let form_button = document.querySelector(".form__button");
let err = document.querySelector(".err");
let err_2 = document.querySelector(".err-2");
let success = document.querySelector(".success");

form_button.addEventListener("click", (evt) => {
	evt.preventDefault();
	if (input_accept.value !== 'так' && input_accept.value !== 'Так') {
		function time_pause() {
			err_2.style.display = "block";
		}

		form_button.style.marginTop = "70px";


		function err2_close() {
			err_2.style.display = "none";
			form_button.style.marginTop = "15px";
			input_accept.value = '';
		}

		setTimeout(time_pause, 1400);
		setTimeout(err2_close, 3500);

	} else if (input_accept.value === 'так' && input_name.value === '') {
		function time_pause() {
			err.style.display = "block";
		}

		form_button.style.marginTop = "50px";
		function err_close() {
			err.style.display = "none";
			form_button.style.marginTop = "15px";
		}
		setTimeout(time_pause, 1400);
		setTimeout(err_close, 3500);

	} else if (input_accept.value === 'Так' && input_name.value === '') {
		err.style.display = "block";
		form_button.style.marginTop = "70px";

		function err_close() {
			err.style.display = "none";
			form_button.style.marginTop = "15px";
		}

		setTimeout(err_close, 3500);
		
	} else {
		form_button.style.marginTop = "50px";

		function time_pause() {
			success.style.display = "block";
		}
		function close_sucss() {
			success.style.display = "none";
			form_button.style.marginTop = "15px";
			input_name.value = '';
			input_accept.value = '';
		}

		setTimeout(time_pause, 1400)
		setTimeout(close_sucss, 4000);
	}
});





