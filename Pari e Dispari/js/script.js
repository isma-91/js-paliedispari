/*
prompt per chiedere pari o dispari all'utente 
prompt per fargli scegliere un numero
funzione per creare un numero random per il computer
sommare i 2 numeri
funzione per vedere se la somma dei 2 numeri è pari o dispari
*/
const userChoise = prompt("pari o dispari?");
const userNum = parseInt(prompt("Dammi un numero da 1 a 5"));
const compNum = getRndNum(1, 5);
console.log(compNum);
const sum = userNum + compNum;
const divisibility = isEven(sum);

// if (
//   (divisibility != 0 && userChoise == "dispari") ||
//   (divisibility === 0 && userChoise == "pari")
// ) {
//   alert(sum + "Hai vinto");
// } else {
//   alert(sum + "Hai perso");
// }

if (
  (divisibility && userChoise === "pari") ||
  (!divisibility && userChoise === "dispari")
) {
  alert(sum + " hai vinto");
} else {
  alert(sum + " hai perso");
}

function getRndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  if (num % 2 != 0) {
    return false;
  }
  return true;
}
