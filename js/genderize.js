import { FORM, INPUT, GENDERS } from './ui-elements.js';

let firstName;

FORM.addEventListener("submit", getGender);

function getGender(e) {
	e.preventDefault();

	firstName = INPUT.value;
	const serverUrl = 'https://api.genderize.io';
	const url = `${serverUrl}?name=${firstName}`;

	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Ошибка HTTP статуса: ${response.status}`);
			}
			return response.json();
		})
		.then(data => checkGender(data.gender))
		.catch(error => {
			alert('Ошибка при запросе к серверу:', error);
		})

	resetInput(INPUT);
}

function createPersonGender() {
	const personGender = document.createElement('p');
	personGender.classList.add('genderize__person-gender');
	FORM.after(personGender);
	return personGender;
}

function checkGender(data) {
	const personGender = createPersonGender();

	switch (data) {
		case GENDERS.MALE:
			personGender.textContent = `Пол человека по имени ${firstName}: ${GENDERS.RU_MALE}`;
			break;
		case GENDERS.FEMALE:
			personGender.textContent = `Пол человека по имени ${firstName}: ${GENDERS.RU_FEMALE}`;
			break;
		default:
			personGender.textContent = `Пол человека по имени ${firstName}: ${GENDERS.RU_UNDEFINED}`;
			break;
	}
}

function resetInput(input) {
	const initialValue = '';
	input.value = initialValue;
}