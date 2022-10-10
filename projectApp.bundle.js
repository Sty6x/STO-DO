"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectApp"],{

/***/ "./src/projectApp.js":
/*!***************************!*\
  !*** ./src/projectApp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectAppUI": () => (/* binding */ createProjectAppUI)
/* harmony export */ });
/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectUI */ "./src/projectUI.js");

const projectAppContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
const addProjectBtnCont = document.getElementById('add-project-btn-container')
const form = document.createElement('form')
const titleInput = document.createElement('input')
const submitBtn = document.createElement('button')
submitBtn.setAttribute('id', 'project-submit-input-btn')
titleInput.setAttribute('id', 'project-title-input')
titleInput.setAttribute('type', 'text')
form.setAttribute('id', 'project-form');
form.append(titleInput, submitBtn)
form.setAttribute('style', 'display:none;')
projectAppContainer.insertBefore(form, addProjectBtnCont)

function createProjectAppUI(display) {
  addProjectBtnContainer.setAttribute('id', 'add-project-btn-container');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  addProjectBtn.textContent = 'ADD PROJECT';
  addProjectBtnContainer.appendChild(addProjectBtn);
  projectAppContainer.setAttribute('id', 'project-app-container')
  projectAppContainer.appendChild(addProjectBtnContainer)
  projectAppContainer.setAttribute('style', `${display}`)
}
createProjectAppUI('display:none;')
mainContainer.appendChild(projectAppContainer)


projectAppContainer.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('#add-project-btn')) {
    createForm(target)
  }
})
function createForm(target) {
  form.setAttribute('style', 'display:flex;')
  target.parentNode.setAttribute('style', 'display:none;')
  titleInput.setAttribute('placeholder', 'Add Title')
  submitBtn.textContent = 'New Project'
  submitBtn.addEventListener('click', e => {
    form.setAttribute('style', 'display:none;')
    target.parentNode.setAttribute('style', 'display:flex;')
    e.preventDefault()
  })
}

PubSub.subscribe('getProjectData', (msg, projectData) => {
  console.log(msg)
  _projectUI__WEBPACK_IMPORTED_MODULE_0__.createProjectUI(projectAppContainer, projectData);
})

projectAppContainer.addEventListener('click', e => {
  const target = e.target;
  _projectUI__WEBPACK_IMPORTED_MODULE_0__.EditTitle(target)
  _projectUI__WEBPACK_IMPORTED_MODULE_0__.deleteProject(target)
})



/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTitle": () => (/* binding */ EditTitle),
/* harmony export */   "createProjectUI": () => (/* binding */ createProjectUI),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskUI */ "./src/taskUI.js");

const formAddTaskButton = document.getElementById('form-add-button');
const mainContentContainer = document.getElementById('main-content-container')
const sideBar = document.querySelector('.sidebar')
function createProjectUI(container, projectData) {
  const projectContainer = document.createElement('div');
  const projectTitleCont = document.createElement('div')
  const delProjButton = document.createElement('button');
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.setAttribute('class', `proj-container`)
  projectTitleCont.setAttribute('class', 'proj-title-container')
  projectTitle.setAttribute('class', 'proj-title')
  projTaskCont.setAttribute('class', `proj-task-cont`)
  projAddTaskBtn.setAttribute('class', `proj-add-task-btn`)
  delProjButton.setAttribute('class', 'proj-del-btn')
  projAddTaskBtn.textContent = 'ADD TASK'
  delProjButton.textContent = 'DELETE PROJECT'
  projectTitle.textContent = `${projectData.title}`
  projectTitleCont.append(projectTitle, delProjButton)
  projectContainer.append(projectTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
  setProjectElemID()
}
// add an eventlistener on the add taskbutton container
function setProjectElemID() {
  const projectUIList = document.querySelectorAll('.proj-container')
  const projectTaskList = document.querySelectorAll('.proj-task-cont')
  const projectAddTaskBtnList = document.querySelectorAll('.proj-add-task-btn')
  const projectDeleteBtnList = document.querySelectorAll('.proj-del-btn');
  const projectDeleteBtnListArr = Array.from(projectDeleteBtnList)
  const projectUIListArr = Array.from(projectUIList)
  const projectTaskListArr = Array.from(projectTaskList)
  const projectAddTaskBtnListArr = Array.from(projectAddTaskBtnList)
  for (let i = 0; i < projectUIListArr.length; i++) {
    projectUIListArr[i].setAttribute('id', `project-ID-${i}`)
    projectTaskListArr[i].setAttribute('id', `project-task-cont-ID-${i}`)
    projectAddTaskBtnListArr[i].setAttribute('id', `project-add-task-btn-ID-${i}`)
    projectDeleteBtnListArr[i].setAttribute('id', `project-delete-btn-ID-${i}`)
  }
}

function EditTitle(target) {
  const titleProjectContainer = target.parentNode;
  let title = document.createElement('input');
  let titleInput = document.getElementById('edit-project-title-input');
  let newTitle = document.createElement('h3');
  newTitle.setAttribute('id', 'project-title');

  if (target.matches('.proj-title')) {
    applyForm(target)
  }

  titleProjectContainer.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      replaceProjectTitle()
    }
  })
  function replaceProjectTitle() {
    if (!titleInput.value) {
      return;
    } else {
      titleProjectContainer.children[0].textContent = titleInput.value;
      titleInput.remove()
    }
    titleProjectContainer.children[0].setAttribute('style', 'display:inline')
  }

  function applyForm(target) {
    target.setAttribute('style', 'display:none;')
    if (target.nodeName === 'H3') {
      createEditInput()
    }
  }

  function createEditInput() {
    const titleAtt = {
      id: 'edit-project-title-input',
      type: 'text',
    };
    for (let key in titleAtt) {
      title.setAttribute(key, titleAtt[key]);
    };
    titleProjectContainer.insertBefore(title, titleProjectContainer.children[0]);
    title.value = target.textContent;
  }
}

