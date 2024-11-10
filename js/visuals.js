export const bar = document.getElementById("my-progress");

export const blink = (element) => {
	element.classList.add("blink");
	setTimeout(() => {
		element.classList.remove("blink");
	}, 500);
};

export const restartProgressBar = () => {
	bar.style.width = "0%";
	bar.style.transition = "width 0s";
};

export const updateProgressBar = (time) => {
	bar.style.width = "100%";
	bar.style.transition = `width ${time}s linear`;
};
