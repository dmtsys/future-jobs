const honorary = require('../data/honorary');
const smooth = require('../data/smooth');
const operator = require('../data/operator');

random = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = () => {
  const chief = Math.random() < 0.1 ? `${random(honorary)} ` : '';
  return `${chief}${random(smooth)} ${random(operator)}`;
};
