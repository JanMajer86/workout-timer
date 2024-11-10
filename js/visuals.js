const bar = document.getElementById("my-progress");

export const blink = (element, scale) => {
	element.classList.add("blink");
	element.style.transform = `scale(${scale})`;
	setTimeout(() => {
		element.classList.remove("blink");
		element.style.transform = "none";
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
