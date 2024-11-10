import { blink, renderProgressBar } from "./visuals.js";
import { audioElements, playAudio } from "./audio.js";
import { exercices } from "./data.js";
import { bar } from "./visuals.js";

const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");

const prepareTime = 4;
const exerciceTime = 6;
const breakTime = 3;

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
	bar.style.width = "0%";
	bar.style.transition = "width 0s";
};

export function startTimer() {
	if (isRunning) {
		messageEl.innerHTML = exercices[i];
		timerEl.innerHTML = timeLeft;
		bar.style.width = "100%";
		bar.style.transition = `width ${initialTime}s linear`;
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

			i++;

			// nastavení délky dalšího cviku / pauzy
			if (exercices[i] === "break") {
				timeLeft = breakTime;
			} else {
				timeLeft = exerciceTime;
			}
			initialTime = timeLeft;

			setTimeout(() => {
				bar.style.width = "0%";
				bar.style.transition = "width 0s";
			}, 950);

			// ukončení běhu
			if (i > exercices.length - 1) {
				setTimeout(initTimer, 950);
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
