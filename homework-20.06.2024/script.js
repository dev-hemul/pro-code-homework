let form = document.querySelector('.form');
let pib = document.getElementById("pib-inp");
let age = document.getElementById("age-inp");
let gender = document.getElementById("gender-select");
let birthday = document.getElementById("birthday-input");
let priority_sort_pib = document.querySelector(".priority-sort-pib");
let alphabet_sort_pib = document.querySelector(".alphabet-sort-pib");
let priority_sort_age = document.querySelector(".priority-sort-age");
let alphabet_sort_age = document.querySelector(".alphabet-sort-age");
let priority_sort_gender = document.querySelector(".priority-sort-gender");
let alphabet_sort_gender = document.querySelector(".alphabet-sort-gender");
let priority_sort_birthday = document.querySelector(".priority-sort-birthday");
let alphabet_sort_birthday = document.querySelector(".alphabet-sort-birthday");



let students = [];

let createTable = () => {
	const studTable = document.getElementById('stud-table');
	studTable.innerHTML = '';

	for (const student of students) {
		const tr = document.createElement('tr');
		const tdPib = document.createElement('td');
		const tdAge = document.createElement('td');
		const tdGender = document.createElement('td');
		const tdBirthday = document.createElement('td');

		tdPib.textContent = student.pib;
		tdAge.textContent = student.age;
		tdGender.textContent = student.gender;
		tdBirthday.textContent = student.birthday;

		tr.append(tdPib, tdAge, tdGender, tdBirthday);
		studTable.append(tr);
	}
}

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	console.log(birthday.value);

	students.push({
		id: (students.length + 1).toString(),
		pib: pib.value,
		age: age.value,
		gender: gender.value,
		birthday: birthday.value
	});

	pib.value = '';
	age.value = '';
	gender.value = '';
	birthday.value = '';
	createTable();

});

priority_sort_pib.addEventListener("click", function (evt) {
	evt.preventDefault();
  students.reverse();
	createTable();

});

alphabet_sort_pib.addEventListener("click", function (evt) {
	evt.preventDefault();
	students.sort((a, b) => a.pib.localeCompare(b.pib));
	createTable();
});

priority_sort_age.addEventListener("click", function (evt) {
	evt.preventDefault();
  students.reverse();
	createTable();

});

alphabet_sort_age.addEventListener("click", function (evt) {
	evt.preventDefault();
	students.sort(function(a, b) {
  return a.age - b.age;
});
	createTable();

});

priority_sort_gender.addEventListener("click", function (evt) {
	evt.preventDefault();
  students.reverse();
	createTable();

});

alphabet_sort_gender.addEventListener("click", function (evt) {
	evt.preventDefault();
	students.sort((a, b) => a.gender.localeCompare(b.gender));
	createTable();

});

priority_sort_birthday.addEventListener("click", function (evt) {
	evt.preventDefault();
  students.reverse();
	createTable();

});

alphabet_sort_birthday.addEventListener("click", function (evt) {
	evt.preventDefault();
	students.sort(function(a, b) {
        const yearA = new Date(a.birthday).getFullYear();
        const yearB = new Date(b.birthday).getFullYear();
        return yearA - yearB;
    });
	createTable();

});




