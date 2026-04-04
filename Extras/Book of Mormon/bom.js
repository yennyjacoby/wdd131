// 1. Select elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// . Define the function that GETS the chapters- THIS IS HOW you retrieve data from localStorage
// 
function getChapterList() {
  return JSON.parse(localStorage.getItem('chapters'));
}

// . Create the array using the function + fallback
let chaptersArray = getChapterList() || [];

// . Display each chapter already saved
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//  Define displayList() below (you will write this next)
function displayList(item){
    const li=document.createElement('li');
    const deleteButton= document.createElement('button');

    li.textContent =item;
    deleteButton.textContent= '❌';

    deleteButton.addEventListener('click', () =>{
        deleteChapter(deleteButton.parentElement.textContent);
        list.removeChild(li);
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
}

// 
button.addEventListener('click', () => {
    if (input.value !=''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value= '';
        input.focus();
    }
})


// 
function deleteChapter(chapter){
    chapter=chapter.slice(0, chapter.length -1);
    chaptersArray= chaptersArray.filter(item => item !== chapter); 
    setChapterList();
}

// 
function setChapterList(){
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}


