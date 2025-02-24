const taskInput = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task-button');
const resetButton = document.querySelector('#reset-button');
const taskList = document.querySelector('#task-list');

let tasks = [];

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    tasks.push(task);
    renderTaskList();
    taskInput.value = '';
});

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    tasks = [];
    renderTaskList();
    taskInput.value = '';
});

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-task-button" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
    const deleteTaskButtons = document.querySelectorAll('.delete-task-button');
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            tasks.splice(index, 1);
            renderTaskList();
        });
    });
}
