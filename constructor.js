'use strict';

let set = new Set(['апельсин', 'яблоко', 'банан']);

for (let value of set) {
		alert(value);
}

//тоже самое с foreach
set.forEach((value, valueAgain, set) => {
		alert(value);
});