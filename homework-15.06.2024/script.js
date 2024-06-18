let input_pib = document.querySelector(".user-pib");
let sort = document.querySelector(".form__sort");
let form = document.querySelector(".form");
let output = document.querySelector(".output");

let arr = [];

form.addEventListener("submit", event => {
	event.preventDefault();
	let arr_push = () => {
		arr.push(input_pib.value)
		return arr;
	}
	let updatedArr = arr_push();
	displayOutput(updatedArr);
	input_pib.value = '';
})

let displayOutput = (arr) => {
            output.innerHTML = '';

            arr.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                output.appendChild(li);
            });
        };

sort.addEventListener("click", event => {
	event.preventDefault();
	 arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
	displayOutput(arr);
})












