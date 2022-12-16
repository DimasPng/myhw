'use strict';

let map = new Map();

map.set('1', 'str1');
map.set(1, 'number');
map.set(true, 'bool');

alert(map.get('1'));
alert(map.get(1));
alert(map.get(true));