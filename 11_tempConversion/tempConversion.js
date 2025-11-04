const convertToCelsius = function(fHeight) {
  let celsius = (fHeight - 32) * (5/9);
  // rounding the float value to 1 decimal place (would multiply and divide by 100 to get two decimal places)
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fHeight = (celsius * (9/5)) + 32;
  // rounding the float value to 1 decimal place
  return Math.round(fHeight * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
