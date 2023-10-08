// script.js

document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let result;

        if (unit === 'celsius') {
            // Convert Celsius to Fahrenheit
            result = (temperature * 9/5) + 32;
            resultDiv.textContent = `${temperature} °C is ${result.toFixed(2)} °F`;
        } else if (unit === 'fahrenheit') {
            // Convert Fahrenheit to Celsius
            result = (temperature - 32) * 5/9;
            resultDiv.textContent = `${temperature} °F is ${result.toFixed(2)} °C`;
        }
    });
});
