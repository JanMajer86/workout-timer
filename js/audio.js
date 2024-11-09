const soundClips = ["./../sounds/bleep2.mp3", "./../sounds/alert.mp3"];

(function createAudioMarkup() {
	let audioMarkUp = "";
	soundClips.forEach(
		(sound) => (audioMarkUp += `<audio preload="auto" src="${sound}"></audio>`)
	);
	document.body.insertAdjacentHTML("afterbegin", audioMarkUp);
})();

export const audioElements = document.querySelectorAll("audio");

export const playAudio = (audioClip) => {
	audioClip.currentTime = 0;
	audioClip.play();
};
