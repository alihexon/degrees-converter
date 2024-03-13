const temperatureNumInput = document.querySelector('.js-temp-input');
const temperatureInput = document.querySelector('.temperature-sel');
const convertOption = document.querySelector('.option');
const convertButton = document.querySelector('.convert-btn');
let resultParagraph = document.querySelector('.result');
let result;

function convertTemperature() {
 if (convertOption.value === 'c') {
   console.log(((temperatureNumInput.value * 9 / 5) + 32).toFixed(1));
  } else if (convertOption.value === 'f') {
   console.log(((temperatureNumInput.value - 32) * 5 / 9).toFixed(4));
 }

 temperatureInput.value = '';
 temperatureNumInput.value = '';
}

convertButton.addEventListener('click', convertTemperature)
