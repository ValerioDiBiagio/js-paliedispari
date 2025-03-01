//L'utente sceglie "pari" o "dispari"

const evenOrOdd = prompt("Scegli pari o dispari");
console.log(evenOrOdd);

//L'utente inserisce un numero da 1 a 5

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

//Generare un numero random (da 1 a 5) per il computer

const number = Math.floor(Math.random()*5) +1;
console.log(number);

//Somma dei due numeri

const sum = userNumber + number;
console.log(sum);

function resultEvenOrOdd(numOne, numTwo) {

    //Se la somma dei due numeri è pari
    //Input "Ho vinto"

    if (numOne % 2 === 0 && numTwo % 2 === 0 || numOne % 2 !== 0 && numTwo % 2 !==0 ) {
        return 'Ho vinto, il computer ha perso';
    }
    
    //ALTRIMENTI se la somma dei due numeri è dispari
    //Input "Ho perso"
    
    return 'Ho perso, il computer ha vinto';
}

console.log(resultEvenOrOdd(sum, userNumber));