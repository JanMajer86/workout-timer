import { initTimer, startTimer, timer, stopTimer } from "./timer.js";

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

initTimer();

startButton.addEventListener("click", () => {
	startTimer();
});

stopButton.addEventListener("click", () => {
	stopTimer();
});
