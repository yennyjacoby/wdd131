const input = document.querySelector('#favchap');
const button= document.querySelector('button')
const list = document.querySelector('#list'); //fill in the blank to reference the unordered list element. 




li.textContent = input.value;
deleteButton.textContent= '❌';
li.append(deleteButton);
list.append(li);



//click event listener for the Add Chapter button with addEventListener.
button.addEventListener('click', function(){


    if (input.value.trim() !== '') { 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent= '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        });

        input.value='';
        input.focus();
    }    
});
