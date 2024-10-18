
// Array de tarefas
let tasks = ['Comprar leite', 'Ler um livro', 'Estudar JavaScript'];
// Função para atualizar a lista de tarefas na página 
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    if (newTask) {
        tasks.push(newTask); // Adiciona a nova tarefa ao array
        taskInput.value = ''; // Limpa o campo de entrada
        updateTaskList();
    }
}