function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var convertedTemperature;
    
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
    
    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById("result").innerHTML = temperatureInput + " Celsius = " + convertedTemperature + " Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById("result").innerHTML = temperatureInput + " Fahrenheit = " + convertedTemperature + " Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        document.getElementById("result").innerHTML = temperatureInput + " Kelvin = " + convertedTemperature + " Celsius";
    }
}