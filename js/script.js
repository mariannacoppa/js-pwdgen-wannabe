document.getElementById("title").innerHTML = "Password Generator Wannabe";
document.getElementById("subtitle").innerHTML = "<em>Crea una password inserendo nome, cognome e colore preferito</em>";
// dichiarazione e assegnazione della variabile "nome"
let nome = prompt("inserisci il tuo nome");
// dichiarazione e assegnazione della variabile "cognome"
let cognome = prompt("inserisci il tuo cognome");
// dichiarazione e assegnazione della variabile "colorePreferito"
let colorePreferito = prompt("inserisci il tuo colore preferito");
// concatenazione tra le 3 stringhe precedenti
document.getElementById("template_literal").innerText = `${nome}${cognome}${colorePreferito}23`;