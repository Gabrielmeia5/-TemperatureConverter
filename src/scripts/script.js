let conversionResult;
let inputUnit;
let outputUnit;
let temperatureInput;
let formattedTemperature;

document.getElementById('power').addEventListener('click', handleConversion);
document.getElementById('selectInput').addEventListener('change', handleConversion);
document.getElementById('selectOutput').addEventListener('change', handleConversion);

function handleConversion() {
    inputUnit = document.getElementById('selectInput').value;
    outputUnit = document.getElementById('selectOutput').value;
    temperatureInput = Number(document.getElementById('input').value);
    
    convertTemperature();

    if (conversionResult % 1 === 0) {
        formattedTemperature = conversionResult.toFixed(0);
    } else {
        formattedTemperature = conversionResult.toFixed(2);
    }

    document.getElementById('output').innerText = formattedTemperature;
}

function convertToCelsius() {
    switch (inputUnit) {
        case 'fahrenheit':
            temperatureInput = (temperatureInput - 32) * 5/9;
            break;
        case 'kelvin':
            temperatureInput = temperatureInput - 273.15;
            break;
        case 'rankine':
            temperatureInput = (temperatureInput - 491.67) * 5/9;
            break;
    }
}

function convertTemperature() {
    convertToCelsius();
    
    switch (outputUnit) {
        case 'celsius':
            conversionResult = temperatureInput;
            break;
        case 'fahrenheit':
            conversionResult = (temperatureInput * 9/5) + 32;
            break;
        case 'kelvin':
            conversionResult = temperatureInput + 273.15;
            break;
        case 'rankine':
            conversionResult = (temperatureInput * 9/5) + 491.67;
            break;
    }
    
    return conversionResult;
}
