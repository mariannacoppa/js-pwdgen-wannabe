document.getElementById("title").innerHTML = "Password Generator Wannabe";
document.getElementById("subtitle").innerHTML = "<em>Crea una password inserendo nome, cognome e colore preferito</em>";
// dichiarazione e assegnazione della variabile "nome"
let nome = prompt("Inserisci il tuo nome, tutto in minuscolo");
// dichiarazione e assegnazione della variabile "cognome"
let cognome = prompt("Inserisci il tuo cognome, tutto in minuscolo");
// dichiarazione e assegnazione della variabile "colorePreferito"
let colorePreferito = prompt("Inserisci il tuo colore preferito, tutto in minuscolo");
// concatenazione tra le 3 stringhe precedenti
document.getElementById("template_literal").innerText = `${nome}${cognome}${colorePreferito}23`;