const tasksEl = document.getElementById("tasks");
const buttonAddEl = document.getElementById("buttonAdd");
const buttonCleanEl = document.getElementById("buttonClean");
const inputNoteEl = document.getElementById("inputNote");

const tasks = [];
let currentTask = "";
inputNoteEl.addEventListener("change", (event) => {
  currentTask = event.target.value;
});
function addTaskToList() {
  let oShmat = ``;
  tasks.forEach((task) => {
    const taskEl = `<div class="bordered task">
              <div class="task-content">
                <div class="bordered task-check"></div>
                <span class="task-title">${task.text}</span>
              </div>
              <div class="bordered task-del">
                <span>-</span>
              </div>
            </div>`;
    oShmat = oShmat + taskEl;
  });
  tasksEl.innerHTML = oShmat;
}
buttonAddEl.addEventListener("click", () => {
  const note = { text: currentTask, id: tasks.length + 1 };
  tasks.push(note);
  inputNoteEl.value = "";
  currentTask = "";
  addTaskToList();
});
