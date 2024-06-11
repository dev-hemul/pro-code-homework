const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let input = document.querySelectorAll('.form__input');
	let form_year = document.querySelector('.form-year').value;
	let form_month = document.querySelector('.form-month').value;
	let form_date = document.querySelector('.form-date').value;
	let currentDate = new Date();
	let year = currentDate.getFullYear() - form_year;
	let month = (currentDate.getMonth() + 1) - form_month;
	let date = (currentDate.getDate()) - form_date;

	if (month < 0 || (month === 0 && date < 0)) {
		year--;
	}
	console.log("Вам " + year);
	input.forEach(input => input.value = "");
})

