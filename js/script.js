// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function randomNumber (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min );
    return num;
}

function isInArray (element, array) {
    
    for (var i = 0; i < array.length; i++) {
        
        if (element==array[i]) {
            return true;
        }
    }
    return false;
}

var numeriDaIndovinare = [];
var numeriScelti = [];
var numeriIndovinati = 0;
var numeroIndovinato = [];
var conto = 0;

while (numeriDaIndovinare.length < 5) {
    var numero = randomNumber(1,100);

    if (!isInArray(numero, numeriDaIndovinare)) {
        numeriDaIndovinare.push(' ' + numero + ' ');
    }
}
alert('Memorizza questi numeri:\n\n'+ numeriDaIndovinare);

var countDown = 29;
var tempo = setInterval(timer,1000);

function timer () {
    document.getElementById("risultato").innerHTML = countDown;
    
    if (countDown == -1) {
        clearInterval(tempo);
        
    } else {
        countDown--;
    }

}


setTimeout(function() {
    for (var i =0; i < 5; i++) {
        conto++;
        var numeroUtente = parseInt(prompt('inserisci il '+ conto + '° numero'));
        

        while (isInArray(numeroUtente,numeriScelti)) {
            var numeroUtente = parseInt(prompt('Hai già inserito questo numero !\nReinserisci il '+ conto + '° numero'));
        }
        
        numeriScelti.push(numeroUtente);

        if (isInArray(numeroUtente, numeriDaIndovinare)) {
            numeroIndovinato.push(' ' + numeroUtente + ' ');
            numeriIndovinati++;
        }
        console.log('numeri scelti ' + numeriScelti);
        console.log('numeri indovinati ' + numeriIndovinati);
        console.log('numero indovinato ' + numeroIndovinato);
    }

    document.getElementById('risultato').innerHTML = 'Hai indovinato ' + numeriIndovinati + ' numeri <br> ' + numeroIndovinato;
    

}, 31000);

console.log('numeri da indovinare' + numeriDaIndovinare);

