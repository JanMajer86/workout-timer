import { blink, restartProgressBar, updateProgressBar } from "./visuals.js";
import { audioElements, playAudio } from "./audio.js";
import { exercices } from "./data.js";

const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");

const prepareTime = 4;
const exerciceTime = 6;
const breakTime = 3;

let i;
let initialTime;
let timeLeft;
let isRunning;

export const initTimer = () => {
	i = 0;
	initialTime = prepareTime;
	timeLeft = initialTime;
	messageEl.innerHTML = "";
	timerEl.innerHTML = "";
	isRunning = false;
	restartProgressBar();
};

export function timer() {
	if (isRunning) {
		messageEl.innerHTML = exercices[i];
		timerEl.innerHTML = timeLeft;
		updateProgressBar(initialTime);
		timeLeft--;

		if (timeLeft === 0) {
			// playAudio(audioElements[1]);
			blink(timerEl);
		} else if (timeLeft < 3) {
			// playAudio(audioElements[0]);
			blink(timerEl);
		}

		if (timeLeft <= 0) {
			// přejde na další cvik / pauzu
			i++;
			// nastavení délky dalšího cviku / pauzy
			if (exercices[i] === "break") {
				timeLeft = breakTime;
			} else {
				timeLeft = exerciceTime;
			}
			initialTime = timeLeft;
			setTimeout(restartProgressBar, 950);
			// ukončení běhu
			if (i > exercices.length - 1) {
				setTimeout(initTimer, 950);
			}
		}

		setTimeout(timer, 1000);
	}
}

export function startTimer() {
	isRunning = true;
	timer();
}

export function stopTimer() {
	initTimer();
}
