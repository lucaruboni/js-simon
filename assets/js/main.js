/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//seleziono l'elemento della DOM che conterrà i numeri casuali

const containerElement = document.querySelector('#number_container')

//creo una funzione che generi 5 numeri casuali e che dopo x secondi scompaiano


let numbers;

const simonSaid = [

]

function getRandomNumber(maxNumber){
    
    for (let i = 0; i < 5; i++) {

        numbers = Math.floor(Math.random() * maxNumber + 1);
        console.log(numbers)
        simonSaid.push(numbers)
        
     /*    console.log(containerElement) */
        

        // stampo a schermo i 5 numeri
        containerElement.innerHTML += `<div class="number_style">${numbers}</div>`
    }
    console.log(simonSaid)

}

setTimeout(deleteContainer, 3000);
function deleteContainer(containerName) {

    containerElement.classList.add("d-none")
    console.log('numbers hidden')

}


setTimeout(asknumbers, 4000)
function asknumbers(input){
let yourNumber;

    for (let i = 0; i < 5; i++) {
        yourNumber = Number(prompt('inserisci i numeri di Simon uno alla volta'))
        youSaid.push(Number(yourNumber))
        console.log(yourNumber)
    
    }

    console.log(youSaid)
}



getRandomNumber(100)




const youSaid = [

]

const answer = [

]

// controllo quanti e quali numeri ho indovinato
setTimeout(checkNumber, 8000)
function checkNumber(params) {
   
//leggo la lista dei numeri di simon
for (let i = 0; i < simonSaid.length; i++) {
    const simonElement = simonSaid[i];
    console.log(simonElement, "ciao")
    //ogni volta che leggo un numero controllo se l'ha scritto anche l'utente
    if (simonSaid.includes(yourNumber) === true) { 
       answer.push(simonElement)  
       console.log(simonSaid.includes(yourNumber))
    }
    else{
        console.log('not good') 
    }

}

console.log(answer) 
}













