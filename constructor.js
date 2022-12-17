'use strict';

class ValidationError extends Error {
		constructor(message) {
				super(message);
				this.name = 'ValidationError';
		}
}

function readUser(json) {

		let user = JSON.parse(json);

		if (!user.age) {
				throw new ValidationError('Нет поля age');
		}
		if (!user.name) {
				throw new ValidationError('Нет поля name');
		}
		return user;
}

try {
		let user = readUser('{ "age": 25 }');
} catch (err) {
		if (err instanceof ValidationError) {
				alert('Некоректные данные' + err.message);
		} else if (err instanceof SyntaxError) {
				alert('JSON ошибка синтаксиса' + err.message);
		} else {
				throw err;
		}
}