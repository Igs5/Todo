const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('listItem');




const addTodo = () =>{
    const inputText = input.value.trim(); 
    if(inputText.length === 0){
        alert("Add a Task!");
        return false;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = inputText;
    li.appendChild(p);
    
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<img class="edit-btn" src="Assets/Icon_editBtn.png" alt="">';
    editBtn.addEventListener('click', editButton); 
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<img class="delete-btn" src="Assets/Icon_deleteBtn.png" alt="">';
    deleteBtn.addEventListener('click', deleteButton); 
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
    input.value = "";
};

const editButton = (event) => {
    const listItem = event.target.closest('li');
    const p = listItem.querySelector('p');
    
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = p.innerText;
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            p.innerText = inputField.value;
            inputField.remove();
            p.style.display = 'flex';
        }
    });
    inputField.addEventListener('blur', function() {
        p.innerText = inputField.value;
        inputField.remove();
    });
    listItem.insertBefore(inputField, p);
    p.style.display = 'none';
    inputField.focus();
};


const deleteButton = (event) => {
    const listItem = event.target.closest('li');
    listItem.remove();
};



addBtn.addEventListener('click', addTodo);
