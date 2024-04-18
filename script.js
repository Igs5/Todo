
{/* document.getElementById('addTaskButton').addEventListener('click', function() {
 // Create a new task bar
 var newTaskBar = document.createElement('div');
 newTaskBar.className = 'col-12';
 newTaskBar.innerHTML = '<div class="m-2 p-2 bg-light text-center text-dark">New Task</div>';

 // Find the parent container of the tasks
 var tasksContainer = document.querySelector('.container');

 // Find the last row of tasks
 var lastTaskRow = tasksContainer.querySelector('.row:last-child');

 // Append the new task bar to the last row of tasks
 lastTaskRow.appendChild(newTaskBar);
}); */}


document.getElementById('addTaskButton').addEventListener('click', function() {
  // Create a new task item
  const newTaskItem = document.createElement('li');
  newTaskItem.className = 'list-group-item text-dark'; // Add Bootstrap classes
  newTaskItem.innerHTML = 'New Task'; // Set the task content

  // Find the task list container
  const taskList = document.getElementById('taskList');

  // Append the new task item to the task list
  taskList.appendChild(newTaskItem);
  console.log(taskList);
  console.log(newTaskItem);
});
