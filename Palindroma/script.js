let userW = prompt("Inserisci la parola, scoprirai se è palindroma");

parola(userW);

function parola(x) {
    x= x.toUpperCase();
    let bool = true;

    for (let i = 0, j = (x.length - 1); j > i ; j--, i++){
        if (x[i] != x[j]){
            bool=false;
            break;
        }
    }

    if (bool==true){
        console.log("La parola inserita è palindroma.");
    } else{
        console.log("La parola inserita non è palindroma.");
    }
}

////////////////////////////////////////////////////////////////
////////////////// Metodo suggerito da Loris ///////////////////
///////////////////////////////////////////////////////////////

// prende una parola
//  crea una nuova parola, letta al contrario
//  per leggerla al contrario
    // creiamo una nuova parola nuova
    // e aggiungiamo una lettera della parola passata
    // partendo dalla fine

// controlliamo le due parole

word(userW);

function word(x) {
    x= x.toUpperCase();
    let y;

    for (let i = 0; i < x.length ; i++){
        if (i==0){
            y= x[i];
        } else{
            y= y + x[i];
        }        
    }

    if (y==x){
        console.log("La parola inserita è palindroma.");
    } else{
        console.log("La parola inserita non è palindroma.");
    }
}