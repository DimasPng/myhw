'use strict';

const FORM = document.querySelector('#form');
const INPUT = document.querySelector('#input');
const BUTTON = document.querySelector('#button');

FORM.onsubmit = function (event) {
		event.preventDefault();
};

BUTTON.addEventListener('click', saveInLocalStorage);

function saveInLocalStorage() {
		localStorage.setItem('cityList', INPUT.value);
}

function render() {
		const ARRAY = localStorage.getItem('cityList');
		console.log(ARRAY);
		let set = new Set(ARRAY); //в set город записывает по буквам.
		console.log(set.size);
}

render();