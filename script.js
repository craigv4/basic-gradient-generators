// const body = document.querySelector("body");
// const color1 = document.getElementById("color1");
// const color2 = document.getElementById("color2");
// const button = document.getElementById("button");
// const p = document.getElementById("gradientList");

// randomNumber = 100;

// colorChange = () => {
// 	newColor_1 = color1.value;
// 	newColor_2 = color2.value;
// 	body.style.background = "linear-gradient(" + randomNumber + "deg, " + newColor_1 + ", " + newColor_2 + ")";
// 	p.textContent = "background: " + body.style.background;
// };

// randomize = () => {
// 	newColor_1 = color1.value;
// 	newColor_2 = color2.value;
// 	let randomNumber = Math.random() * 360;
// 	randomNumber = Math.round(randomNumber);
// 	body.style.background = "linear-gradient(" + randomNumber + "deg, " + newColor_1 + ", " + newColor_2 + ")";
// 	p.textContent = "background: " + body.style.background;
// };

// color1.addEventListener("input", colorChange);
// color2.addEventListener("input", colorChange);
// button.addEventListener("click", randomize);

const body = document.querySelector("body");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const angle = document.getElementById("degree");
const button = document.getElementById("button");
const p = document.getElementById("gradientList");

let newAngle = 100;

const colorChange = () => {
	const newColor1 = color1.value;
	const newColor2 = color2.value;
	body.style.background = `linear-gradient(${newAngle}deg, ${newColor1}, ${newColor2})`;
	p.textContent = `background: ${body.style.background}`;
	console.log(p.textContent);
};

const randomize = () => {
	newAngle = Math.floor(Math.random() * 360);
	colorChange();
};

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
// angle.addEventListener("input", colorChange);
button.addEventListener("click", randomize);
