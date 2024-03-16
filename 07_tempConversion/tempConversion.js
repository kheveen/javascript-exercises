const convertToCelsius = function(fahrenheit) {
  // Convert Fahrenheit to Celcius using the formula: (Fahrenheit - 32) * 5/9
  let celsius = (fahrenheit - 32) * 5 / 9;
  // Round the result to one decimal place
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // Convert Celsius to Fahrenheit using the formula: (celsius * 9/5) + 32
  let fahrenheit = (celsius * 9 / 5) +32;
  // Round the result to one decimal place
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
