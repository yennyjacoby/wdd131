document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const products = [
  {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
  {id: "fc-2050", name: "power laces", averagerating: 4.7},
  {id: "fs-1987", name: "time circuits", averagerating: 3.5},
  {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
  {id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
];

// Grab rhe Select element
const productSelect = document.getElementById("product-name");

// Loop through the array and create an option for each product
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; //set the value to the product name
    option.textContent= product.name; //set the text the user will see because it is textContent
    productSelect.appendChild(option); //add it to the Select
})

//Here is going to begin to count  with the current number or begin in 0
let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
//Increment because this page was loaded 
reviewCount++;

//Save the updated count
localStorage.setItem('reviewCount', reviewCount);

//Display it in the page
const counterDisplay = document.querySelector('#reviewCounter');
if (counterDisplay){
  counterDisplay.textContent = reviewCount;
}