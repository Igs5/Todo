const todoList= JSON.parse(localStorage.getItem("todoListSaved")) || [];


//trial cancel from storage
// const newTodo={
//     innerText:inputValue,
//     isDone:false, //by default
// };

console.log(todoList);

todoList.forEach(toDoArgumento => {
    console.log(toDoArgumento);
    renderToDo(toDoArgumento)
});

//To make list elements turn green, show a click and cross the text.
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    
  }
}, false);

const buttons = document.querySelectorAll('.buttonsRight button');

//creamos funcion para

function renderToDo(toDoParametro){
    console.log(toDoParametro);
   // Create a new <li> element
   let li = document.createElement("li");
   // Add the text input value to the new <li> element
   li.innerHTML = '<div class="listText">' + toDoParametro.innerText + '</div>' +
                  '<div class="buttonsRight">' +
                  '<button class="icons editBtn"><img src="./Assets/Icon_editBtn.png" width="40px"></button>' +
                  '<button class="icons closeBtn"><img src="./Assets/Icon_deleteBtn.png" width="40px"></button>' +
                  '</div>';
   // Append the new <li> element to the <ul>
   document.getElementById("myUL").appendChild(li);
   
   // Add event listeners to the buttons in the newly created <li> element
   li.querySelector('.editBtn').addEventListener('click', function(event) {
       event.preventDefault();
       const listItem = this.closest('li');
       const listTextElement = listItem.querySelector('.listText');
       if (listTextElement) {
           listTextElement.contentEditable = !listTextElement.isContentEditable;
           if (listTextElement.contentEditable) {
               listTextElement.focus();
           }
       } else {
           console.error('.listText element not found.');
       }
   });

   li.querySelector('.closeBtn').addEventListener('click', function(event) {
       const grandparent = this.closest('li');
       grandparent.remove();

       console.log(event.target.parentElement.previousSibling.previousSibling);
       console.log(grandparent.firstElementChild); //getting the child that has the text


       
   });
};




//ADD BUTTON

function newElement() {
    let inputValue = document.getElementById("userInput").value;

    // Check if input value is empty
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const newTodo={
            innerText:inputValue,
            isDone:false, //by default
        };
        todoList.push(newTodo);

        // console.log(newTodo);
        // console.log(todoList);
        
        localStorage.setItem("todoListSaved",JSON.stringify(todoList)); //esta guardado en local storage

        renderToDo(newTodo);

     }

    // Clear the input field
    document.getElementById("userInput").value = "";
}

//END OF ADD BUTTON



// EDIT BUTTON
//remember that const buttons is already declared
const listText=document.querySelectorAll(".listText");

buttons.forEach(button => {
  // Check if the button is the edit button (the first button)
  if (button.parentElement.classList.contains('buttonsRight') && button === button.parentElement.children[0]){
    button.addEventListener("click", function(event){
      event.preventDefault();
      // Find the closest list item (<li>)
      
      const listItem = this.closest('li');
      // Find the child element with the class .listText
      const listTextElement = listItem.querySelector('.listText');
      // Make the found element content editable
      // Toggle contentEditable property
      if (listTextElement) {
        listTextElement.contentEditable = !listTextElement.isContentEditable;
        if (listTextElement.contentEditable) {
            listTextElement.focus(); // Set focus when content becomes editable
        }
    } else {
        console.error('.listText element not found.');
    }
});
}
});
      
      
// END OF EDIT BUTTON



//CANCEL BUTTON
// Select all buttons within the .buttonsRight containers
//you have already declared const buttons variable

// Loop through each button
buttons.forEach(button => {
    // Check if the button is the delete button (the second button)
    if (button.parentElement.classList.contains('buttonsRight') && button === button.parentElement.children[1]) {
        // Add click event listener to the delete button
        button.addEventListener('click', function(event) {
            // Get the grandparent element (the <li> element)
            const grandparent = this.closest('li');
            // Hide the grandparent element
            grandparent.style.display = "none";

            
            
        });
    }
});
//END of CANCEL BUTTON