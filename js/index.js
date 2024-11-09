import { initTimer, startTimer, setIsRunning, stopTimer } from "./timer.js";

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

initTimer();

startButton.addEventListener("click", () => {
	setIsRunning();
	startTimer();
});

// startButton.addEventListener("click", () => {
// 	intervalId = setInterval(() => {
// 		stopWatch(exercices);
// 	}, 1000);
// });

stopButton.addEventListener("click", () => {
	// stopTimer();
	initTimer();
});
