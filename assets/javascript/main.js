/* 
Istruzioni:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

//chiedi a utente quanti chilometri vuole percorrere e l'età del passeggero
var km = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(km);
var msg_1 = document.getElementById("kmetri");
msg_1.innerHTML = "Devi percorrere " + km + " chilometri;";

var age = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(age);
var msg_2 = document.getElementById("anni");
msg_2.innerHTML = "Il passeggero ha " + age + " anni;"


//calcola il prezzo del viaggio
//il prezzo è definito in base ai km (0.21€/km)
var price = km * 0.21;
console.log(price);
var msg_3 = document.getElementById("prezzo");
msg_3.innerHTML = "Il tuo biglietto costa " + price + " euro";

//va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65
if (age < 18) {
    var price_under = price - ((price / 100) * 20);
    console.log(price_under);
    document.getElementById("sconto").innerHTML = "Applicato uno sconto del 20% per gli under 18:";
    document.getElementById("prezzo").innerHTML = "Il tuo biglietto costa " + price_under + " euro";
} else if (age > 65) {
    var price_over = price - ((price / 100) * 40);
    console.log(price_over);
    document.getElementById("sconto").innerHTML = "Applicato uno sconto del 40% per gli over 65:";
    document.getElementById("prezzo").innerHTML = "Il tuo biglietto costa " + price_over + " euro";
}
