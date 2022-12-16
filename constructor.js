'use strict';

let john = {name: 'john'};

let visitCountMap = new Map();

visitCountMap.set(john, 123);

alert(visitCountMap.get(john));