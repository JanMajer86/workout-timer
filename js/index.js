import { initTimer, startTimer, setIsRunning, stopTimer } from "./timer.js";

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

initTimer();

startButton.addEventListener("click", () => {
	setIsRunning();
	startTimer();
});

stopButton.addEventListener("click", () => {
	stopTimer();
	initTimer();
});
