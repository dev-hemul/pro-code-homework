let input_name = document.querySelector(".form__input-name");
let input_accept = document.querySelector(".form__input-accept");
let form_button = document.querySelector(".form__button");
let err = document.querySelector(".err");
let err_2 = document.querySelector(".err-2");
let success = document.querySelector(".success");

success.classList.add()


form_button.addEventListener("click", (evt) => {
	evt.preventDefault();
	if (input_accept.value !== 'так' && input_accept.value !== 'Так') {
		err_2.style.display = "block";
		form_button.style.marginTop = "70px";

		function err2_close() {
			err_2.style.display = "none";
			form_button.style.marginTop = "15px";
		}

		setTimeout(err2_close, 2000);

	} else if (input_accept.value === 'так' && input_name.value === '') {
		err.style.display = "block";
		form_button.style.marginTop = "70px";
		function err_close() {
			err.style.display = "none";
			form_button.style.marginTop = "15px";
		}

		setTimeout(err_close, 2000);

	} else if (input_accept.value === 'Так' && input_name.value === '') {
		err.style.display = "block";
		form_button.style.marginTop = "70px";

		function err_close() {
			err.style.display = "none";
			form_button.style.marginTop = "15px";
		}

		setTimeout(err_close, 2000);
		
	} else {
		err.style.display = "none";
		err_2.style.display = "none";
		success.style.display = "block";
		form_button.style.marginTop = "50px";

		function close_sucss() {
			success.style.display = "none";
			form_button.style.marginTop = "15px";
			input_name.value = '';
			input_accept.value = '';
		}

		setTimeout(close_sucss, 2000);
	}
});





