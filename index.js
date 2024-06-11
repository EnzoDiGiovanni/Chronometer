// @ts-nocheck
let timeDisplay = document.querySelector(".time");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let hoursDisplay = document.querySelector(".hours");
let minutesDisplay = document.querySelector(".minutes");
let secondesDisplay = document.querySelector(".secondes");
let millisecondsDisplay = document.querySelector(".milliseconds"); // Nouvel élément pour les millisecondes

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startButton.addEventListener("click", startChrono);
stopButton.addEventListener("click", stopChrono);
resetButton.addEventListener("click", resetChrono);

function startChrono() {
  if (!timer) {
    timer = setInterval(updateTime, 10);
  }
}

function stopChrono() {
  clearInterval(timer);
  timer = null;
}

function resetChrono() {
  stopChrono();
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

function updateDisplay() {
  hoursDisplay.textContent = String(hours).padStart(2, "0") + " : ";
  minutesDisplay.textContent = String(minutes).padStart(2, "0") + " : ";
  secondesDisplay.textContent = String(seconds).padStart(2, "0") + " : ";
  millisecondsDisplay.textContent = String(milliseconds).padStart(3, "0");
}
