/*
fare un prompt per chiedere una parola al visitatore
creare una function che prenda in considerazione la lunghezza della parola

*/
const word = prompt("Dammi una parola");
const result = checkPal(word);

function checkPal(word) {
  const wLen = word.length;

  for (let i = 0; i < wLen / 2; i++) {
    // console.log(word[i]);
    // console.log(word[wLen - 1 - i]);
    if (word[i] !== word[wLen - 1 - i]) {
      return "Non è un palindromo";
    }
  }
  return "È un palindromo";
}

alert(result);
