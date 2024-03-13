const temperatureNumInput = document.querySelector('.js-temp-input')
const temperatureInput = document.querySelector('.temperature-sel')
const convertButton = document.querySelector('.convert-btn')
let resultParagraph = document.querySelector('.result')

// function convertToFahrenheit(celsius) {
//   const convertedCelsius = (celsius * 9 / 5) + 32;
//   return convertedCelsius;
// }

// function convertToCelsius(fahrenheit) {
//   const convertedFahrenheit = (fahrenheit - 32) * 5 / 9;
//   return convertedFahrenheit;
// }

// function converTemperature(degrees, unit) {
//   if (unit === 'c') {
//     const convertedCelsius = (degrees * 9 / 5) + 32;
//     return convertedCelsius;
//   } else if (unit === 'f') {
//     const convertedFahrenheit = (degrees - 32) * 5 / 9;
//     return convertedFahrenheit;
//   } else {
//     console.log('Either the degrees or the unit if undefined')
//   }
// }

// console.log(convertToFahrenheit(25));
// console.log(convertToCelsius(86));
// console.log(converTemperature(25, 'c'));
// console.log(converTemperature(86, 'f'));
