let form = document.querySelector('.form');
let pib = document.getElementById("pib-inp");
let age = document.getElementById("age-inp");
let gender = document.getElementById("gender-select");
let birthday = document.getElementById("birthday-input");
let arrow = document.querySelector(".arrow");
let sortAZ = document.querySelector(".sort-AZ");

let students = [];

form.addEventListener("submit", function (evt) {
	evt.preventDefault();

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

});

arrow.addEventListener("click", function (evt) {
	evt.preventDefault();
  students.reverse();
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
});

sortAZ.addEventListener("click", function (evt) {
	evt.preventDefault();
	const studTable = document.getElementById('stud-table');
	studTable.innerHTML = '';
	students.sort((a, b) => a.pib.localeCompare(b.pib));

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
});




