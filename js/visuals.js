export const bar = document.getElementById("my-progress");

export const blink = (element) => {
	element.classList.add("blink");
	setTimeout(() => {
		element.classList.remove("blink");
	}, 500);
};

export const renderProgressBar = (timeLeft, initialTime) => {
	const progress = (1 - timeLeft / initialTime) * 100;
	activeBar.style.width = progress + "%";
};

// export const resetProgressBar = () => {
// 	activeBar.style.width = "0%";
// 	activeBar.classList.add("notransition");
// 	passiveBar.style.width = "0%";
// 	passiveBar.classList.add("notransition");
// };
