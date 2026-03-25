const courses = [
  { subject: "CSE", number: 110 },
  { subject: "CSE", number: 111 },
  { subject: "WDD", number: 130 },
  { subject: "WDD", number: 131 },
  { subject: "CSE", number: 210 }
    
];
const subjectList = document.querySelector("#subjects")
// 1️⃣ map() courses to subject list

// *************************************************************************************

const subjects = courses.map(course => course.subject);

subjects.forEach(sub => {
  const li = document.createElement("li");
  li.textContent = sub;
  subjectsList.appendChild(li);
});


const countries = [
  "Uganda",
  "United States",
  "Uruguay",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "Mexico",
  "Spain",
  "Turkey"
];

// 2️⃣ filter() countries to those starting with "U"
const uList = document.querySelector("#u");

const uCountries = countries.filter(country => country.startsWith("U"));

uCountries.forEach(country => {
  const li = document.createElement("li");
  li.textContent = country;
  uList.appendChild(li);
});

const fruits = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 1.2 },
  { name: "grape", price: 0.1 }
];

// 3️⃣ reduce() array of objects to total cost.
const totalDiv = document.querySelector("#total");
const totalCost = fruits.reduce((sum, fruits) => sum + fruit.price, 0);

totalDiv.textContent = `Total: $${totalCost.toFixed(2)}`;




const students = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const studentList = document.querySelector("#studentList")
students.forEach(student => {
  const li = document.createElement("li");
  li.textContent = student;
  studentList.appendChild(li);
});


const products = [
  {
    name: "Widget A",
    partNumber: "WA-123",
    quantity: 50,
    price: 12.5
  },
  {
    name: "Gear B",
    partNumber: "GB-456",
    quantity: 100,
    price: 3.75
  },
  {
    name: "Lever C",
    partNumber: "LC-789",
    quantity: 25,
    price: 25.0
  },
  {
    name: "Bolt D",
    partNumber: "BD-012",
    quantity: 200,
    price: 0.5
  },
  {
    name: "Panel E",
    partNumber: "PE-345",
    quantity: 10,
    price: 50.0
  },
  {
    name: "Wire F",
    partNumber: "WF-678",
    quantity: 150,
    price: 1.25
  },
  {
    name: "Tube G",
    partNumber: "TG-901",
    quantity: 30,
    price: 18.0
  }
];

const productOutput= document.querySelector("#product");
const firstExpensive = products.find(product => product.price > 20);

productOutput.textContent = firstExpensive
  ? firstExpensive.name
  : "No product found";


const moreCountries = ["USA", "Brazil", "Canada", "Japan"];

const output = document.querySelector("#output");

const index = moreCountries.indexOf("Canada");

output.textContent =
  index !== -1
    ? `Canada found at index ${index}`
    : "Canada not found";

