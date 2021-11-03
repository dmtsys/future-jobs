// todo: enable in later version of node when there is no more warning
//import honorary from '../data/honorary.json';
//import smooth from '../data/smooth.json';
//import operator from '../data/operator.json';

import { readFileSync } from 'fs';

const honorary = JSON.parse(readFileSync(new URL('../data/honorary.json', import.meta.url)));
const smooth = JSON.parse(readFileSync(new URL('../data/smooth.json', import.meta.url)));
const operator = JSON.parse(readFileSync(new URL('../data/operator.json', import.meta.url)));

import { xmur3, mulberry32 } from './prng';

function zeroToOneVal(seed) {
  return seed != undefined ? mulberry32(xmur3(seed.toString())())() : Math.random();
}

function random(array, seed) {
  return array[Math.floor(zeroToOneVal(seed) * array.length)];
}

export default function futureJob(seed) {
  const hon = zeroToOneVal(seed) < 0.2 ? `${random(honorary, seed)} ` : '';
  return `${hon}${random(smooth, seed)} ${random(operator, seed)}`;
}
