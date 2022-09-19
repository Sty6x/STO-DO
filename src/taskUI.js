const body = document.querySelector("body");
const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");

const headerContainer = document.getElementById("header-container");
const todayHeader = document.getElementById("header-text"); //style
const headerOptionContainer = document.getElementById("header-option-container");
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

// creates task from user input
function createTaskUI(msg, userTask) {
  console.log(msg)
  console.log(userTask)
  let task = document.createElement("div");
  task.setAttribute("class", "task");
  
  let titleAndDescContainer = document.createElement("div");
  titleAndDescContainer.setAttribute("class", "title-desc-container");

  let taskTitle = document.createElement("h3");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.textContent = userTask.titleInput; // From task data

  let taskDesc = document.createElement("p");
  taskDesc.setAttribute("id", "task-desc");
  taskDesc.textContent = userTask.descInput; // From task data

  let taskSettingContainer = document.createElement("div");
  taskSettingContainer.setAttribute("id", "task-setting-container");

  let taskSettings = document.createElement("button");
  taskSettingContainer.appendChild(taskSettings);
  taskSettings.setAttribute("id", "task-setting");
  taskSettings.setAttribute("class", "task-edit");
  taskSettings.textContent = "...";

  task.setAttribute('style',`border-left:solid 10px ${userTask.priority};`);
  task.setAttribute('id', `task-${userTask.id}`);

  tdMainContainer.appendChild(task);
  task.append(titleAndDescContainer, taskSettingContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
}

// createTaskUI('hm',{titleInput:'Title Here',descInput:'Description Here',priority:'PH',id:'PH'})


const dimBg = document.createElement("div");
dimBg.setAttribute(
  "style",
  "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
);
dimBg.setAttribute('id','dim-background-form')

function createFormUI(mainContainer) {
  body.setAttribute("style", "overflow:hidden;");
  console.log("form created");
  const popUpForm = document.getElementById('form-container')
  const cancelButton = document.getElementById('form-cancel-button')
  if (!popUpForm.classList.contains('form-active')) {
    popUpForm.setAttribute('class', 'form-active')
    mainContainer.append(dimBg);
  }

  // handles cancel button
  if(popUpForm.classList.contains('form-active')){
    cancelButton.addEventListener('click', e => {
      popUpForm.classList.remove('form-active')
      popUpForm.setAttribute('class', 'form-inactive')
      if(mainContainer.children[0]){
        removeForm(sbMainContainer)
      }
    })
  }

}


// form handler
const popUpForm = document.getElementById('form-container')
const formAddTaskButton = document.getElementById('form-add-button');
function removeForm(mainContainer){
  body.setAttribute("style", "overflow:auto;");
  mainContainer.removeChild(dimBg)
  popUpForm.classList.remove('form-active')
  popUpForm.setAttribute('class', 'form-inactive')
};


const tdUpMainContainer = document.getElementById("td-up-main-task-container");
tdUpMainContainer.addEventListener('click',e=>{
  if(e.target.matches('.task-edit')){
    createEditTask(e)
  }
})

function createEditTask(e){
  const editTaskButton = document.querySelectorAll('.task-edit')
  const ediTaskButtonArr = Array.from(editTaskButton)
  ediTaskButtonArr.forEach(editButton=>{
    editButton.textContent = 'lol'
  })
  console.log(editTaskButton)
}


addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});


PubSub.subscribe('getTaskData',createTaskUI)
formAddTaskButton.addEventListener('click',()=> {
  removeForm(sbMainContainer)
});