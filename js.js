alert("♫ sasso carta forbice ♫");

var nomeGiocatore = window.prompt("Ciao, inserisci qui il tuo nome");

document.getElementById("titolo").innerHTML = "Benvenuto  " + nomeGiocatore;

var sceltaUtente;

function cliccatoCarta (){
	sceltaUtente =  "carta"
	alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoForbici () {
	sceltaUtente =  "forbici"
	alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoSasso () {
	sceltaUtente =  "sasso"
	alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoLucertola () {
	sceltaUtente =  "lucertola"
	alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoSpock () {
	sceltaUtente =  "spock"
	alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}
function verdetto () {
	document.getElementById("carta").style.display = 'none';
	document.getElementById("forbici").style.display = 'none';
	document.getElementById("sasso").style.display = 'none';
	document.getElementById("spock").style.display = 'none';
	document.getElementById("lucertola").style.display = 'none';
	document.getElementById("pulsante").style.display = 'none';
	var variabile = Math.round(Math.random() * 5);
	if(variabile == "1") {
		sceltaComputer = "carta";
	}
	if(variabile == "2") {
		sceltaComputer = "forbici";
	}
	if(variabile == "3") {
		sceltaComputer = "sasso";
	}
	if(variabile == "4") {
		sceltaComputer = "spock";
	}
	if(variabile == "5") {
		sceltaComputer = "lucertola";
	}
	
var  risultato;
if (sceltaUtente == "carta" && sceltaComputer == "sasso") {
	risultato = "VINTO"
}

if (sceltaUtente == "carta" && sceltaComputer == "forbici") {
	risultato = "PERSO"
}

if (sceltaUtente == "carta" && sceltaComputer == "carta") {
	risultato = "PAREGGIATO"
}

if (sceltaUtente == "forbici" && sceltaComputer == "sasso") {
	risultato = "PERSO"
}

if (sceltaUtente == "forbici" && sceltaComputer == "carta") {
	risultato = "VINTO"
}

if (sceltaUtente == "forbici" && sceltaComputer == "forbici") {
	risultato = "PAREGGIATO"
}

if (sceltaUtente == "sasso" && sceltaComputer == "forbici") {
	risultato = "VINTO"
}

if (sceltaUtente == "sasso" && sceltaComputer == "carta") {
	risultato = "PERSO"
}

if (sceltaUtente == "sasso" && sceltaComputer == "sasso") {
	risultato = "PAREGGIATO"
}

if (sceltaUtente == "sasso" && sceltaComputer == "lucertola") {
	risultato = "VINTO"
}

if (sceltaUtente == "sasso" && sceltaComputer == "spock") {
	risultato = "PERSO"
}

if (sceltaUtente == "carta" && sceltaComputer == "pistola") {
	risultato = "PERSO"
}

if (sceltaUtente == "forbici" && sceltaComputer == "pistola") {
	risultato = "PERSO"
}

if (sceltaUtente == "lucertola" && sceltaComputer == "spock") {
	risultato = "VINTO"
}
if (sceltaUtente == "lucertola" && sceltaComputer == "forbici") {
	risultato = "PERSO"
}
if (sceltaUtente == "lucertola" && sceltaComputer == "forbici") {
	risultato = "PERSO"
}
if (sceltaUtente == "spock" && sceltaComputer == "carta") {
	risultato = "PERSO"
}
if (sceltaUtente == "lucertola" && sceltaComputer == "sasso") {
	risultato = "PERSO"
}
if (sceltaUtente == "spock" && sceltaComputer == "lucertola") {
	risultato = "PERSO"
}
if (sceltaUtente == "spock" && sceltaComputer == "forbici") {
	risultato = "VINTO"
}
if (sceltaUtente == "carta" && sceltaComputer == "spock") {
	risultato = "VINTO"
}
if (sceltaUtente == "forbici" && sceltaComputer == "lucertola") {
	risultato = "VINTO"
}
if (sceltaUtente == "spock" && sceltaComputer == "spock") {
	risultato = "PAREGGIATO"
}
if (sceltaUtente == "lucertola" && sceltaComputer == "lucertola") {
	risultato = "PAREGGIATO"
}
if (sceltaUtente == "spock" && sceltaComputer == "sasso") {
	risultato = "VINTO"
}

	document.getElementById("titolo").innerHTML = "HAI " + risultato;
	document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + sceltaComputer + ". Tu hai scelto  "+ sceltaUtente;
}


