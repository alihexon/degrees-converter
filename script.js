const temperatureNumInput = document.querySelector('.js-temp-input');
const convertOption = document.querySelector('.temperature-sel');
const convertButton = document.querySelector('.convert-btn');
let resultParagraph = document.querySelector('.result');
let result;

function convertTemperature() {
 if (convertOption.value === 'toC') {
   result = (((temperatureNumInput.value - 32) * 5 / 9).toFixed(3));
   resultParagraph.innerText = `${temperatureNumInput.value} Fahrenheit is equal to ${result} Celsius`;
  } else if (convertOption.value === 'toF') {
    result = (((temperatureNumInput.value * 9 / 5) + 32).toFixed(1));
    resultParagraph.innerHTML = `${temperatureNumInput.value} Celsius is equal to ${result} Fahrenheit`;
 }
 temperatureNumInput.value = '';
}

convertButton.addEventListener('click', convertTemperature)
