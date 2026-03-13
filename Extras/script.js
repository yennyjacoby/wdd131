const numberOfDays = 6;
const options= { weekday: "long"};

const today = new Date();
let todaystring = new Intl.DateTimeFormat("en-US", options). format(today);
document.getElementById("today"). innerHTML = `Today is <strong>${todaystring}</strong>`;

for (let i =1; i <=numberOfDays; i++) {
	const nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
	const item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	document.querySelector("ul").appendChild(item);
}