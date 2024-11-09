const bar = document.getElementById("my-progress");

export const blink = (element) => {
	element.classList.add("blink");
	setTimeout(() => {
		element.classList.remove("blink");
	}, 500);
};

export const renderProgressBar = (timeLeft, initialTime) => {
	const progress = (1 - timeLeft / initialTime) * 100;
	bar.style.width = progress + "%";
};
