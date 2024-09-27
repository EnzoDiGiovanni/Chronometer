let display = document.getElementById("time");
let start = document.querySelector(".start");
let pause = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let interval; // Variable pour stocker l'intervalle
let elapsedTime = 0; // Variable pour stocker le temps total écoulé
let startTime; // Variable pour stocker le temps de départ

function startTimer() {
  // Ajuste `startTime` en tenant compte de ce qui a déjà été accumulé
  startTime = Date.now() - elapsedTime;

  // Initialise et stocke l'intervalle
  interval = setInterval(function () {
    // Calcule le temps écoulé en millisecondes depuis le début, en tenant compte de `elapsedTime`
    let currentTime = Date.now();
    let timeElapsed = currentTime - startTime;

    // Convertit le temps écoulé en secondes, minutes et heures
    let milliseconds = timeElapsed % 1000;
    let seconds = Math.floor((timeElapsed / 1000) % 60);
    let minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
    let hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);

    // Formate le temps écoulé en affichant 00:00:00
    let formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;

    // Affiche le minuteur mis à jour à chaque seconde
    display.innerHTML = formattedTime;
  }, 10);
}

function stopTimer() {
  // Met à jour elapsedTime avant de stopper l'intervalle
  elapsedTime += Date.now() - startTime; // Utilise la variable `startTime` globale
  clearInterval(interval); // Arrête l'intervalle
}

function resetTimer() {
  clearInterval(interval); // Arrête l'intervalle
  elapsedTime = 0; // Remet à zéro le temps total écoulé
  display.innerHTML = "00:00:00:000"; // Réinitialise l'affichage
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
