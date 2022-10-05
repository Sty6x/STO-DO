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
  _taskUI__WEBPACK_IMPORTED_MODULE_0__.removeTask(target)
  _taskUI__WEBPACK_IMPORTED_MODULE_0__.EditTask(target)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0QXBwLmpzIiwid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0VUkuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9qZWN0IGZyb20gJy4vcHJvamVjdFVJJ1xuY29uc3QgcHJvamVjdEFwcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRlbnQtY29udGFpbmVyJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4tY29udGFpbmVyJylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1zdWJtaXQtaW5wdXQtYnRuJylcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXRpdGxlLWlucHV0JylcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtZm9ybScpO1xuZm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgc3VibWl0QnRuKVxuZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxucHJvamVjdEFwcENvbnRhaW5lci5pbnNlcnRCZWZvcmUoZm9ybSwgYWRkUHJvamVjdEJ0bkNvbnQpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QXBwVUkoZGlzcGxheSkge1xuICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnRuLWNvbnRhaW5lcicpO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnRuJyk7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQUREIFBST0pFQ1QnO1xuICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBwcm9qZWN0QXBwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1hcHAtY29udGFpbmVyJylcbiAgcHJvamVjdEFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuQ29udGFpbmVyKVxuICBwcm9qZWN0QXBwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgJHtkaXNwbGF5fWApXG59XG5jcmVhdGVQcm9qZWN0QXBwVUkoJ2Rpc3BsYXk6bm9uZTsnKVxubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QXBwQ29udGFpbmVyKVxuXG5cbnByb2plY3RBcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI2FkZC1wcm9qZWN0LWJ0bicpKSB7XG4gICAgY3JlYXRlRm9ybSh0YXJnZXQpXG4gIH1cbn0pXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHRhcmdldCkge1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OycpXG4gIHRhcmdldC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgVGl0bGUnKVxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICB0YXJnZXQucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsnKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxufVxuXG5QdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RGF0YScsIChtc2csIHByb2plY3REYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1zZylcbiAgUHJvamVjdC5jcmVhdGVQcm9qZWN0VUkocHJvamVjdEFwcENvbnRhaW5lciwgcHJvamVjdERhdGEpO1xufSlcblxucHJvamVjdEFwcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgUHJvamVjdC5FZGl0VGl0bGUodGFyZ2V0KVxuICBQcm9qZWN0LmRlbGV0ZVByb2plY3QodGFyZ2V0KVxufSlcblxuIiwiaW1wb3J0ICogYXMgVGFzayBmcm9tICcuL3Rhc2tVSSdcbmNvbnN0IGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWJ1dHRvbicpO1xuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVJKGNvbnRhaW5lciwgcHJvamVjdERhdGEpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZGVsUHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBwcm9qVGFza0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBwcm9qQWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLWNvbnRhaW5lcmApXG4gIHByb2plY3RUaXRsZUNvbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpdGxlLWNvbnRhaW5lcicpXG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGl0bGUnKVxuICBwcm9qVGFza0NvbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLXRhc2stY29udGApXG4gIHByb2pBZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai1hZGQtdGFzay1idG5gKVxuICBkZWxQcm9qQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1kZWwtYnRuJylcbiAgcHJvakFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQUREIFRBU0snXG4gIGRlbFByb2pCdXR0b24udGV4dENvbnRlbnQgPSAnREVMRVRFIFBST0pFQ1QnXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3REYXRhLnRpdGxlfWBcbiAgcHJvamVjdFRpdGxlQ29udC5hcHBlbmQocHJvamVjdFRpdGxlLCBkZWxQcm9qQnV0dG9uKVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGVDb250LCBwcm9qQWRkVGFza0J0biwgcHJvalRhc2tDb250KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIHNldFByb2plY3RFbGVtSUQoKVxufVxuLy8gYWRkIGFuIGV2ZW50bGlzdGVuZXIgb24gdGhlIGFkZCB0YXNrYnV0dG9uIGNvbnRhaW5lclxuZnVuY3Rpb24gc2V0UHJvamVjdEVsZW1JRCgpIHtcbiAgY29uc3QgcHJvamVjdFVJTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWNvbnRhaW5lcicpXG4gIGNvbnN0IHByb2plY3RUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLXRhc2stY29udCcpXG4gIGNvbnN0IHByb2plY3RBZGRUYXNrQnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWFkZC10YXNrLWJ0bicpXG4gIGNvbnN0IHByb2plY3REZWxldGVCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otZGVsLWJ0bicpO1xuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdERlbGV0ZUJ0bkxpc3QpXG4gIGNvbnN0IHByb2plY3RVSUxpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RVSUxpc3QpXG4gIGNvbnN0IHByb2plY3RUYXNrTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tMaXN0KVxuICBjb25zdCBwcm9qZWN0QWRkVGFza0J0bkxpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RBZGRUYXNrQnRuTGlzdClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VUlMaXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFVJTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtSUQtJHtpfWApXG4gICAgcHJvamVjdFRhc2tMaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC10YXNrLWNvbnQtSUQtJHtpfWApXG4gICAgcHJvamVjdEFkZFRhc2tCdG5MaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1hZGQtdGFzay1idG4tSUQtJHtpfWApXG4gICAgcHJvamVjdERlbGV0ZUJ0bkxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LWRlbGV0ZS1idG4tSUQtJHtpfWApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUaXRsZSh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVQcm9qZWN0Q29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuZXdUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUnKTtcblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcm9qLXRpdGxlJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlUHJvamVjdFRpdGxlKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VQcm9qZWN0VGl0bGUoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlUHJvamVjdENvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlUHJvamVjdENvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC1wcm9qZWN0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZVByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZVByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCBwcm9qZWN0ID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnLnByb2otZGVsLWJ0bicpKSB7XG4gICAgcHJvamVjdC5yZW1vdmUoKVxuICB9XG59XG5cbmxldCB0YXJnZXQ7XG5tYWluQ29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai1hZGQtdGFzay1idG4nKSkge1xuICAgIFRhc2suY3JlYXRlRm9ybVVJKG1haW5Db250ZW50Q29udGFpbmVyKVxuICB9XG59KVxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCgpIHtcbiAgY29uc3QgYnV0dG9uSWQgPSB0YXJnZXQuaWQuc2xpY2UoLTEpXG4gIGNvbnN0IHByb2plY3RUYXNrQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LXRhc2stY29udC1JRC0ke2J1dHRvbklkfWApXG4gIHJldHVybiBwcm9qZWN0VGFza0NvbnRcbn1cblxuZm9ybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFRhc2sucmVtb3ZlRm9ybShtYWluQ29udGVudENvbnRhaW5lcilcbn0pXG5cbm1haW5Db250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gIFRhc2sucmVtb3ZlVGFzayh0YXJnZXQpXG4gIFRhc2suRWRpdFRhc2sodGFyZ2V0KVxufSlcblxuUHViU3ViLnN1YnNjcmliZSgnZ2V0UHJvamVjdFRhc2tEYXRhJywgKG1zZywgdXNlclRhc2spID0+IHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBUYXNrLmNyZWF0ZVRhc2tVSShhZGRUYXNrVG9Qcm9qZWN0KHRhcmdldCksIHVzZXJUYXNrKVxufSlcblxuIiwiY29uc29sZS5sb2coJ3Rhc2tVSSBpbml0aWFsaXplZCcpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpbUJnLnNldEF0dHJpYnV0ZShcbiAgXCJzdHlsZVwiLFxuICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuKTtcbmRpbUJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGltLWJhY2tncm91bmQtZm9ybScpXG5cblxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaykge1xuICAvLyBjb25zb2xlLmxvZyhtc2cpXG4gIGNvbnNvbGUubG9nKHVzZXJUYXNrKVxuICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gIGxldCB0aXRsZUFuZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1kZXNjLWNvbnRhaW5lclwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB1c2VyVGFzay50aXRsZUlucHV0O1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY1wiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB1c2VyVGFzay5kZXNjSW5wdXQ7XG5cbiAgbGV0IGVkaXRSbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1jb250YWluZXJcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtY29udGFpbmVyXCIpO1xuXG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbW92ZS1idXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtdGFzay1idXR0b25zXCIpO1xuXG4gIGVkaXRSbUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYm9yZGVyLWxlZnQ6c29saWQgMTBweCAke3VzZXJUYXNrLnByaW9yaXR5fTtgKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2stJHt1c2VyVGFzay5pZH1gKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gIHRhc2suYXBwZW5kKHRpdGxlQW5kRGVzY0NvbnRhaW5lciwgZWRpdFJtQ29udGFpbmVyKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzpoaWRkZW47XCIpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gY3JlYXRlZFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY2FuY2VsLWJ1dHRvbicpXG4gIGNvbnN0IGJ1dHRvbkZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eS1idXR0b25zJyk7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IEFycmF5LmZyb20oYnV0dG9uRm9ybUNvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgcHJpb3JpdHlCdG5zLmZvckVhY2gocHJpb3JpdHlCdG4gPT4ge1xuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSlcblxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG5cbiAgLy8gcmVmYWN0b3IgdGhpcywgc2VwYXJhdGUgdGhlIGNhbmNlbCBmdW50aW9uYWxpdHksIGJlY2F1c2VcbiAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBjcmVhdGUgYSBmb3JtIFVJXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICB0cnkge1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZGltIGJnIHJlbW92ZWQgJylcbiAgfVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0VGFzayh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVEZXNjQ29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gIG5ld0Rlc2Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2MnKTtcblxuXG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stdGl0bGUnKSkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stZGVzYycpKSB7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfVxuXG4gIHRpdGxlRGVzY0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmVwbGFjZVRpdGxlRGVzYygpXG4gICAgfVxuICB9KVxuICBmdW5jdGlvbiByZXBsYWNlVGl0bGVEZXNjKCkge1xuICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY0lucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgICBkZXNjSW5wdXQucmVtb3ZlKClcbiAgICB9XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSB0aXRsZScpXG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVFZGl0RGVzYygpO1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgZGVzY3JpcHRpb24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC10aXRsZS1pbnB1dCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGl0bGVBdHQpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShrZXksIHRpdGxlQXR0W2tleV0pO1xuICAgIH07XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZSwgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXREZXNjKCkge1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgICBkZXNjLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgfVxufVxuLy8gb3IgY2hhbmdlIHdoZW4gZXZlbnQgaXMgZXVxYWwgdG8gcmVtb3ZlXG4vLyBidXR0b24gdGFyZ2V0IHRoZW4gdGFyZ2V0LnJlbW92ZSgpXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICB0YXNrLnJlbW92ZSgpXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9