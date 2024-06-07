let form = document.querySelector('.form__input');

form.addEventListener("focus", () => {
	form.classList.add('form--active');
})

form.addEventListener("blur", () => {
	form.classList.remove('form--active');
})