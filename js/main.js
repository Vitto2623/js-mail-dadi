// Inserisco email
const emailUtente = document.getElementById("email");
// creo lista email
const listaEmail = ["nome@gmail.com", "prova@gmail.com", "qwerty@gmail.com"];
const bottoneInvia = document.getElementById("user-button");
// chiedo l'email all'utente
bottoneInvia.addEventListener("click", function(){
    let emailTrovata;
    const emailUtente = document.getElementById("email").value;
    // controllo che sia nella lista di chi può accedere
    for (let i = 0; i < listaEmail.length; i++){
        if (emailUtente == listaEmail[i]){
            document.getElementById("messaggio-conferma").innerHTML = "Email corretta  - Benvuto nel sito";
            emailTrovata = "si";
        }
    }
        if (emailTrovata != "si"){
            document.getElementById("messaggio-negazione").innerHTML = "Email non corretta";
        }
})

// Inizio gioco dei dadi
// Prendo il bottone tramite classe html
const bottoneGioca = document.getElementById("button-play");
// Inizio evento click
bottoneGioca.addEventListener("click", function(){
    // Genero un numero random per il giocatore e per il computer
    const player = Math.floor(Math.random() * 6) + 1;
    document.getElementById("genera-1").innerHTML = player;
    const computer = Math.floor(Math.random() * 6) + 1;
    document.getElementById("genera-2").innerHTML = computer;
    // Stabilisco chi vince in base al punteggio più alto
    if (player > computer){
        document.getElementById("genera-3").innerHTML = "Player";
    } else if (player == computer){
        document.getElementById("genera-3").innerHTML = "Pareggio";
    } else {
        document.getElementById("genera-3").innerHTML = "Computer";
    }
})