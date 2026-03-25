document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamButton= document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1853, February, 14",
    area: 382207,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" 
  },

  {
    templeName: "Provo Utah Rock canyon",
    location: "Provo, Utah, United States",
    dedicated: "1969, September, 15",
    area: 163000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-45659-main.jpg" 
  },

   {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25-30",    
    area: 72000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg" 
   },

    {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 17",    
    area: 74792,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg" 
   }

];

createTempleCard(temples);
//  .filter(), map(), slice()  always return an array.

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";

    filteredTemples.forEach(element => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = element.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${element.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${element.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${element.area} sq ft`;

        img.src = element.imageUrl;
        img.alt = `${element.templeName} temple`;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

createTempleCard(temples);


document.querySelector("#old").addEventListener("click", ()=> {
    const oldTemples= temples.filter(temple => {
        let year= parseInt(temple.dedicated.substring(0,4));
        return year< 1900;
    });
    createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", ()=>{
    const newTemples= temples.filter(temple => {
        let year = parseInt(temple.dedicated.substring(0,4));
        return year >2000
    });
    createTempleCard(newTemples);
});

document.querySelector("#home").addEventListener("click", ()=>{
    createTempleCard(temples);
})

document.querySelector("#large").addEventListener("click", ()=>{
    const largeTemples= temples.filter(temple => {
        let area = (temple.area);
        return area>90000
    });
    createTempleCard(largeTemples);
})

document.querySelector("#small").addEventListener("click", () =>{
    const smallTemples= temples.filter(temple =>{
        let area = (temple.area);
        return area <10000
    });
    createTempleCard(smallTemples);
})