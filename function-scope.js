// Escopo Global (convertFahrenheitToCelsius, resultTemp, resultTemp2)
  // Escopo Local (fahrenheit, celsius)
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32)*5/9;
    if (celsius <= 0) {
        let isFreezing = true;
    }
    return celsius;

}

let resultTemp = convertFahrenheitToCelsius(32);
let resultTemp2 = convertFahrenheitToCelsius(68);
console.log(resultTemp);
console.log(resultTemp2);