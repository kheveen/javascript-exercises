const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(...numbers) {
  // If only two numbers are provided, perform simple multiplication
  if (numbers.length === 2 && typeof numbers[0] === 'numbers' && typeof numbers[1] === 'number') {
    return numbers[0] * numbers[1];
  }

  // If an array of numbers is provided, calcualte the product of all numbers
  if (numbers.length === 1  && Array.isArray(numbers[0])) {
    return numbers[0].reduce((total, num) => total * num, 1);
  }
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
