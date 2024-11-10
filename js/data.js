// const exercicesInput = [
// 	"high knee taps",
// 	"leg raises",
// 	"hip raises",
// 	"flutter kicks",
// 	"plank knees to elbow",
// 	"chair sit ups",
// 	"seated in and outs",
// 	"jumping jacks",
// ];

const exercicesInput = ["A"];

const pause = "break";

const interleave = (arr, thing) =>
	[]
		.concat(...arr.map((n) => [n, thing]))
		.slice(0, -1)
		.toSpliced(0, 0, "get ready");

export const exercices = interleave(exercicesInput, pause);
