"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectUI"],{

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


  let dueDateCont = document.createElement('div');
  dueDateCont.setAttribute('class', 'due-date-container')
  let dueDateText = document.createElement('p');
  dueDateText.setAttribute('class', 'due-date-text')

  if (userTask.dueDate == 0) {
    dueDateText.textContent = `Task is due today`;
  } else if (userTask.dueDate == 1) {
    dueDateText.textContent = `Task is due tomorrow`;
  } else {
    dueDateText.textContent = `Task is due in ${userTask.dueDate} days`;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Byb2plY3RVSS5qcyIsIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRhc2sgZnJvbSAnLi90YXNrVUknXG5jb25zdCBmb3JtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFkZC1idXR0b24nKTtcbmNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKVxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0VUkoY29udGFpbmVyLCBwcm9qZWN0RGF0YSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkZWxQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IHByb2pUYXNrQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByb2pBZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otY29udGFpbmVyYClcbiAgcHJvamVjdFRpdGxlQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGl0bGUtY29udGFpbmVyJylcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai10aXRsZScpXG4gIHByb2pUYXNrQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otdGFzay1jb250YClcbiAgcHJvakFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLWFkZC10YXNrLWJ0bmApXG4gIGRlbFByb2pCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLWRlbC1idG4nKVxuICBwcm9qQWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBREQgVEFTSydcbiAgZGVsUHJvakJ1dHRvbi50ZXh0Q29udGVudCA9ICdERUxFVEUgUFJPSkVDVCdcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdERhdGEudGl0bGV9YFxuICBwcm9qZWN0VGl0bGVDb250LmFwcGVuZChwcm9qZWN0VGl0bGUsIGRlbFByb2pCdXR0b24pXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZUNvbnQsIHByb2pBZGRUYXNrQnRuLCBwcm9qVGFza0NvbnQpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgc2V0UHJvamVjdEVsZW1JRCgpXG59XG4vLyBhZGQgYW4gZXZlbnRsaXN0ZW5lciBvbiB0aGUgYWRkIHRhc2tidXR0b24gY29udGFpbmVyXG5mdW5jdGlvbiBzZXRQcm9qZWN0RWxlbUlEKCkge1xuICBjb25zdCBwcm9qZWN0VUlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otY29udGFpbmVyJylcbiAgY29uc3QgcHJvamVjdFRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otdGFzay1jb250JylcbiAgY29uc3QgcHJvamVjdEFkZFRhc2tCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otYWRkLXRhc2stYnRuJylcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1kZWwtYnRuJyk7XG4gIGNvbnN0IHByb2plY3REZWxldGVCdG5MaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0RGVsZXRlQnRuTGlzdClcbiAgY29uc3QgcHJvamVjdFVJTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdFVJTGlzdClcbiAgY29uc3QgcHJvamVjdFRhc2tMaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0VGFza0xpc3QpXG4gIGNvbnN0IHByb2plY3RBZGRUYXNrQnRuTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdEFkZFRhc2tCdG5MaXN0KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RVSUxpc3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0VUlMaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1JRC0ke2l9YClcbiAgICBwcm9qZWN0VGFza0xpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LXRhc2stY29udC1JRC0ke2l9YClcbiAgICBwcm9qZWN0QWRkVGFza0J0bkxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LWFkZC10YXNrLWJ0bi1JRC0ke2l9YClcbiAgICBwcm9qZWN0RGVsZXRlQnRuTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtZGVsZXRlLWJ0bi1JRC0ke2l9YClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFRpdGxlKHRhcmdldCkge1xuICBjb25zdCB0aXRsZVByb2plY3RDb250YWluZXIgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC10aXRsZScpO1xuXG4gIGlmICh0YXJnZXQubWF0Y2hlcygnLnByb2otdGl0bGUnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZVByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VQcm9qZWN0VGl0bGUoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVByb2plY3RUaXRsZSgpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlSW5wdXQucmVtb3ZlKClcbiAgICB9XG4gICAgdGl0bGVQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JtKHRhcmdldCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIMycpIHtcbiAgICAgIGNyZWF0ZUVkaXRJbnB1dCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlQXR0ID0ge1xuICAgICAgaWQ6ICdlZGl0LXByb2plY3QtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlUHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlUHJvamVjdENvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QodGFyZ2V0KSB7XG4gIGxldCByZW1vdmVCdXR0b25QYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHByb2plY3QgPSByZW1vdmVCdXR0b25QYXJlbnQucGFyZW50Tm9kZTtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai1kZWwtYnRuJykpIHtcbiAgICBwcm9qZWN0LnJlbW92ZSgpXG4gIH1cbn1cblxubGV0IHRhcmdldDtcbm1haW5Db250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIHRhcmdldCA9IGUudGFyZ2V0O1xuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcm9qLWFkZC10YXNrLWJ0bicpKSB7XG4gICAgVGFzay5jcmVhdGVGb3JtVUkobWFpbkNvbnRlbnRDb250YWluZXIpXG4gIH1cbn0pXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KCkge1xuICBjb25zdCBidXR0b25JZCA9IHRhcmdldC5pZC5zbGljZSgtMSlcbiAgY29uc3QgcHJvamVjdFRhc2tDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtdGFzay1jb250LUlELSR7YnV0dG9uSWR9YClcbiAgcmV0dXJuIHByb2plY3RUYXNrQ29udFxufVxuXG5mb3JtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgVGFzay5yZW1vdmVGb3JtKG1haW5Db250ZW50Q29udGFpbmVyKVxufSlcblxubWFpbkNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgaWYgKHNpZGVCYXIuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIFRhc2sucmVtb3ZlVGFzayh0YXJnZXQpXG4gICAgVGFzay5FZGl0VGFzayh0YXJnZXQpXG5cbiAgfVxufSlcblxuUHViU3ViLnN1YnNjcmliZSgnZ2V0UHJvamVjdFRhc2tEYXRhJywgKG1zZywgdXNlclRhc2spID0+IHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBUYXNrLmNyZWF0ZVRhc2tVSShhZGRUYXNrVG9Qcm9qZWN0KHRhcmdldCksIHVzZXJUYXNrKVxufSlcblxuIiwiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgZGltQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGltQmcuc2V0QXR0cmlidXRlKFxuICBcInN0eWxlXCIsXG4gIFwicG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjAlO2xlZnQ6MCU7ei1pbmRleDo5OTttaW4taGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouNVwiXG4pO1xuZGltQmcuc2V0QXR0cmlidXRlKCdpZCcsICdkaW0tYmFja2dyb3VuZC1mb3JtJylcbmNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaykge1xuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCBkdWVEYXRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZS1kYXRlLWNvbnRhaW5lcicpXG4gIGxldCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWUtZGF0ZS10ZXh0JylcblxuICBpZiAodXNlclRhc2suZHVlRGF0ZSA9PSAwKSB7XG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBgVGFzayBpcyBkdWUgdG9kYXlgO1xuICB9IGVsc2UgaWYgKHVzZXJUYXNrLmR1ZURhdGUgPT0gMSkge1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYFRhc2sgaXMgZHVlIHRvbW9ycm93YDtcbiAgfSBlbHNlIHtcbiAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IGBUYXNrIGlzIGR1ZSBpbiAke3VzZXJUYXNrLmR1ZURhdGV9IGRheXNgO1xuICB9XG4gIGR1ZURhdGVDb250LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KVxuXG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbW92ZS1idXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZS10YXNrLWJ1dHRvbnNcIik7XG5cbiAgZWRpdFJtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBib3JkZXItbGVmdDpzb2xpZCAxMHB4ICR7dXNlclRhc2sucHJpb3JpdHl9O2ApO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3VzZXJUYXNrLmlkfWApO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBkdWVEYXRlQ29udCwgZWRpdFJtQ29udGFpbmVyKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzpoaWRkZW47XCIpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gY3JlYXRlZFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY2FuY2VsLWJ1dHRvbicpXG4gIGNvbnN0IGJ1dHRvbkZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eS1idXR0b25zJyk7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IEFycmF5LmZyb20oYnV0dG9uRm9ybUNvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgcHJpb3JpdHlCdG5zLmZvckVhY2gocHJpb3JpdHlCdG4gPT4ge1xuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSlcblxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG5cbiAgLy8gcmVmYWN0b3IgdGhpcywgc2VwYXJhdGUgdGhlIGNhbmNlbCBmdW50aW9uYWxpdHksIGJlY2F1c2VcbiAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBjcmVhdGUgYSBmb3JtIFVJXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICB0cnkge1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZGltIGJnIHJlbW92ZWQgJylcbiAgfVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0VGFzayh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVEZXNjQ29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gIG5ld0Rlc2Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2MnKTtcblxuXG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stdGl0bGUnKSkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stZGVzYycpKSB7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfVxuXG4gIHRpdGxlRGVzY0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmVwbGFjZVRpdGxlRGVzYygpXG4gICAgfVxuICB9KVxuICBmdW5jdGlvbiByZXBsYWNlVGl0bGVEZXNjKCkge1xuICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY0lucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgICBkZXNjSW5wdXQucmVtb3ZlKClcbiAgICB9XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSB0aXRsZScpXG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVFZGl0RGVzYygpO1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgZGVzY3JpcHRpb24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC10aXRsZS1pbnB1dCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGl0bGVBdHQpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShrZXksIHRpdGxlQXR0W2tleV0pO1xuICAgIH07XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZSwgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXREZXNjKCkge1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgICBkZXNjLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICB0YXNrLnJlbW92ZSgpXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9