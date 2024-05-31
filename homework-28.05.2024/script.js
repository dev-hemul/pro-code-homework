
let success = document.querySelector('.success');
let button = document.querySelector('.form__button');
let err = document.querySelector('.err');
let err_2 = document.querySelector('.error-2');


button.addEventListener('click', (evt) => {
	evt.preventDefault();
	let money = +document.querySelector('.form__input-name').value;
	let ready_to_use = +document.querySelector('.form__input-accept').value;

	if (money < ready_to_use) {
		button.style.marginTop = "50px";
		err.style.display = 'block';
	}else if(money > ready_to_use) {
		success.style.display = "block";
		button.style.marginTop = "50px";
		success.style.display = 'block';
	}else {
		return;
	}

	if (money === ready_to_use) {
	button.style.marginTop = "50px";
	err_2.style.display = 'block';
	}

})




















