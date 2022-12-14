import * as TaskUI from '/src/taskUI.js'

const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");
const todayHeader = document.getElementById("header-text"); //style
const headerOptionContainer = document.getElementById("header-option-container");
const options = headerOptionContainer.children;

for (let i = 0; i < options.length; i++) {
  options[i].setAttribute("id", `option-${i}`);
  options[i].classList.add("option-icons");
}

const tdMainContainer = document.createElement("div");
const addTaskbutton = document.createElement("button");
const addTaskContainer = document.createElement("div");

/// creates the body of Today task
export function createTdTaskUI(display) {
  tdMainContainer.setAttribute("id", "td-up-main-task-container");
  todayHeader.textContent = "TODAY";
  addTaskbutton.setAttribute("id", "add-task-button");
  tdMainContainer.appendChild(addTaskContainer);
  addTaskContainer.setAttribute("id", "add-task-container");
  addTaskContainer.appendChild(addTaskbutton);
  addTaskbutton.textContent = "Add Task";
  tdMainContainer.setAttribute('style', `${display}`)
}
mainContentContainer.appendChild(tdMainContainer);
createTdTaskUI('display:flex;')

const formAddTaskButton = document.getElementById('form-add-button');
const tdUpMainContainer = document.getElementById("td-up-main-task-container");

addTaskbutton.addEventListener("click", () => {
  TaskUI.createFormUI(sbMainContainer);
});

formAddTaskButton.addEventListener('click', () => {
  TaskUI.removeForm(sbMainContainer)
});

PubSub.subscribe('getTaskData', (msg, usertask) => {
  TaskUI.createTaskUI(tdUpMainContainer, usertask)
})

tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  TaskUI.removeTask(target)
  TaskUI.EditTask(target)
})
