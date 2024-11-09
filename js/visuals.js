const bar1 = document.getElementById("progress--1");
const bar2 = document.getElementById("progress--2");

export const blink = (element) => {
	element.classList.add("blink");
	setTimeout(() => {
		element.classList.remove("blink");
	}, 500);
};

let activeBar = bar1;
let passiveBar = bar2;

export const switchBars = () => {
	activeBar = activeBar === bar1 ? bar2 : bar1;
	passiveBar = passiveBar === bar2 ? bar1 : bar2;
	console.log(activeBar);
	console.log(passiveBar);
};

export const renderProgressBar = (timeLeft, initialTime) => {
	activeBar.classList.remove("notransition");
	passiveBar.classList.remove("notransition");

	const progress = (1 - timeLeft / initialTime) * 100;
	activeBar.style.width = progress + "%";
	passiveBar.style.width = "0%";
};

export const resetProgressBar = () => {
	activeBar.style.width = "0%";
	activeBar.classList.add("notransition");
	passiveBar.style.width = "0%";
	passiveBar.classList.add("notransition");
};
