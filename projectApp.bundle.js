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

const todayHeader = document.getElementById("header-text"); //style
const projectAppContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
function createProjectAppUI() {
  addProjectBtnContainer.setAttribute('id', 'add-project-btn-container');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  addProjectBtn.textContent = 'ADD PROJECT';
  addProjectBtnContainer.appendChild(addProjectBtn);
  projectAppContainer.setAttribute('id', 'project-app-container')
  projectAppContainer.appendChild(addProjectBtnContainer)
  mainContainer.appendChild(projectAppContainer)
  todayHeader.textContent = 'PROJECTS'
}
createProjectAppUI()

addProjectBtn.addEventListener('click', e => {
  _projectUI__WEBPACK_IMPORTED_MODULE_0__.createProjectUI(projectAppContainer);
})



/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectUI": () => (/* binding */ createProjectUI)
/* harmony export */ });
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskUI */ "./src/taskUI.js");

function createProjectUI(container) {
  const projectContainer = document.createElement('div');
  const projectTitleCont = document.createElement('div')
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.setAttribute('class', `proj-container`)
  projectTitleCont.setAttribute('class', 'proj-title-container')
  projectTitle.setAttribute('class', 'proj-title')
  projTaskCont.setAttribute('class', `proj-task-cont`)
  projAddTaskBtn.setAttribute('class', `proj-add-task-btn`)
  projAddTaskBtn.textContent = 'ADD TASK'
  projectTitle.textContent = `My First Project`
  projectTitleCont.appendChild(projectTitle)
  projectContainer.append(projectTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
  setProjectElemID()
}
// add an eventlistener on the add taskbutton container
function setProjectElemID() {
  const projectUIList = document.querySelectorAll('.proj-container')
  const projectTaskList = document.querySelectorAll('.proj-task-cont')
  const projectAddTaskBtnList = document.querySelectorAll('.proj-add-task-btn')
  const projectUIListArr = Array.from(projectUIList)
  const projectTaskListArr = Array.from(projectTaskList)
  const projectAddTaskBtnListArr = Array.from(projectAddTaskBtnList)
  for (let i = 0; i < projectUIListArr.length; i++) {
    projectUIListArr[i].setAttribute('id', `project-ID-${i}`)
    projectTaskListArr[i].setAttribute('id', `project-task-cont-ID-${i}`)
    projectAddTaskBtnListArr[i].setAttribute('id', `project-add-task-btn-ID-${i}`)
  }
}


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
function createTaskUI(container, userTask, insert) {
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

  container.insertBefore(task, insert);
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
  mainContainer.removeChild(dimBg)
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
function removeTask(container, target) {
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  container.removeChild(task)
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectApp.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEFwcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEMsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsdURBQXVCO0FBQ3pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIrQjtBQUN6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQyx5REFBeUQsRUFBRTtBQUMzRCxxRUFBcUUsRUFBRTtBQUN2RSw4RUFBOEUsRUFBRTtBQUNoRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVUsUUFBUSxXQUFXLGlCQUFpQixZQUFZLHVCQUF1QjtBQUN0RztBQUNBOzs7QUFHQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLGtDQUFrQyxZQUFZOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0QXBwLmpzIiwid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0VUkuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9qZWN0IGZyb20gJy4vcHJvamVjdFVJJ1xuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBwcm9qZWN0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QXBwVUkoKSB7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4tY29udGFpbmVyJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBREQgUFJPSkVDVCc7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHByb2plY3RBcHBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWFwcC1jb250YWluZXInKVxuICBwcm9qZWN0QXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG5Db250YWluZXIpXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEFwcENvbnRhaW5lcilcbiAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSAnUFJPSkVDVFMnXG59XG5jcmVhdGVQcm9qZWN0QXBwVUkoKVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIFByb2plY3QuY3JlYXRlUHJvamVjdFVJKHByb2plY3RBcHBDb250YWluZXIpO1xufSlcblxuIiwiaW1wb3J0ICogYXMgVGFzayBmcm9tICcuL3Rhc2tVSSdcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0VUkoY29udGFpbmVyKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IHByb2pUYXNrQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByb2pBZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otY29udGFpbmVyYClcbiAgcHJvamVjdFRpdGxlQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGl0bGUtY29udGFpbmVyJylcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai10aXRsZScpXG4gIHByb2pUYXNrQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otdGFzay1jb250YClcbiAgcHJvakFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qLWFkZC10YXNrLWJ0bmApXG4gIHByb2pBZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FERCBUQVNLJ1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgTXkgRmlyc3QgUHJvamVjdGBcbiAgcHJvamVjdFRpdGxlQ29udC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZUNvbnQsIHByb2pBZGRUYXNrQnRuLCBwcm9qVGFza0NvbnQpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgc2V0UHJvamVjdEVsZW1JRCgpXG59XG4vLyBhZGQgYW4gZXZlbnRsaXN0ZW5lciBvbiB0aGUgYWRkIHRhc2tidXR0b24gY29udGFpbmVyXG5mdW5jdGlvbiBzZXRQcm9qZWN0RWxlbUlEKCkge1xuICBjb25zdCBwcm9qZWN0VUlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otY29udGFpbmVyJylcbiAgY29uc3QgcHJvamVjdFRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otdGFzay1jb250JylcbiAgY29uc3QgcHJvamVjdEFkZFRhc2tCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otYWRkLXRhc2stYnRuJylcbiAgY29uc3QgcHJvamVjdFVJTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdFVJTGlzdClcbiAgY29uc3QgcHJvamVjdFRhc2tMaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0VGFza0xpc3QpXG4gIGNvbnN0IHByb2plY3RBZGRUYXNrQnRuTGlzdEFyciA9IEFycmF5LmZyb20ocHJvamVjdEFkZFRhc2tCdG5MaXN0KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RVSUxpc3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0VUlMaXN0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1JRC0ke2l9YClcbiAgICBwcm9qZWN0VGFza0xpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LXRhc2stY29udC1JRC0ke2l9YClcbiAgICBwcm9qZWN0QWRkVGFza0J0bkxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LWFkZC10YXNrLWJ0bi1JRC0ke2l9YClcbiAgfVxufVxuIiwiY29uc29sZS5sb2coJ3Rhc2tVSSBpbml0aWFsaXplZCcpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpbUJnLnNldEF0dHJpYnV0ZShcbiAgXCJzdHlsZVwiLFxuICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuKTtcbmRpbUJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGltLWJhY2tncm91bmQtZm9ybScpXG5cblxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaywgaW5zZXJ0KSB7XG4gIC8vIGNvbnNvbGUubG9nKG1zZylcbiAgY29uc29sZS5sb2codXNlclRhc2spXG4gIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG5cbiAgbGV0IHRpdGxlQW5kRGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlLWRlc2MtY29udGFpbmVyXCIpO1xuXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJUYXNrLnRpdGxlSW5wdXQ7XG5cbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXNjXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHVzZXJUYXNrLmRlc2NJbnB1dDtcblxuICBsZXQgZWRpdFJtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLWNvbnRhaW5lclwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC1jb250YWluZXJcIik7XG5cblxuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlLWJ1dHRvblwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC10YXNrLWJ1dHRvbnNcIik7XG5cbiAgZWRpdFJtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBib3JkZXItbGVmdDpzb2xpZCAxMHB4ICR7dXNlclRhc2sucHJpb3JpdHl9O2ApO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3VzZXJUYXNrLmlkfWApO1xuXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgaW5zZXJ0KTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjcmVhdGVkXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jYW5jZWwtYnV0dG9uJylcbiAgY29uc3QgYnV0dG9uRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgY29uc3QgcHJpb3JpdHlCdG5zID0gQXJyYXkuZnJvbShidXR0b25Gb3JtQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICBwcmlvcml0eUJ0bnMuZm9yRWFjaChwcmlvcml0eUJ0biA9PiB7XG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IGZhbHNlO1xuICB9KVxuXG4gIGlmICghcG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tYWN0aXZlJylcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChkaW1CZyk7XG4gIH1cblxuICAvLyByZWZhY3RvciB0aGlzLCBzZXBhcmF0ZSB0aGUgY2FuY2VsIGZ1bnRpb25hbGl0eSwgYmVjYXVzZVxuICAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGNyZWF0ZSBhIGZvcm0gVUlcbiAgLy8gaGFuZGxlcyBjYW5jZWwgYnV0dG9uXG4gIGlmIChwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxuICAgICAgaWYgKG1haW5Db250YWluZXIuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6YXV0bztcIik7XG4gIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG4gIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUYXNrKHRhcmdldCkge1xuICBjb25zdCB0aXRsZURlc2NDb250YWluZXIgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlLWlucHV0Jyk7XG4gIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjLWlucHV0Jyk7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuZXdUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgbmV3RGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzYycpO1xuXG5cbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay10aXRsZScpKSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay1kZXNjJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVEZXNjQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlVGl0bGVEZXNjKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VUaXRsZURlc2MoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlSW5wdXQucmVtb3ZlKClcbiAgICAgIGRlc2NJbnB1dC5yZW1vdmUoKVxuICAgIH1cbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JtKHRhcmdldCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIMycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIHRpdGxlJylcbiAgICAgIGNyZWF0ZUVkaXRJbnB1dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZUVkaXREZXNjKCk7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSBkZXNjcmlwdGlvbicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlQXR0ID0ge1xuICAgICAgaWQ6ICdlZGl0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZURlc2NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdERlc2MoKSB7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICAgIGRlc2MudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICB9XG59XG4vLyBvciBjaGFuZ2Ugd2hlbiBldmVudCBpcyBldXFhbCB0byByZW1vdmVcbi8vIGJ1dHRvbiB0YXJnZXQgdGhlbiB0YXJnZXQucmVtb3ZlKClcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKGNvbnRhaW5lciwgdGFyZ2V0KSB7XG4gIGxldCByZW1vdmVCdXR0b25QYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRhc2sgPSByZW1vdmVCdXR0b25QYXJlbnQucGFyZW50Tm9kZTtcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2spXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==