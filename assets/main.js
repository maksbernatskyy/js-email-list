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
function getListMarkup(element) {
    `<li>${element}</li>`
}

// =======================================================================
// =======================================================================

/* Variabili */

// Array di email
const email = []
console.log(email)

// Lista html
const listField = document.getElementById('list')

// =======================================================================
// =======================================================================

/* Generazione email */

for (let i = 0; i < 10; i++) {

    // Dal server collego il comando
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
       .then(response => response.json())
       .then(data => {

        email.push(data)
       })
       .catch(error => {
        console.error(error)
       })

}

// =======================================================================
// =======================================================================

/* Spostamento nella lista dell'HTML */