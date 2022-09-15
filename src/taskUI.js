const body = document.querySelector("body");
const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");

const headerContainer = document.getElementById("header-container");
const todayHeader = document.getElementById("header-text"); //style
const headerOptionContainer = document.getElementById(
  "header-option-container"
);
const options = headerOptionContainer.children;

for (let i = 0; i < options.length; i++) {
  options[i].setAttribute("id", `option-${i}`);
  options[i].classList.add("option-icons");
}

const tdMainContainer = document.createElement("div");
const tdTasksContainer = document.createElement("div");
const addTaskbutton = document.createElement("button");
const addTaskContainer = document.createElement("div");

function createTdTaskUI() {
  mainContentContainer.appendChild(tdMainContainer);
  tdMainContainer.setAttribute("id", "td-up-main-task-container");
  todayHeader.textContent = "TODAY";
  addTaskbutton.setAttribute("id", "add-task-button");
  tdMainContainer.appendChild(addTaskContainer);
  addTaskContainer.setAttribute("id", "add-task-container");
  addTaskContainer.appendChild(addTaskbutton);
  addTaskbutton.textContent = "Add Task";
}
createTdTaskUI();

class Task {
  constructor(title, description, isDone, color) {
    this.title = title;
    this.description = description;
    this.isDone = false;
    this.color = color;
  }
  priorityChange(task) {
    task.setAttribute("style", `background-color:${this.color};`);
  }
}

// creates task from user input
function createTasks(tdContainer, userTask) {
  let task = document.createElement("div");
  task.setAttribute("class", "task");

  let titleAndDescContainer = document.createElement("div");
  titleAndDescContainer.setAttribute("class", "title-desc-container");

  let taskTitle = document.createElement("h3");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.textContent = userTask.title;

  let taskDesc = document.createElement("p");
  taskDesc.setAttribute("id", "task-desc");
  taskDesc.textContent = userTask.description;

  let taskSettingContainer = document.createElement("div");
  taskSettingContainer.setAttribute("id", "task-setting-container");

  let taskSettings = document.createElement("button");
  taskSettingContainer.appendChild(taskSettings);
  taskSettings.setAttribute("id", "task-setting");
  taskSettings.textContent = "...";

  tdContainer.appendChild(task);
  task.append(titleAndDescContainer, taskSettingContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
  userTask.priorityChange(task);
}

//application logic
let taskArr = [];
function storeTask(Obj, taskArr) {
  taskArr.push(Obj);
  console.log(taskArr);
}

function applyAttributes( node, objAttr) {
  for (key in objAttr) {
    console.log(key);
    node.setAttribute(key, `${objAttr[key]}`);
  }
}

function createFormUI(mainContainer) {
  const dimBg = document.createElement("div");
  dimBg.setAttribute(
    "style",
    "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
  );
  body.setAttribute("style", "overflow:hidden;");
  mainContainer.append(dimBg);
  console.log("form created");


const formPopUP = document.getElementById('form-container')
mainContainer.append(formPopUP)
// formPopUP.setAttribute('class','form-active')
}

addTaskbutton.addEventListener("click", () => {
  // pubsub make a function that returns an object and pass it into these 2 functions
  // createTasks(tdMainContainer, new Task('kafka', 'something along the lines of i dont care', false, 'blue'))
  // storeTask(new Task('kafka', 'something along the lines of i dont care', false, 'red'),taskArr)
  createFormUI(mainContentContainer);
});
