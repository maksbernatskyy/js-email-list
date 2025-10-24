/*
Tools:

- const / let
- for
- fetch
- function
*/

// =======================================================================
// =======================================================================

/* Funzioni */

// Markup elemento lista
function getElementMarkup(element) {
  return `<li>${element}</li>`;
}

// Processo creazione email ed inserimento nell'HTML
function getListMarkup(arr, field) {

  // Dal server collego il comando
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      // Inserimento dati nell'array
      arr.push(data.response);

      // Quando l'array sarà pieno, si avvierà il processo inserimento dati
      if (arr.length === 10) {
        for (let i = 0; i < 10; i++) {
          const thisEl = arr[i];
          field.innerHTML += getElementMarkup(thisEl);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// =======================================================================
// =======================================================================

/* Variabili */

// Array di email
const email = [];
console.log(email);

// Lista html
const listField = document.getElementById("list");

// Bottone
const buttonEl = document.querySelector('button')

// =======================================================================
// =======================================================================

/* Generazione email */

buttonEl.addEventListener('click', function(){

  // Svuotamento lista
  email.length = 0
  listField.innerHTML = ''
  // Riempimento lista
  for (let i = 0; i < 10; i++) {
    getListMarkup(email, listField)
}

})


