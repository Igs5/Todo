
document.getElementById('addTaskButton').addEventListener('click', function() {
    // Cr a new task item
    const newTaskItem = document.createElement('li');
    newTaskItem.className = 'list-group-item text-dark d-flex justify-content-between align-items-center'; // Add Bootstrap classes
   
    // Cr the task text span
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = 'New Task'; // Set the task content
    newTaskItem.appendChild(taskTextSpan);
   
    // Cr the edit button
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'btn btn-sm btn-outline-secondary edit-btn';
    editButton.textContent = 'Edit';
    newTaskItem.appendChild(editButton);
   
    // Cr the delete button
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-sm btn-outline-danger delete-btn';
    deleteButton.innerHTML = '<i>Delete</i>';
    newTaskItem.appendChild(deleteButton);
   
    // Find the task list container
    const taskList = document.getElementById('taskList');
   
    // Append the new task item to the task list
    taskList.appendChild(newTaskItem);
   
    // Apply event listeners to the newly created edit and delete buttons
    applyEditDeleteListeners(editButton, deleteButton, taskTextSpan);
   });

   




    // Edit
   function applyEditDeleteListeners(editButton, deleteButton, taskTextSpan) {
   
    editButton.addEventListener('click', function() {
       const taskContent = taskTextSpan.textContent; // Get the current task content
   
       // Create an input element to edit the task
       const taskInput = document.createElement('input');
       taskInput.type = 'text';
       taskInput.value = taskContent;
   
       // Replace the task text with the input element
       taskTextSpan.parentNode.replaceChild(taskInput, taskTextSpan);
   
       // Handle saving the edited task
       taskInput.addEventListener('blur', function() {
         const newTaskContent = this.value; // Get the edited content
         taskTextSpan.textContent = newTaskContent; // Update the task text
         this.parentNode.replaceChild(taskTextSpan, this); // Replace the input element back with the task text span
       });
    });
   
    // Delete (first get the parent task item (li) and then delete child)
    deleteButton.addEventListener('click', function() {
       const taskItem = this.parentElement; 
       taskItem.parentNode.removeChild(taskItem);
    });
   }
   


   // Apply event listeners to existing tasks on page load
   document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const taskTextSpans = document.querySelectorAll('#taskText');
   
    editButtons.forEach((button, index) => {
       applyEditDeleteListeners(button, deleteButtons[index], taskTextSpans[index]);
    });
   });
   