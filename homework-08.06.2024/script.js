const form = document.querySelector('.form');
const modal_window = document.querySelector('.modal-window');
const year_result = document.querySelector('.year-result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let input = document.querySelectorAll('.form__input');
	let form_year = document.querySelector('.form-year').value;
	let form_month = document.querySelector('.form-month').value;
	let form_date = document.querySelector('.form-date').value;
	let currentDate = new Date();
	let year = currentDate.getFullYear() - form_year;
	let month = currentDate.getMonth() + 1;
	let date = (currentDate.getDate());

	if (month < form_month || (month === form_month && date < form_date)) {
		year--;
	}

	year_result.innerHTML = `Вам ${year}`;

	let modal_open_window = () => {
		modal_window.classList.add('modal-open');
	}

	let modal_close_window = () => {
		modal_window.classList.remove('modal-open');
		year_result.innerHTML = "";
		input.forEach(input => input.value = "");
	}

	modal_open_window();

	 setTimeout(() => {
        modal_close_window();
    }, 2000);


})

