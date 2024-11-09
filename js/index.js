const exercices = [
	"high knee taps",
	"leg raises",
	"hip raises",
	"flutter kicks",
	"plank knees to elbow",
	"chair sit ups",
	"seated in and outs",
	"jumping jacks",
];

const soundClips = ["./sounds/bleep2.mp3", "./sounds/alert.mp3"];

const prepareTime = 3;
const exerciceTime = 3;
const breakTime = 4;
const pause = "break";

const messageEl = document.getElementById("message");
const bar = document.getElementById("my-progress");

const timerEl = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
(function createAudioMarkup() {
	let audioMarkUp = "";
	soundClips.forEach(
		(sound) => (audioMarkUp += `<audio preload="auto" src="${sound}"></audio>`)
	);
	document.body.insertAdjacentHTML("afterbegin", audioMarkUp);
})();
const audioElements = document.querySelectorAll("audio");

const interleave = (arr, thing) =>
	[]
		.concat(...arr.map((n) => [n, thing]))
		.slice(0, -1)
		.toSpliced(0, 0, "get ready");

const exercicesEdited = interleave(exercices, pause);

let i;
let initialTime;
let timeLeft;
let intervalId;

const init = () => {
	i = 0;
	initialTime = prepareTime;
	timeLeft = initialTime;
	messageEl.innerHTML = "";
	timerEl.innerHTML = "";
};

const playAudio = (audioClip) => {
	audioClip.currentTime = 0;
	audioClip.play();
};

const visualBlinkPrepare = (element) => {
	element.classList.add("blink");
	setTimeout(() => {
		element.classList.remove("blink");
	}, 500);
};

const visualBlinkEnd = (element) => {
	element.classList.add("blink-last");
	setTimeout(() => {
		element.classList.remove("blink-last");
	}, 500);
};

function renderProgressBar(timeLeft, initialTime) {
	const progress = (1 - timeLeft / initialTime) * 100;
	bar.style.width = progress + "%";
	console.log(progress);
	// setTimeout(() => {
	// 	if (progress === 100) {
	// 		bar.classList.add("notransition");
	// 	} else {
	// 		bar.classList.remove("notransition");
	// 	}
	// }, 100);
}

function stopWatch(arr) {
	messageEl.innerHTML = arr[i];
	timerEl.innerHTML = timeLeft;
	timeLeft--;
	renderProgressBar(timeLeft, initialTime);

	if (timeLeft === 0) {
		playAudio(audioElements[1]);
		visualBlinkEnd(timerEl);
	} else if (timeLeft < 3) {
		playAudio(audioElements[0]);
		visualBlinkPrepare(timerEl);
	}

	if (timeLeft <= 0) {
		// setTimeout(() => {
		// 	bar.classList.add("notransition");
		// }, 1000);
		i++;
		if (arr[i] === "break") {
			timeLeft = breakTime;
		} else {
			timeLeft = exerciceTime;
		}
		initialTime = timeLeft;

		if (i > arr.length - 1) {
			init();
			clearInterval(intervalId);
		}
	}
}

init();

startButton.addEventListener("click", () => {
	intervalId = setInterval(() => {
		stopWatch(exercicesEdited);
	}, 1000);
	console.log(intervalId);
});

stopButton.addEventListener("click", () => {
	clearInterval(intervalId);
	init();
	// intervalId = null;
});
