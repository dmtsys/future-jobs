#!/usr/bin/env node
const areas = require('./data/areas');
const operators = require('./data/operators');

const area = areas[Math.floor(areas.length * Math.random())];
const operator = operators[Math.floor(operators.length * Math.random())];

console.log(`${area} ${operator}`);
