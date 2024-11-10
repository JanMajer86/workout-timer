const soundClips = ["./../sounds/bleep2.mp3", "./../sounds/alert.mp3"];

(function createAudioMarkup() {
	let audioMarkUp = "";
	soundClips.forEach(
		(sound) => (audioMarkUp += `<audio preload="auto" src="${sound}"></audio>`)
	);
	document.body.insertAdjacentHTML("afterbegin", audioMarkUp);
})();

const audioElements = document.querySelectorAll("audio");

export const playAudio = (clipNumber) => {
	audioElements[clipNumber].currentTime = 0;
	audioElements[clipNumber].play();
};
