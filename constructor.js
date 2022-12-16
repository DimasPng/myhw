'use strict';

let set = new Set();

let john = {name: 'john'};
let mary = {name: 'mary'};
let pete = {name: 'pete'};

//считаем гостей, некоторые приходят по несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(pete);

//сет хранит только 3 уникальных значения
alert(set.size);

for (let key of set) {
		alert(key.name);
}