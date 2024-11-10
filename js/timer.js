import { blink, renderProgressBar } from "./visuals.js";
import { audioElements, playAudio } from "./audio.js";
import { exercices } from "./data.js";
import { bar } from "./visuals.js";

const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");

const prepareTime = 10;
const exerciceTime = 45;
const breakTime = 15;

let i;
let initialTime;
let timeLeft;
let isRunning;

// bar.classList.add("notransition");

export const initTimer = () => {
	i = 0;
	initialTime = prepareTime;
	timeLeft = initialTime;
	messageEl.innerHTML = "";
	timerEl.innerHTML = "";
	isRunning = false;
	// renderProgressBar(timeLeft, initialTime);
};

export function startTimer() {
	if (isRunning) {
		messageEl.innerHTML = exercices[i];
		timerEl.innerHTML = timeLeft;

		timeLeft--;
		// renderProgressBar(timeLeft, initialTime);

		if (timeLeft === 0) {
			// playAudio(audioElements[1]);
			blink(timerEl);
		} else if (timeLeft < 3) {
			// playAudio(audioElements[0]);
			blink(timerEl);
		}

		if (timeLeft <= 0) {
			// přejde na další cvik / pauzu
			bar.style.width = "0%";
			bar.style.transition = "width 0s";

			i++;

			// nastavení délky dalšího cviku / pauzy
			if (exercices[i] === "break") {
				timeLeft = breakTime;
			} else {
				timeLeft = exerciceTime;
			}

			initialTime = timeLeft;
			setTimeout(() => {
				bar.style.width = "100%";
				bar.style.transition = `width ${initialTime}s linear`;
			}, 100);
			// ukončení běhu
			if (i > exercices.length - 1) {
				initTimer();
			}
		}
		console.log(isRunning);

		setTimeout(startTimer, 1000);
	}
}

export function setIsRunning() {
	isRunning = true;
	bar.style.width = "100%";
	bar.style.transition = `width ${initialTime}s linear`;
}

export function stopTimer() {
	isRunning = false;
	bar.style.width = "0%";
	bar.style.transition = "width 0s";
	// resetProgressBar();
}
