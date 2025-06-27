function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="buttons">
      <button class="complete" onclick="markComplete(this)">✅</button>
      <button class="delete" onclick="removeTask(this)">❌</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function markComplete(button) {
  button.closest("li").classList.toggle("completed");
}

function removeTask(btn) {
  btn.closest("li").remove();
}
