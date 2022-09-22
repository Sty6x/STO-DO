const body = document.querySelector("body");
const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");
console.log('dwa')
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

createTaskUI('hm', {
  titleInput: 'Title Here',
  descInput: 'Description Here',
  priority: 'PH',
  id: 'PH'
})


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
  if (popUpForm.classList.contains('form-active')) {
    cancelButton.addEventListener('click', e => {
      popUpForm.classList.remove('form-active')
      popUpForm.setAttribute('class', 'form-inactive')
      if (mainContainer.children[0]) {
        removeForm(sbMainContainer)
      }
    })
  }

}


// form handler
const popUpForm = document.getElementById('form-container')
const formAddTaskButton = document.getElementById('form-add-button');

function removeForm(mainContainer) {
  body.setAttribute("style", "overflow:auto;");
  mainContainer.removeChild(dimBg)
  popUpForm.classList.remove('form-active')
  popUpForm.setAttribute('class', 'form-inactive')
};




const tdUpMainContainer = document.getElementById("td-up-main-task-container");
tdUpMainContainer.addEventListener('click', e => {

  const target = e.target
  if (target.matches('#remove-button')) {
    console.log(target)
    removeTask(target)
  } 
  if (target.matches('#task-title') || target.matches('#task-desc')) {
    editForm().createEditform(target)
  }
  if (target.matches('#td-up-main-task-container')) {
    editForm().changeTitleDesc()
    editForm().removeEditForm()
  }
  console.log(target)
})

function removeTask(target){
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  tdUpMainContainer.removeChild(task)

}




// invokes when task-title or task-desc is pressed and sets display to none on title and desc
function editForm() {
  const editTitleInput = document.createElement('input')
  const editDescInput = document.createElement('textarea')
  const titleDescContainer = document.querySelector('.title-desc-container');

  editTitleInput.setAttribute('id', 'edit-title')
  editDescInput.setAttribute('id', 'edit-desc')
  editTitleInput.setAttribute('style', 'font-size:1rem; width:40%; font-weight:bold; ')
  editDescInput.setAttribute('style', 'width:70%;font-size:.8rem; padding:0; margin-top:.1em; padding: 6px 5px;')
  titleDescContainer.setAttribute('style', 'display:flex;flex-direction:column; width:70%;')
  const applyTitleAttribute = {
    type: 'text',
    id: 'edit-title',
  }
  const applyDescAttribute = {
    type: 'text',
    id: 'edit-desc'
  }

  function applyAttribute(obj, node) {
    for (key in obj) {
      node.setAttribute(key, obj[key])
    }
  }
  applyAttribute(applyTitleAttribute, editTitleInput)
  applyAttribute(applyDescAttribute, editDescInput)

  const titleInput = document.getElementById('edit-title');
  const descInput = document.getElementById('edit-desc');

  // displays form inside title and desc
  function createEditform(target) {
    let currentTitle = titleDescContainer.firstChild
    let currentDesc = titleDescContainer.lastChild;
    // checks if any clicking a specific node either title or desciption
    if (target.matches('#task-title')) {
      currentTitle.setAttribute('style', 'display: none');
      titleDescContainer.insertBefore(editTitleInput, titleDescContainer.firstChild);
    }
    if (target.matches('#task-desc')) {
      console.log(editDescInput)
      currentDesc.setAttribute('style', 'display:none;')
      titleDescContainer.appendChild(editDescInput);
    }
  }

  // unable to change textContent becuase there are no values for editTitle and desc
  function changeTitleDesc() {
    // current title and desc works 
    // prolem is the value of my inputs are not recording or being stored
    let currentTitle = document.getElementById('task-title')
    let currentDesc = document.getElementById('task-desc')
    const newTitle = document.getElementById('edit-title')
    const newDesc = document.getElementById('edit-desc')

    currentTitle.textContent = newTitle.value;
    currentDesc.textContent = newDesc.value;
    // console.log(currentDesc)

  }

  function removeEditForm() {
    titleDescContainer.removeChild(titleInput);
    titleDescContainer.removeChild(descInput);
    titleDescContainer.childNodes[0].setAttribute('style', 'display:inline;')
    titleDescContainer.childNodes[1].setAttribute('style', 'display:inline;')
  }

  return {
    createEditform,
    removeEditForm,
    changeTitleDesc
  }
}



addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});


PubSub.subscribe('getTaskData', createTaskUI)
formAddTaskButton.addEventListener('click', () => {
  removeForm(sbMainContainer)
});