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
  if (sideBar.children[1].classList.contains('active')) {
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
const body = document.querySelector('body')
const dimBg = document.createElement("div");
dimBg.setAttribute(
  "style",
  "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
);
dimBg.setAttribute('id', 'dim-background-form')
const popUpForm = document.getElementById('form-container')

function createTaskUI(container, userTask) {
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


  let dueDateCont = document.createElement('div');
  dueDateCont.setAttribute('class', 'due-date-container')
  let dueDateText = document.createElement('p');
  dueDateText.setAttribute('class', 'due-date-text')

  if (userTask.dueDate == 0 || userTask.dueDate ==1) {
    dueDateText.textContent = `Task is due today`;
  } else if(userTask.dueDate == 2){
    dueDateText.textContent = `Task is due in 2 days`;
  } else{
    dueDateText.textContent = `Task is due in ${userTask.dueDate}`
  }
  dueDateCont.appendChild(dueDateText)


  let removeButton = document.createElement("div");
  removeButton.setAttribute("id", "remove-button");
  removeButton.setAttribute("class", "remove-task-buttons");

  editRmContainer.appendChild(removeButton);
  task.setAttribute('style', `border-left:solid 10px ${userTask.priority};`);
  task.setAttribute('id', `task-${userTask.id}`);

  container.appendChild(task);
  task.append(titleAndDescContainer, dueDateCont, editRmContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
}

function createFormUI(mainContainer) {
  body.setAttribute("style", "overflow:hidden;");
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
      createEditInput()
    } else {
      createEditDesc();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Byb2plY3RBcHAuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Byb2plY3RVSS5qcyIsIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb2plY3QgZnJvbSAnLi9wcm9qZWN0VUknXG5jb25zdCBwcm9qZWN0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bi1jb250YWluZXInKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXN1Ym1pdC1pbnB1dC1idG4nKVxudGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUtaW5wdXQnKVxudGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1mb3JtJyk7XG5mb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBzdWJtaXRCdG4pXG5mb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG5wcm9qZWN0QXBwQ29udGFpbmVyLmluc2VydEJlZm9yZShmb3JtLCBhZGRQcm9qZWN0QnRuQ29udClcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBcHBVSShkaXNwbGF5KSB7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4tY29udGFpbmVyJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBREQgUFJPSkVDVCc7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHByb2plY3RBcHBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWFwcC1jb250YWluZXInKVxuICBwcm9qZWN0QXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG5Db250YWluZXIpXG4gIHByb2plY3RBcHBDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke2Rpc3BsYXl9YClcbn1cbmNyZWF0ZVByb2plY3RBcHBVSSgnZGlzcGxheTpub25lOycpXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RBcHBDb250YWluZXIpXG5cblxucHJvamVjdEFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjYWRkLXByb2plY3QtYnRuJykpIHtcbiAgICBjcmVhdGVGb3JtKHRhcmdldClcbiAgfVxufSlcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0odGFyZ2V0KSB7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7JylcbiAgdGFyZ2V0LnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBUaXRsZScpXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCdcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIHRhcmdldC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OycpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH0pXG59XG5cblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3REYXRhJywgKG1zZywgcHJvamVjdERhdGEpID0+IHtcbiAgUHJvamVjdC5jcmVhdGVQcm9qZWN0VUkocHJvamVjdEFwcENvbnRhaW5lciwgcHJvamVjdERhdGEpO1xufSlcblxucHJvamVjdEFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgUHJvamVjdC5FZGl0VGl0bGUodGFyZ2V0KVxuICBQcm9qZWN0LmRlbGV0ZVByb2plY3QodGFyZ2V0KVxufSlcblxuIiwiaW1wb3J0ICogYXMgVGFzayBmcm9tICcuL3Rhc2tVSSdcbmNvbnN0IGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWJ1dHRvbicpO1xuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVSShjb250YWluZXIsIHByb2plY3REYXRhKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGRlbFByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgcHJvalRhc2tDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcHJvakFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai1jb250YWluZXJgKVxuICBwcm9qZWN0VGl0bGVDb250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai10aXRsZS1jb250YWluZXInKVxuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpdGxlJylcbiAgcHJvalRhc2tDb250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai10YXNrLWNvbnRgKVxuICBwcm9qQWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otYWRkLXRhc2stYnRuYClcbiAgZGVsUHJvakJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otZGVsLWJ0bicpXG4gIHByb2pBZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FERCBUQVNLJ1xuICBkZWxQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gJ0RFTEVURSBQUk9KRUNUJ1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0RGF0YS50aXRsZX1gXG4gIHByb2plY3RUaXRsZUNvbnQuYXBwZW5kKHByb2plY3RUaXRsZSwgZGVsUHJvakJ1dHRvbilcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlQ29udCwgcHJvakFkZFRhc2tCdG4sIHByb2pUYXNrQ29udClcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICBzZXRQcm9qZWN0RWxlbUlEKClcbn1cbi8vIGFkZCBhbiBldmVudGxpc3RlbmVyIG9uIHRoZSBhZGQgdGFza2J1dHRvbiBjb250YWluZXJcbmZ1bmN0aW9uIHNldFByb2plY3RFbGVtSUQoKSB7XG4gIGNvbnN0IHByb2plY3RVSUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1jb250YWluZXInKVxuICBjb25zdCBwcm9qZWN0VGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai10YXNrLWNvbnQnKVxuICBjb25zdCBwcm9qZWN0QWRkVGFza0J0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1hZGQtdGFzay1idG4nKVxuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWRlbC1idG4nKTtcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ0bkxpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3REZWxldGVCdG5MaXN0KVxuICBjb25zdCBwcm9qZWN0VUlMaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0VUlMaXN0KVxuICBjb25zdCBwcm9qZWN0VGFza0xpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RUYXNrTGlzdClcbiAgY29uc3QgcHJvamVjdEFkZFRhc2tCdG5MaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0QWRkVGFza0J0bkxpc3QpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFVJTGlzdEFyci5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RVSUxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LUlELSR7aX1gKVxuICAgIHByb2plY3RUYXNrTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtdGFzay1jb250LUlELSR7aX1gKVxuICAgIHByb2plY3RBZGRUYXNrQnRuTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtYWRkLXRhc2stYnRuLUlELSR7aX1gKVxuICAgIHByb2plY3REZWxldGVCdG5MaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1kZWxldGUtYnRuLUlELSR7aX1gKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0VGl0bGUodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlUHJvamVjdENvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai10aXRsZScpKSB7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfVxuXG4gIHRpdGxlUHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmVwbGFjZVByb2plY3RUaXRsZSgpXG4gICAgfVxuICB9KVxuICBmdW5jdGlvbiByZXBsYWNlUHJvamVjdFRpdGxlKCkge1xuICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZVByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgIH1cbiAgICB0aXRsZVByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGl0bGVBdHQpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShrZXksIHRpdGxlQXR0W2tleV0pO1xuICAgIH07XG4gICAgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZSwgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgcHJvamVjdCA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcm9qLWRlbC1idG4nKSkge1xuICAgIHByb2plY3QucmVtb3ZlKClcbiAgfVxufVxuXG5sZXQgdGFyZ2V0O1xubWFpbkNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnLnByb2otYWRkLXRhc2stYnRuJykpIHtcbiAgICBUYXNrLmNyZWF0ZUZvcm1VSShtYWluQ29udGVudENvbnRhaW5lcilcbiAgfVxufSlcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QoKSB7XG4gIGNvbnN0IGJ1dHRvbklkID0gdGFyZ2V0LmlkLnNsaWNlKC0xKVxuICBjb25zdCBwcm9qZWN0VGFza0NvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC10YXNrLWNvbnQtSUQtJHtidXR0b25JZH1gKVxuICByZXR1cm4gcHJvamVjdFRhc2tDb250XG59XG5cbmZvcm1BZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBUYXNrLnJlbW92ZUZvcm0obWFpbkNvbnRlbnRDb250YWluZXIpXG59KVxuXG5tYWluQ29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICBpZiAoc2lkZUJhci5jaGlsZHJlblsxXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgVGFzay5yZW1vdmVUYXNrKHRhcmdldClcbiAgICBUYXNrLkVkaXRUYXNrKHRhcmdldClcblxuICB9XG59KVxuXG5QdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0VGFza0RhdGEnLCAobXNnLCB1c2VyVGFzaykgPT4ge1xuICBjb25zb2xlLmxvZyhtc2cpXG4gIFRhc2suY3JlYXRlVGFza1VJKGFkZFRhc2tUb1Byb2plY3QodGFyZ2V0KSwgdXNlclRhc2spXG59KVxuXG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBkaW1CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoXG4gIFwic3R5bGVcIixcbiAgXCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MCU7bGVmdDowJTt6LWluZGV4Ojk5O21pbi1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi41XCJcbik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpbS1iYWNrZ3JvdW5kLWZvcm0nKVxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tVSShjb250YWluZXIsIHVzZXJUYXNrKSB7XG4gIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG5cbiAgbGV0IHRpdGxlQW5kRGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlLWRlc2MtY29udGFpbmVyXCIpO1xuXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJUYXNrLnRpdGxlSW5wdXQ7XG5cbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXNjXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHVzZXJUYXNrLmRlc2NJbnB1dDtcblxuICBsZXQgZWRpdFJtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLWNvbnRhaW5lclwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC1jb250YWluZXJcIik7XG5cblxuICBsZXQgZHVlRGF0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZUNvbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWUtZGF0ZS1jb250YWluZXInKVxuICBsZXQgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGR1ZURhdGVUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlLWRhdGUtdGV4dCcpXG5cbiAgaWYgKHVzZXJUYXNrLmR1ZURhdGUgPT0gMCB8fCB1c2VyVGFzay5kdWVEYXRlID09MSkge1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYFRhc2sgaXMgZHVlIHRvZGF5YDtcbiAgfSBlbHNlIGlmKHVzZXJUYXNrLmR1ZURhdGUgPT0gMil7XG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBgVGFzayBpcyBkdWUgaW4gMiBkYXlzYDtcbiAgfSBlbHNle1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYFRhc2sgaXMgZHVlIGluICR7dXNlclRhc2suZHVlRGF0ZX1gXG4gIH1cbiAgZHVlRGF0ZUNvbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpXG5cblxuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlLWJ1dHRvblwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtb3ZlLXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsIGR1ZURhdGVDb250LCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNhbmNlbC1idXR0b24nKVxuICBjb25zdCBidXR0b25Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHktYnV0dG9ucycpO1xuICBjb25zdCBwcmlvcml0eUJ0bnMgPSBBcnJheS5mcm9tKGJ1dHRvbkZvcm1Db250YWluZXIuY2hpbGRyZW4pO1xuXG4gIHByaW9yaXR5QnRucy5mb3JFYWNoKHByaW9yaXR5QnRuID0+IHtcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gZmFsc2U7XG4gIH0pXG5cbiAgaWYgKCFwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1hY3RpdmUnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpbUJnKTtcbiAgfVxuXG4gIC8vIHJlZmFjdG9yIHRoaXMsIHNlcGFyYXRlIHRoZSBjYW5jZWwgZnVudGlvbmFsaXR5LCBiZWNhdXNlXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2hvdWxkIG9ubHkgY3JlYXRlIGEgZm9ybSBVSVxuICAvLyBoYW5kbGVzIGNhbmNlbCBidXR0b25cbiAgaWYgKHBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICAgICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG4gICAgICBpZiAobWFpbkNvbnRhaW5lci5jaGlsZHJlblswXSkge1xuICAgICAgICByZW1vdmVGb3JtKG1haW5Db250YWluZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzphdXRvO1wiKTtcbiAgdHJ5IHtcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gIH1cbiAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay1kZXNjJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVEZXNjQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlVGl0bGVEZXNjKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VUaXRsZURlc2MoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlSW5wdXQucmVtb3ZlKClcbiAgICAgIGRlc2NJbnB1dC5yZW1vdmUoKVxuICAgIH1cbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JtKHRhcmdldCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIMycpIHtcbiAgICAgIGNyZWF0ZUVkaXRJbnB1dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZUVkaXREZXNjKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlQXR0ID0ge1xuICAgICAgaWQ6ICdlZGl0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZURlc2NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdERlc2MoKSB7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICAgIGRlc2MudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0YXNrID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3JlbW92ZS1idXR0b24nKSkge1xuICAgIHRhc2sucmVtb3ZlKClcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=