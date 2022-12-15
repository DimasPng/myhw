'use strict'

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User('Dima');

alert(user.name);
alert(user.isAdmin);