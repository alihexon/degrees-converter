const temperatureNumInput = document.querySelector('.js-temp-input');
const temperatureInput = document.querySelector('.temperature-sel');
const convertOption = document.querySelector('.option');
const convertButton = document.querySelector('.convert-btn');
let resultParagraph = document.querySelector('.result');
let result;

function convertTemperature() {
 if (convertOption.value === 'c') {
   result = (((temperatureNumInput.value * 9 / 5) + 32).toFixed(1));
  } else if (convertOption.value === 'f') {
   result = (((temperatureNumInput.value - 32) * 5 / 9).toFixed(4));
 }
 displayResult();
 temperatureNumInput.value = '';
}

function displayResult() {
  if (convertOption.value === 'c') {
    resultParagraph.innerText = `${temperatureNumInput.value} Celsius is equal to ${result} Fahrenheit`;
   } else if (convertOption.value === 'f') {
    resultParagraph.innerText = `${temperatureNumInput.value} Fahrenheit is equal to ${result} Celsius`;
  }
}

convertButton.addEventListener('click', convertTemperature)
