// chiedere all'utente di inserire una parola
const word = prompt('Inserisci una parola');

// creare una funzione 

//Controllare che la parola inserita sia palindroma
function isPalindromeWord (pdWord) {

    let reversedWord = '';

    for (let i = pdWord.length -1; i >=0; i--) {

        reversedWord = reversedWord + pdWord[i];
}
// Se la parola è palindroma (true) altrimenti (false)
return reversedWord === word;
}

console.log(isPalindromeWord(word));