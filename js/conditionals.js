const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1a: A simple if/else statement */
// let homeWorkDone = false;
// if(homeWorkDone){
// console.log("my homework is done!");
// }else{
// console.log("my homework is not done!");
// }
// STEP 1b: Any value that is not false, undefined, null, 0, NaN, or an empty string will evaluate to TRUE when tested using a conditional statement - try a few other values for var homeWorkDone and test

/* STEP 2: The more complex if|elseif|else */
const page = document.querySelector('html');
const select = document.querySelector('select');
const icon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const weatherButton = document.querySelector('#weatherButton');
const comments = document.querySelector('#commentary');

/* STEP 2a: Add an event listener for the 'click' event on the 'Set Weather' button that invokes the setWeather() function below */
weatherButton.addEventListener("click", setWeather);

function setWeather() {
	console.log("set weather called!!");
	let choice = select.value;
	let temperature = temp.value;
	//console.log(`weather is ${choice} and temperature is ${temperature}.`);
	/* STEP 2b: Craft an IF/ELSEIF/ELSE that changes the src attribute of the icon element to the appropriate .svg file in the images folder */
	if (choice === "sunny") {
		// change weather icon
		icon.setAttribute("src", "images/sunny.svg");
		// change color of screen based on temperature
		if (temperature >= 15) {
			page.style.backgroundColor = "orange";
		} else {
			page.style.backgroundColor = "lightblue";
		}
	} else if (choice === "rainy") {
		// change weather icon
		icon.setAttribute("src", "images/rainy.svg");
	} else if (choice == "windy") {
		// change weather icon
		icon.setAttribute("src", "images/windy.svg");
	} else {
		// No weather icon
		icon.setAttribute("src", "images/cloud-off.svg");
	}
	/* STEP 3: Add a nested IF/ELSE statement inside the 'sunny' condition above that tests for temperature, and if it is equal to or greater than 15, turn the page background orange, otherwise turn it lightblue */

	/* STEP 4: Logical operators - and, or, not (delete multi-line comment delimiters below) */
	// STEP 4a: AND - && (It's sunny AND it's at least 15deg)

	if (choice === "sunny" && temperature >= 15) {
		comments.textContent = 'It is sunny and warm — time to find your sunglasses!';
		// STEP 4b: AND, once again - && (It's sunny AND it's less than 15deg)
	} else if (choice === "sunny" && temperature < 15) {
		comments.textContent = 'It is sunny out there, but it is a bit cool.';
		// STEP 4c: OR - || (It's windy OR rainy)
	} else if (choice === "windy" || choice == "rainy") {
		comments.textContent = 'The weather today is a bit unsettled.';
	} else {
		comments.textContent = 'You did not specify the type of weather, today.';
	}
	// STEP 4d: NOT - ! (It's NOT rainy)
	if (choice !== "rainy" && choice !== "windy") {
		comments.textContent += ' No sign of rain or wind';
	}

	// Weather icons by Cole Bemis - https://feathericons.com/, MIT, https://commons.wikimedia.org/w/index.php?curid=60153354

} // End of setWeather() function

/* STEP 5: Switch statements
Sometimes listing a series of conditions and the code that might be executed in each case is the friendliest way to structure your conditional */

const windSpeed = document.querySelector('#windSpeed');
const windComment = document.querySelector('#windComment');

windSpeed.addEventListener('change', getWindSpeed);

function getWindSpeed() {
	let speed = Number(windSpeed.value);
	// STEP 5a: Build the SWITCH code block
	switch (speed) {
		// STEP 5b: Build out four cases, followed by a default
		case 100:
			// 100 km/h
			break;
			windComment.textContent = speed + 'km/h - Holy schmoly! Hold on to your hat!';
		case 75:
			// 75 km/h
			windComment.textContent = speed + 'km/h - It\'s a-howling out there!';
			break;
		case 50:
			// 50 km/h
			windComment.textContent = speed + 'km/h - Quite gusty out there, today.';
			break;
		case 25:
			// 25 km/h
			windComment.textContent = speed + 'km/h - A wee bit breezy.';
			break;
		default:
			windComment.textContent = "very calm today"
	}

} // End of getWindSpeed() function


/* STEP 6: Ternary operator
This piece of syntax is a bit less typing, but it is harder to read */
let breakMessage = document.querySelector('#breakTime');
let lunchBreak = true;
lunchBreak ? breakMessage.textContent = "lunch time!" : breakMessage.textContent = "keep working.";


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
