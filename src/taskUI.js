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

const dimBg = document.createElement("div");
dimBg.setAttribute(
  "style",
  "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
);
dimBg.setAttribute('id', 'dim-background-form')


// creates the body of Today task
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

  let editRmContainer = document.createElement("div");
  editRmContainer.setAttribute("id", "edit-task-container");
  editRmContainer.setAttribute("class", "edit-container");

  let editButton = document.createElement("div");
  editButton.setAttribute("id", "edit-button");
  editButton.setAttribute("class", "edit-task-buttons");
  // editButton.textContent = "Edit Task";

  let removeButton = document.createElement("div");
  removeButton.setAttribute("id", "remove-button");
  removeButton.setAttribute("class", "edit-task-buttons");
  // removeButton.textContent = "Remove Task";

  editRmContainer.append(editButton, removeButton);
  task.setAttribute('style', `border-left:solid 10px ${userTask.priority};`);
  task.setAttribute('id', `task-${userTask.id}`);

  tdMainContainer.appendChild(task);
  task.append(titleAndDescContainer, editRmContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
}


//Place holder for when user's first use of the application
createTaskUI('hm', {
  titleInput: 'Title Here',
  descInput: 'Description Here',
  priority: 'PH',
  id: 'PH'
})


// form handler
const popUpForm = document.getElementById('form-container')
const formAddTaskButton = document.getElementById('form-add-button');
const tdUpMainContainer = document.getElementById("td-up-main-task-container");

function createFormUI(mainContainer) {
  body.setAttribute("style", "overflow:hidden;");
  console.log("form created");
  const popUpForm = document.getElementById('form-container')
  const cancelButton = document.getElementById('form-cancel-button')
  if (!popUpForm.classList.contains('form-active')) {
    popUpForm.setAttribute('class', 'form-active')
    mainContainer.append(dimBg);
  }

  // refactor this, separate the cancel funtionality, because
  // this function should only create a form UI
  // handles cancel button
  if (popUpForm.classList.contains('form-active')) {
    cancelButton.addEventListener('click', () => {
      popUpForm.classList.remove('form-active')
      popUpForm.setAttribute('class', 'form-inactive')
      if (mainContainer.children[0]) {
        removeForm(sbMainContainer)
      }
    })
  }
}

function removeForm(mainContainer) {
  body.setAttribute("style", "overflow:auto;");
  mainContainer.removeChild(dimBg)
  popUpForm.classList.remove('form-active')
  popUpForm.setAttribute('class', 'form-inactive')
};
tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  if (target.matches('#remove-button')) {
    console.log(target)
    removeTask(target)
  }
  EditTask(target)
})

function EditTask(target) {
  const titleDescContainer = target.parentNode;
  if (target.matches('#task-title')) {
    console.log(target);
    applyForm(target)
  } else if (target.matches('#task-desc')) {
    applyForm(target)
  }

  function applyForm(target) {
    target.remove()
    if (target.nodeName === 'H3') {
      console.log('im of type title')
      createEditInput()
    } else {
      createEditDesc();
      console.log('im of type description')
    }
  }
  function createEditInput() {
    let title = document.createElement('input');
    const titleAtt = {
      id: 'edit-title-input',
      type: 'text',
    };
    for (let key in titleAtt) {
      title.setAttribute(key, titleAtt[key]);
    };
    titleDescContainer.insertBefore(title, titleDescContainer.children[0]);
    title.value = target.textContent;
  }

  function createEditDesc() {
    let desc = document.createElement('textarea');
    desc.setAttribute('id', 'edit-desc-input');
    titleDescContainer.appendChild(desc);
    desc.value = target.textContent;
  }
}

function removeTask(target) {
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  tdUpMainContainer.removeChild(task)
}

addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});


// creaTaskUi get its data from the getTaskData topic
// and uses those data to create a new task UI only
PubSub.subscribe('getTaskData', createTaskUI)
formAddTaskButton.addEventListener('click', () => {
  removeForm(sbMainContainer)
});
