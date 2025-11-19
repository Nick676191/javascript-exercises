const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	return arr.reduce(
    (acc, val) => 
      acc = acc + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, val) =>
    acc = acc * val);
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
  // creating the array from 1 to num
  // the spread operator `...` enumerates through the array object and assigns a numbered key to each value
  // then the .keys() method pulls all of these keys into our array that is created with the brackets
	let range = [...Array(num + 1).keys()].slice(1);
  return multiply(range);
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
