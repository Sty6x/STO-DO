"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectUI"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFVJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQyx5REFBeUQsRUFBRTtBQUMzRCxxRUFBcUUsRUFBRTtBQUN2RSw4RUFBOEUsRUFBRTtBQUNoRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVUsUUFBUSxXQUFXLGlCQUFpQixZQUFZLHVCQUF1QjtBQUN0RztBQUNBOzs7QUFHQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLGtDQUFrQyxZQUFZOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0VUkuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUYXNrIGZyb20gJy4vdGFza1VJJ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVSShjb250YWluZXIpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgcHJvalRhc2tDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcHJvakFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai1jb250YWluZXJgKVxuICBwcm9qZWN0VGl0bGVDb250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai10aXRsZS1jb250YWluZXInKVxuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpdGxlJylcbiAgcHJvalRhc2tDb250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvai10YXNrLWNvbnRgKVxuICBwcm9qQWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2otYWRkLXRhc2stYnRuYClcbiAgcHJvakFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQUREIFRBU0snXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGBNeSBGaXJzdCBQcm9qZWN0YFxuICBwcm9qZWN0VGl0bGVDb250LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlQ29udCwgcHJvakFkZFRhc2tCdG4sIHByb2pUYXNrQ29udClcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICBzZXRQcm9qZWN0RWxlbUlEKClcbn1cbi8vIGFkZCBhbiBldmVudGxpc3RlbmVyIG9uIHRoZSBhZGQgdGFza2J1dHRvbiBjb250YWluZXJcbmZ1bmN0aW9uIHNldFByb2plY3RFbGVtSUQoKSB7XG4gIGNvbnN0IHByb2plY3RVSUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1jb250YWluZXInKVxuICBjb25zdCBwcm9qZWN0VGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai10YXNrLWNvbnQnKVxuICBjb25zdCBwcm9qZWN0QWRkVGFza0J0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1hZGQtdGFzay1idG4nKVxuICBjb25zdCBwcm9qZWN0VUlMaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0VUlMaXN0KVxuICBjb25zdCBwcm9qZWN0VGFza0xpc3RBcnIgPSBBcnJheS5mcm9tKHByb2plY3RUYXNrTGlzdClcbiAgY29uc3QgcHJvamVjdEFkZFRhc2tCdG5MaXN0QXJyID0gQXJyYXkuZnJvbShwcm9qZWN0QWRkVGFza0J0bkxpc3QpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFVJTGlzdEFyci5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RVSUxpc3RBcnJbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LUlELSR7aX1gKVxuICAgIHByb2plY3RUYXNrTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtdGFzay1jb250LUlELSR7aX1gKVxuICAgIHByb2plY3RBZGRUYXNrQnRuTGlzdEFycltpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtYWRkLXRhc2stYnRuLUlELSR7aX1gKVxuICB9XG59XG4iLCJjb25zb2xlLmxvZygndGFza1VJIGluaXRpYWxpemVkJylcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuY29uc3QgZGltQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGltQmcuc2V0QXR0cmlidXRlKFxuICBcInN0eWxlXCIsXG4gIFwicG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjAlO2xlZnQ6MCU7ei1pbmRleDo5OTttaW4taGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouNVwiXG4pO1xuZGltQmcuc2V0QXR0cmlidXRlKCdpZCcsICdkaW0tYmFja2dyb3VuZC1mb3JtJylcblxuXG5jb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKVxuLy8gY3JlYXRlcyB0YXNrIGZyb20gdXNlciBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tVSShjb250YWluZXIsIHVzZXJUYXNrLCBpbnNlcnQpIHtcbiAgLy8gY29uc29sZS5sb2cobXNnKVxuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW1vdmUtYnV0dG9uXCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCBpbnNlcnQpO1xuICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsIGVkaXRSbUNvbnRhaW5lcik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtVUkobWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6aGlkZGVuO1wiKTtcbiAgY29uc29sZS5sb2coXCJmb3JtIGNyZWF0ZWRcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNhbmNlbC1idXR0b24nKVxuICBjb25zdCBidXR0b25Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHktYnV0dG9ucycpO1xuICBjb25zdCBwcmlvcml0eUJ0bnMgPSBBcnJheS5mcm9tKGJ1dHRvbkZvcm1Db250YWluZXIuY2hpbGRyZW4pO1xuXG4gIHByaW9yaXR5QnRucy5mb3JFYWNoKHByaW9yaXR5QnRuID0+IHtcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gZmFsc2U7XG4gIH0pXG5cbiAgaWYgKCFwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1hY3RpdmUnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpbUJnKTtcbiAgfVxuXG4gIC8vIHJlZmFjdG9yIHRoaXMsIHNlcGFyYXRlIHRoZSBjYW5jZWwgZnVudGlvbmFsaXR5LCBiZWNhdXNlXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2hvdWxkIG9ubHkgY3JlYXRlIGEgZm9ybSBVSVxuICAvLyBoYW5kbGVzIGNhbmNlbCBidXR0b25cbiAgaWYgKHBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICAgICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG4gICAgICBpZiAobWFpbkNvbnRhaW5lci5jaGlsZHJlblswXSkge1xuICAgICAgICByZW1vdmVGb3JtKG1haW5Db250YWluZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzphdXRvO1wiKTtcbiAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChkaW1CZylcbiAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLWRlc2MnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZURlc2NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VUaXRsZURlc2MoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVRpdGxlRGVzYygpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgICAgZGVzY0lucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgdGl0bGUnKVxuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlRWRpdERlc2MoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIGRlc2NyaXB0aW9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0RGVzYygpIHtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjLWlucHV0Jyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aXRsZURlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIH1cbn1cbi8vIG9yIGNoYW5nZSB3aGVuIGV2ZW50IGlzIGV1cWFsIHRvIHJlbW92ZVxuLy8gYnV0dG9uIHRhcmdldCB0aGVuIHRhcmdldC5yZW1vdmUoKVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2soY29udGFpbmVyLCB0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGFzaylcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9