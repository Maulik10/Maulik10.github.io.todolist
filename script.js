let tasks = [];

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const remaining = total - completed;

  document.getElementById('total').innerText = total;
  document.getElementById('completed').innerText = completed;
  document.getElementById('remaining').innerText = remaining;
}

function addTask() {
  const input = document.getElementById('taskInput');
  const priority = document.getElementById('priority').value;
  const text = input.value.trim();

  if (text === "") return;

  const task = {
    id: Date.now(),
    text,
    completed: false,
    priority
  };

  tasks.push(task);
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task ${task.completed ? "completed" : ""} priority-${task.priority}`;

    const span = document.createElement('span');
    span.textContent = task.text;

    const actions = document.createElement('div');
    actions.classList.add("actions");

    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => toggleComplete(task.id);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => removeTask(task.id);

    actions.appendChild(completeBtn);
    actions.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

  updateStats();
}

function toggleComplete(id) {
  tasks = tasks.map(task => 
    task.id === id ? {...task, completed: !task.completed} : task
  );
  renderTasks();
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Initial render
renderTasks();
