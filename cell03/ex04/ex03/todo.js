document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('ft_list');
    const addTaskButton = document.getElementById('addTaskButton');

    // Load tasks from cookies
    loadTasks();

    // Add task button event listener
    addTaskButton.addEventListener('click', () => {
        const taskText = prompt('Digite a nova tarefa:');
        if (taskText) {
            addTask(taskText);
            saveTasks();
        }
    });

    // Function to create a task element and add to the list
    function addTask(text) {
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = text;
        task.addEventListener('click', () => {
            const confirmed = confirm('Deseja remover esta tarefa?');
            if (confirmed) {
                task.remove();
                saveTasks();
            }
        });
        taskList.appendChild(task);
    }

    // Save tasks to cookies
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#ft_list .task').forEach(task => {
            tasks.push(task.textContent);
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; max-age=31536000`;
    }

    // Load tasks from cookies
    function loadTasks() {
        const cookies = document.cookie.split('; ');
        const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));
        if (taskCookie) {
            const tasks = JSON.parse(taskCookie.split('=')[1]);
            tasks.forEach(taskText => {
                addTask(taskText);
            });
        }
    }
});
