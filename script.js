function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(value)) {
        result = 'Please enter a valid temperature value.';
    } else {
        if (unit === 'C') {
            const fahrenheit = celsiusToFahrenheit(value);
            const kelvin = celsiusToKelvin(value);
            result = `${value}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'F') {
            const celsius = fahrenheitToCelsius(value);
            const kelvin = fahrenheitToKelvin(value);
            result = `${value}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'K') {
            const celsius = kelvinToCelsius(value);
            const fahrenheit = kelvinToFahrenheit(value);
            result = `${value}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
        }
    }
    document.getElementById('result').innerText = result;
}
