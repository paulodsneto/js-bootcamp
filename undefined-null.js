// Undefined em variáveis

let name;
name = 'Paulo';

if (name === undefined) {
    console.log('Please provide a valid name!');
} else {
    console.log(`Hi ${name}!`);
}

// Undefined em funções sem argumentos
// Undefined em funções sem retorno padrão

let square = function (num) {
    console.log(num);
}

square(); // Sem argumentos
let result = square();
console.log(result); // Sem retorno padrão

// Null com valor definido

let age = 25;
age = null;
console.log(age);



