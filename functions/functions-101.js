// Function - input (argumentos); code; output(o retorno da função)

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3);
console.log(value);

// Desafio

// convertFahrenheitToCelsius
// Chamar a função algumas vezes
// Printar o valor de retorno convertido

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32)*5/9;
    return celsius;
}

let resultTemp = convertFahrenheitToCelsius(32);
let resultTemp2 = convertFahrenheitToCelsius(68);
console.log(resultTemp);
console.log(resultTemp2);