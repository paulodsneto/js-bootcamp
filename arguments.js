// Multiplos argumentos em função

let add = function (a, b, c){
    return a + b + c;
}

let result = add(10, 5, 5);
console.log(result);

// Argumento padrão em função

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `My name is: ${name}. The score is: ${score}`
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

/*
    Desafio - Calculadora de gorjetas
    2 argumentos - total, tipPercent

*/

let tipCalculator = function (total, tipPercent = .2) {
    let accountBill = total + (total * tipPercent);
    return accountBill;
}

let tipPercentage = tipCalculator(100, undefined);
let tipPercentage2 = tipCalculator(100, .6);
console.log(tipPercentage);
console.log(tipPercentage2);

