let modelInput = document.querySelector(".model__input");
let modelButton = document.querySelector(".model__button");
let modelButtonClear = document.querySelector(".model__button-clear");
let listWrapper = document.querySelector(".list__wrapper");

let arr = [];

modelButton.addEventListener("click", (e) => {
	e.preventDefault();
	let modelValue = modelInput.value;
	listWrapper.style.backgroundColor = "antiquewhite";
	if (modelValue) {
		arr.push(modelValue);
		modelInput.value = "";
		console.log(arr);
		listWrapper.insertAdjacentHTML('beforeend', `<div>${modelValue}</div>`);
	}

})

modelButtonClear.addEventListener("click", (e) => {
	e.preventDefault();
	arr = [];
	listWrapper.style.backgroundColor = "transparent";
	listWrapper.innerHTML = "";
})