function deleteProject(target) {
  let removeButtonParent = target.parentNode;
  let project = removeButtonParent.parentNode;
  if (target.matches('.proj-del-btn')) {
    project.remove()
  }
}

let target;
mainContentContainer.addEventListener('click', e => {
  target = e.target;
  if (target.matches('.proj-add-task-btn')) {
    _taskUI__WEBPACK_IMPORTED_MODULE_0__.createFormUI(mainContentContainer)
  }
})
function addTaskToProject() {
  const buttonId = target.id.slice(-1)
  const projectTaskCont = document.getElementById(`project-task-cont-ID-${buttonId}`)
  return projectTaskCont
}

formAddTaskButton.addEventListener('click', () => {
  _taskUI__WEBPACK_IMPORTED_MODULE_0__.removeForm(mainContentContainer)
})

mainContentContainer.addEventListener('click', e => {
  const target = e.target
  if (sideBar.children[2].classList.contains('active')) {
    _taskUI__WEBPACK_IMPORTED_MODULE_0__.removeTask(target)
    _taskUI__WEBPACK_IMPORTED_MODULE_0__.EditTask(target)

  }
})

PubSub.subscribe('getProjectTaskData', (msg, userTask) => {
  console.log(msg)
  _taskUI__WEBPACK_IMPORTED_MODULE_0__.createTaskUI(addTaskToProject(target), userTask)
})



/***/ }),

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTask": () => (/* binding */ EditTask),
/* harmony export */   "createFormUI": () => (/* binding */ createFormUI),
/* harmony export */   "createTaskUI": () => (/* binding */ createTaskUI),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
console.log('taskUI initialized')
const body = document.querySelector('body')

const dimBg = document.createElement("div");
dimBg.setAttribute(
  "style",
  "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
);
dimBg.setAttribute('id', 'dim-background-form')


const popUpForm = document.getElementById('form-container')
// creates task from user input
function createTaskUI(container, userTask) {
  // console.log(msg)
  console.log(userTask)
  let task = document.createElement("div");
  task.setAttribute("class", "task");

  let titleAndDescContainer = document.createElement("div");
  titleAndDescContainer.setAttribute("class", "title-desc-container");

  let taskTitle = document.createElement("h3");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.textContent = userTask.titleInput;

  let taskDesc = document.createElement("p");
  taskDesc.setAttribute("id", "task-desc");
  taskDesc.textContent = userTask.descInput;

  let editRmContainer = document.createElement("div");
  editRmContainer.setAttribute("id", "edit-task-container");
  editRmContainer.setAttribute("class", "edit-container");


  let removeButton = document.createElement("div");
  removeButton.setAttribute("id", "remove-button");
  removeButton.setAttribute("class", "edit-task-buttons");

  editRmContainer.appendChild(removeButton);
  task.setAttribute('style', `border-left:solid 10px ${userTask.priority};`);
  task.setAttribute('id', `task-${userTask.id}`);

  container.appendChild(task);
  task.append(titleAndDescContainer, editRmContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
}

function createFormUI(mainContainer) {
  body.setAttribute("style", "overflow:hidden;");
  console.log("form created");
  const cancelButton = document.getElementById('form-cancel-button')
  const buttonFormContainer = document.getElementById('form-priority-buttons');
  const priorityBtns = Array.from(buttonFormContainer.children);

  priorityBtns.forEach(priorityBtn => {
    priorityBtn.checked = false;
  })

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
        removeForm(mainContainer)
      }
    })
  }
}

