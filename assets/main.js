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

function getListMarkup(element) {
    return `<li>${element}</li>`
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

        // Inserimento dati nell'array
        email.push(data.response)

        // Quando l'array sarà pieno, si avvierà il processo inserimento dati
        if (email.length === 10) {
            for(let i = 0; i < 10; i++) {
                const thisEmail = email[i]
                listField.innerHTML += getListMarkup(thisEmail)
            } 
        }
       })
       .catch(error => {
        console.error(error)
       })
}
