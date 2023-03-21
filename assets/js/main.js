/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//seleziono l'elemento della DOM che conterrà i numeri casuali

const containerElement = document.querySelector('#number_container')

//creo una funzione che generi 5 numeri casuali e che dopo x secondi scompaiano


let numbers;

function getRandomNumber(maxNumber){
    
    for (let i = 0; i < 5; i++) {

        numbers = Math.floor(Math.random() * maxNumber + 1);
        console.log(numbers)

     /*    console.log(containerElement) */

        // stampo a schermo i 5 numeri
        containerElement.innerHTML += `<div class="number_style">${numbers}</div>`
    }
}

setTimeout(deleteContainer, 3000);
function deleteContainer(containerName) {

    containerElement.classList.add("d-none")
    console.log('numbers hidden')


    for (let i = 0; i < 5; i++) {
        prompt('inserisci i numeri di Simon uno alla volta')
    
    }
}

//ciclo 5 volte un prompt per inserire i numeri
const youSaid = [

]







getRandomNumber(100)










