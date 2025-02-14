// Get the necessary elements
const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    
    // Create the text element
    const todoTextElement = document.createElement('span');
    todoTextElement.textContent = todoText;
    todoItem.appendChild(todoTextElement);
    
    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => todoItem.remove();
    todoItem.appendChild(deleteButton);
    
    // Add the todo item to the list
    todoList.appendChild(todoItem);
}

// Event listener for the "Add" button
addButton.addEventListener('click', () => {
    const todoText = inputField.value.trim();
    
    if (todoText) {
        createTodoItem(todoText);
        inputField.value = '';  // Clear the input field after adding
    } else {
        alert('Please enter a task!');
    }
});

// Allow pressing Enter to add a todo item
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});