let sceltaUser = prompt("Cosa scegli, PARI o DISPARI?");
sceltaUser = sceltaUser.toUpperCase();

let numeroUser = prompt("Scegli un numero compreso tra 1 e 5!");
numeroUser = parseInt(numeroUser);

let numeroPC = random_da_a(1,5);

let somma = numeroPC + numeroUser;

let risultato= pariODispari(somma);

console.log(`Tu hai scelto ${sceltaUser}`);
console.log(`Tu hai scelto il numero ${numeroUser}, mentre il Computer ha scelto ${numeroPC}`)
console.log(`La somma dei due numeri è ${somma}, che è un numero ${risultato}`);
if (sceltaUser == 'PARI' || sceltaUser == 'DISPARI'){
    if (numeroUser <= 5 && numeroUser >= 1){
        if (risultato == sceltaUser){
            console.log("Complimenti hai vinto!");
        } else{
            console.log("Mi dispiace hai perso :(");
        }
    } else {
        console.log(`Non puoi scegliere ${numeroUser}, devi scegliere un numero compreso tra 1 e 5`);
    }    
} else {
    console.log(`Non puoi scegliere ${sceltaUser}, devi scegliere tra Pari e Dispari`);
}

function pariODispari (x){
    if (x % 2 == 0){
        return 'PARI';
    } else{
        return 'DISPARI';
    }
}

function random_da_a(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

