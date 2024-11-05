## Esercizio Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Dati
Parola inserita dall'utente

## Esecuzione Logica
Faccio inserire la parola dell'utente tramite prompt e la salvo.

Applico la funzione alla parola

La funzione chiede in ingresso una parola
    Creo una variabile Booleana con valore true

    Apre un ciclo for che reitera su due variabili, i inizializzata pari a zero, e j inizializzata pari a string.length-1
    Ad ogni ciclola i aumenta di uno e j diminuisce di uno
    Il ciclo si interrompe quando la seconda variabile è minore o ugale alla prima
        Se il carattere della stringa alla posizione i-esima con quello alla posizione j-esima sono diversi
            Stampa "La parola inserita non è palindroma."
            La variabile Booleana diventa false
            Esci dal ciclo

Se la variabile Booleana è true
    Stampa "La parola inserita è palindroma"


//////////////////////////////////
## Esercizio Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## Dati
Pari o Dispari inserito dall'utente
Numero inserito da 1 a 5 dall'utente
Numero random da 1 a 5 generato dal pc

## Esecuzione Logica
Faccio inserire la parola "Pari" o la parola "Dispari" dall'utente tramite prompt e la salvo.
Faccio inserire un numero da 1 a 5 dall'utente tramite prompt e lo salvo.

Creo una variabile numero pc e il suo risultato è il risultato della funzione random da-a dando come input 1 e 5

Creo la funzione random da-a con 2 variabile x e y
    randomizza un numero intero compreso tra x e y

Creo la variabile somma e le assegno come valore la somma tra il numero del pc e il numero dell'utente.

Creo una variabile resultato pari al risultato della funzione pari o dispari dando come input la somma

Creo la funzione pari o dispari con variabile x
    Se il resto della divisione tra x e 2 è 0
        il risultato è pari
    Altrimenti
        il risultato è dispari

Se la variabile risultato è uguale alla parola dichiarata dall'utente
    Stampo a schermo "Hai vinto"
Altrimenti
    Stampo a schermo "Hai perso"



Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?