function removeForm(mainContainer) {
  body.setAttribute("style", "overflow:auto;");
  try {
    mainContainer.removeChild(dimBg)

  } catch (error) {
    console.log('dim bg removed ')
  }
  popUpForm.classList.remove('form-active')
  popUpForm.setAttribute('class', 'form-inactive')
};

function EditTask(target) {
  const titleDescContainer = target.parentNode;
  let title = document.createElement('input');
  let desc = document.createElement('textarea');
  let titleInput = document.getElementById('edit-title-input');
  let descInput = document.getElementById('edit-desc-input');
  let newTitle = document.createElement('h3');
  let newDesc = document.createElement('p');
  newTitle.setAttribute('id', 'task-title');
  newDesc.setAttribute('id', 'task-desc');


  if (target.matches('#task-title')) {
    console.log(target);
    applyForm(target)
  } else if (target.matches('#task-desc')) {
    applyForm(target)
  }

  titleDescContainer.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      replaceTitleDesc()
    }
  })
  function replaceTitleDesc() {
    if (!titleInput.value || !descInput.value) {
      return;
    } else {
      titleDescContainer.children[1].textContent = titleInput.value;
      titleDescContainer.children[2].textContent = descInput.value;
      titleInput.remove()
      descInput.remove()
    }
    titleDescContainer.children[0].setAttribute('style', 'display:inline')
    titleDescContainer.children[1].setAttribute('style', 'display:inline')
  }

  function applyForm(target) {
    target.setAttribute('style', 'display:none;')
    if (target.nodeName === 'H3') {
      console.log('im of type title')
      createEditInput()
    } else {
      createEditDesc();
      console.log('im of type description')
    }
  }

  function createEditInput() {
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
    desc.setAttribute('id', 'edit-desc-input');
    desc.value = target.textContent;
    titleDescContainer.appendChild(desc);
  }
}
// or change when event is euqal to remove
// button target then target.remove()
function removeTask(target) {
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  if (target.matches('#remove-button')) {
    task.remove()
  }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectApp.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Byb2plY3RBcHAuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Byb2plY3RVSS5qcyIsIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb2plY3QgZnJvbSAnLi9wcm9qZWN0VUknXG5jb25zdCBwcm9qZWN0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bi1jb250YWluZXInKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXN1Ym1pdC1pbnB1dC1idG4nKVxudGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUtaW5wdXQnKVxudGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1mb3JtJyk7XG5mb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBzdWJtaXRCdG4pXG5mb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG5wcm9qZWN0QXBwQ29udGFpbmVyLmluc2VydEJlZm9yZShmb3JtLCBhZGRQcm9qZWN0QnRuQ29udClcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBcHBVSShkaXNwbGF5KSB7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4tY29udGFpbmVyJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBREQgUFJPSkVDVCc7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHByb2plY3RBcHBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWFwcC1jb250YWluZXInKVxuICBwcm9qZWN0QXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG5Db250YWluZXIpXG4gIHByb2plY3RBcHBDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke2Rpc3BsYXl9YClcbn1cbmNyZWF0ZVByb2plY3RBcHBVSSgnZGlzcGxheTpub25lOycpXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RBcHBDb250YWluZXIpXG5cblxucHJvamVjdEFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjYWRkLXByb2plY3QtYnRuJykpIHtcbiAgICBjcmVhdGVGb3JtKHRhcmdldClcbiAgfVxufSlcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0odGFyZ2V0KSB7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7JylcbiAgdGFyZ2V0LnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBUaXRsZScpXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCdcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIHRhcmdldC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OycpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH0pXG59XG5cblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3REYXRhJywgKG1zZywgcHJvamVjdERhdGEpID0+IHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBQcm9qZWN0LmNyZWF0ZVByb2plY3RVSShwcm9qZWN0QXBwQ29udGFpbmVyLCBwcm9qZWN0RGF0YSk7XG59KVxuXG5wcm9qZWN0QXBwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBQcm9qZWN0LkVkaXRUaXRsZSh0YXJnZXQpXG4gIFByb2plY3QuZGVsZXRlUHJvamVjdCh0YXJnZXQpXG59KVxuXG4iLCJpbXBvcnQgKiBhcyBUYXNrIGZyb20gJy4vdGFza1VJJ1xuY29uc3QgZm9ybUFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1hZGQtYnV0dG9uJyk7XG5jb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRlbnQtY29udGFpbmVyJylcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVJKGNvbnRhaW5lciwgcHJvamVjdERhdGEpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZGVsUHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBwcm9qVGFza0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBwcm9qQWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLWNvbnRhaW5lcmApXG4gIHByb2plY3RUaXRsZUNvbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpdGxlLWNvbnRhaW5lcicpXG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGl0bGUnKVxuICBwcm9qVGFza0NvbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLXRhc2stY29udGApXG4gIHByb2pBZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai1hZGQtdGFzay1idG5gKVxuICBkZWxQcm9qQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1kZWwtYnRuJylcbiAgcHJvakFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQUREIFRBU0snXG4gIGRlbFByb2pCdXR0b24udGV4dENvbnRlbnQgPSAnREVMRVRFIFBST0pFQ1QnXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3REYXRhLnRpdGxlfWBcbiAgcHJvamVjdFRpdGxlQ29udC5hcHBlbmQocHJvamVjdFRpdGxlLCBkZWxQcm9qQnV0dG9uKVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGVDb250LCBwcm9qQWRkVGFza0J0biwgcHJvalRhc2tDb250KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIHNldFByb2plY3RFbGVtSUQoKVxufVxuLy8gYWRkIGFuIGV2ZW50bGlzdGVuZXIgb24gdGhlIGFkZCB0YXNrYnV0dG9uIGNvbnRhaW5lclxuZnVuY3Rpb24gc2V0UHJvamVjdEVsZW1JRCgpIHtcbiAgY29uc3QgcHJvamVjdFVJTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWNvbnRhaW5lcicpXG4gIGNvbnN0IHByb2plY3RUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLXRhc2stY29udCcpXG4gIGNvbnN0IHByb2plY3RBZGRUYXNrQnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWFkZC10YXNrLWJ0bicpXG4gIGNvbnN0IHByb2plY3REZWxldGVCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otZGVsLWJ0bicpO1xuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdERlbGV0ZUJ0bkxpc3QpXG4gIGNvbnN0IHByb2plY3RVSUxpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RVSUxpc3QpXG4gIGNvbnN0IHByb2plY3RUYXNrTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tMaXN0KVxuICBjb25zdCBwcm9qZWN0QWRkVGFza0J0bkxpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RBZGRUYXNrQnRuTGlzdClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VUlMaXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFVJTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtSUQtJHtpfWApXG4gICAgcHJvamVjdFRhc2tMaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC10YXNrLWNvbnQtSUQtJHtpfWApXG4gICAgcHJvamVjdEFkZFRhc2tCdG5MaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1hZGQtdGFzay1idG4tSUQtJHtpfWApXG4gICAgcHJvamVjdERlbGV0ZUJ0bkxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LWRlbGV0ZS1idG4tSUQtJHtpfWApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUaXRsZSh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVQcm9qZWN0Q29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuZXdUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUnKTtcblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcm9qLXRpdGxlJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlUHJvamVjdFRpdGxlKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VQcm9qZWN0VGl0bGUoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlUHJvamVjdENvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlUHJvamVjdENvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC1wcm9qZWN0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZVByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZVByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCBwcm9qZWN0ID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnLnByb2otZGVsLWJ0bicpKSB7XG4gICAgcHJvamVjdC5yZW1vdmUoKVxuICB9XG59XG5cbmxldCB0YXJnZXQ7XG5tYWluQ29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai1hZGQtdGFzay1idG4nKSkge1xuICAgIFRhc2suY3JlYXRlRm9ybVVJKG1haW5Db250ZW50Q29udGFpbmVyKVxuICB9XG59KVxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCgpIHtcbiAgY29uc3QgYnV0dG9uSWQgPSB0YXJnZXQuaWQuc2xpY2UoLTEpXG4gIGNvbnN0IHByb2plY3RUYXNrQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LXRhc2stY29udC1JRC0ke2J1dHRvbklkfWApXG4gIHJldHVybiBwcm9qZWN0VGFza0NvbnRcbn1cblxuZm9ybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFRhc2sucmVtb3ZlRm9ybShtYWluQ29udGVudENvbnRhaW5lcilcbn0pXG5cbm1haW5Db250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gIGlmIChzaWRlQmFyLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBUYXNrLnJlbW92ZVRhc2sodGFyZ2V0KVxuICAgIFRhc2suRWRpdFRhc2sodGFyZ2V0KVxuXG4gIH1cbn0pXG5cblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3RUYXNrRGF0YScsIChtc2csIHVzZXJUYXNrKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1zZylcbiAgVGFzay5jcmVhdGVUYXNrVUkoYWRkVGFza1RvUHJvamVjdCh0YXJnZXQpLCB1c2VyVGFzaylcbn0pXG5cbiIsImNvbnNvbGUubG9nKCd0YXNrVUkgaW5pdGlhbGl6ZWQnKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5jb25zdCBkaW1CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoXG4gIFwic3R5bGVcIixcbiAgXCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MCU7bGVmdDowJTt6LWluZGV4Ojk5O21pbi1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi41XCJcbik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpbS1iYWNrZ3JvdW5kLWZvcm0nKVxuXG5cbmNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXG4vLyBjcmVhdGVzIHRhc2sgZnJvbSB1c2VyIGlucHV0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1VJKGNvbnRhaW5lciwgdXNlclRhc2spIHtcbiAgLy8gY29uc29sZS5sb2cobXNnKVxuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW1vdmUtYnV0dG9uXCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsIGVkaXRSbUNvbnRhaW5lcik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtVUkobWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6aGlkZGVuO1wiKTtcbiAgY29uc29sZS5sb2coXCJmb3JtIGNyZWF0ZWRcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNhbmNlbC1idXR0b24nKVxuICBjb25zdCBidXR0b25Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHktYnV0dG9ucycpO1xuICBjb25zdCBwcmlvcml0eUJ0bnMgPSBBcnJheS5mcm9tKGJ1dHRvbkZvcm1Db250YWluZXIuY2hpbGRyZW4pO1xuXG4gIHByaW9yaXR5QnRucy5mb3JFYWNoKHByaW9yaXR5QnRuID0+IHtcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gZmFsc2U7XG4gIH0pXG5cbiAgaWYgKCFwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1hY3RpdmUnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpbUJnKTtcbiAgfVxuXG4gIC8vIHJlZmFjdG9yIHRoaXMsIHNlcGFyYXRlIHRoZSBjYW5jZWwgZnVudGlvbmFsaXR5LCBiZWNhdXNlXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2hvdWxkIG9ubHkgY3JlYXRlIGEgZm9ybSBVSVxuICAvLyBoYW5kbGVzIGNhbmNlbCBidXR0b25cbiAgaWYgKHBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICAgICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG4gICAgICBpZiAobWFpbkNvbnRhaW5lci5jaGlsZHJlblswXSkge1xuICAgICAgICByZW1vdmVGb3JtKG1haW5Db250YWluZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzphdXRvO1wiKTtcbiAgdHJ5IHtcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2RpbSBiZyByZW1vdmVkICcpXG4gIH1cbiAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLWRlc2MnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZURlc2NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VUaXRsZURlc2MoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVRpdGxlRGVzYygpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgICAgZGVzY0lucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgdGl0bGUnKVxuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlRWRpdERlc2MoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIGRlc2NyaXB0aW9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0RGVzYygpIHtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjLWlucHV0Jyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aXRsZURlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIH1cbn1cbi8vIG9yIGNoYW5nZSB3aGVuIGV2ZW50IGlzIGV1cWFsIHRvIHJlbW92ZVxuLy8gYnV0dG9uIHRhcmdldCB0aGVuIHRhcmdldC5yZW1vdmUoKVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFyZ2V0KSB7XG4gIGxldCByZW1vdmVCdXR0b25QYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRhc2sgPSByZW1vdmVCdXR0b25QYXJlbnQucGFyZW50Tm9kZTtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjcmVtb3ZlLWJ1dHRvbicpKSB7XG4gICAgdGFzay5yZW1vdmUoKVxuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==