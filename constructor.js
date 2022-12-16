'use strict';

let recipeMap = new Map([
		['помидор', 300],
		['огурец', 100],
		['редис', 50],
]);

//перебор по ключам
for (let key of recipeMap.keys()) {
		alert(key);
}

//перебор по значениям
for (let value of recipeMap.values()) {
		alert(value);
}

//перебор по єлементам в формате ключ,значение
for (let entries of recipeMap) {
		alert(entries);
}