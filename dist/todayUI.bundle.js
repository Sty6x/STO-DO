"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["todayUI"],{

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



/***/ }),

/***/ "./src/todayUI.js":
/*!************************!*\
  !*** ./src/todayUI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTdTaskUI": () => (/* binding */ createTdTaskUI)
/* harmony export */ });
/* harmony import */ var _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/taskUI.js */ "./src/taskUI.js");


const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");
const todayHeader = document.getElementById("header-text"); //style
const headerOptionContainer = document.getElementById("header-option-container");
const options = headerOptionContainer.children;

for (let i = 0; i < options.length; i++) {
  options[i].setAttribute("id", `option-${i}`);
  options[i].classList.add("option-icons");
}

const tdMainContainer = document.createElement("div");
const addTaskbutton = document.createElement("button");
const addTaskContainer = document.createElement("div");

/// creates the body of Today task
function createTdTaskUI(display) {
  tdMainContainer.setAttribute("id", "td-up-main-task-container");
  todayHeader.textContent = "TODAY";
  addTaskbutton.setAttribute("id", "add-task-button");
  tdMainContainer.appendChild(addTaskContainer);
  addTaskContainer.setAttribute("id", "add-task-container");
  addTaskContainer.appendChild(addTaskbutton);
  addTaskbutton.textContent = "Add Task";
  tdMainContainer.setAttribute('style', `${display}`)
}
mainContentContainer.appendChild(tdMainContainer);
createTdTaskUI('display:flex;')

const formAddTaskButton = document.getElementById('form-add-button');
const tdUpMainContainer = document.getElementById("td-up-main-task-container");

addTaskbutton.addEventListener("click", () => {
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.createFormUI(sbMainContainer);
});

formAddTaskButton.addEventListener('click', () => {
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.removeForm(sbMainContainer)
});

PubSub.subscribe('getTaskData', (msg, usertask) => {
  console.log(msg)
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.createTaskUI(tdUpMainContainer, usertask)
})

tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.removeTask(target)
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.EditTask(target)
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todayUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlVSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDdEc7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osZ0RBQWdELGtCQUFrQjtBQUNsRTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLGtDQUFrQyxZQUFZOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S3dDOztBQUV4QztBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQywwQ0FBMEMsRUFBRTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0EsRUFBRSx3REFBbUI7QUFDckIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsc0RBQWlCO0FBQ25CLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsd0RBQW1CO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsc0RBQWlCO0FBQ25CLEVBQUUsb0RBQWU7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy90YXNrVUkuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3RvZGF5VUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgZGltQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGltQmcuc2V0QXR0cmlidXRlKFxuICBcInN0eWxlXCIsXG4gIFwicG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjAlO2xlZnQ6MCU7ei1pbmRleDo5OTttaW4taGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouNVwiXG4pO1xuZGltQmcuc2V0QXR0cmlidXRlKCdpZCcsICdkaW0tYmFja2dyb3VuZC1mb3JtJylcbmNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaykge1xuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCBkdWVEYXRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlQ29udC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZS1kYXRlLWNvbnRhaW5lcicpXG4gIGxldCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWUtZGF0ZS10ZXh0JylcblxuICBpZiAodXNlclRhc2suZHVlRGF0ZSA9PSAwKSB7XG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBgVGFzayBpcyBkdWUgdG9kYXlgO1xuICB9IGVsc2UgaWYgKHVzZXJUYXNrLmR1ZURhdGUgPT0gMSkge1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYFRhc2sgaXMgZHVlIHRvbW9ycm93YDtcbiAgfSBlbHNlIHtcbiAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IGBUYXNrIGlzIGR1ZSBpbiAke3VzZXJUYXNrLmR1ZURhdGV9IGRheXNgO1xuICB9XG4gIGR1ZURhdGVDb250LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KVxuXG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbW92ZS1idXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZS10YXNrLWJ1dHRvbnNcIik7XG5cbiAgZWRpdFJtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBib3JkZXItbGVmdDpzb2xpZCAxMHB4ICR7dXNlclRhc2sucHJpb3JpdHl9O2ApO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3VzZXJUYXNrLmlkfWApO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBkdWVEYXRlQ29udCwgZWRpdFJtQ29udGFpbmVyKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzpoaWRkZW47XCIpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gY3JlYXRlZFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY2FuY2VsLWJ1dHRvbicpXG4gIGNvbnN0IGJ1dHRvbkZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eS1idXR0b25zJyk7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IEFycmF5LmZyb20oYnV0dG9uRm9ybUNvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgcHJpb3JpdHlCdG5zLmZvckVhY2gocHJpb3JpdHlCdG4gPT4ge1xuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSlcblxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG5cbiAgLy8gcmVmYWN0b3IgdGhpcywgc2VwYXJhdGUgdGhlIGNhbmNlbCBmdW50aW9uYWxpdHksIGJlY2F1c2VcbiAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBjcmVhdGUgYSBmb3JtIFVJXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICB0cnkge1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZGltIGJnIHJlbW92ZWQgJylcbiAgfVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0VGFzayh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVEZXNjQ29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gIG5ld0Rlc2Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2MnKTtcblxuXG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stdGl0bGUnKSkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stZGVzYycpKSB7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfVxuXG4gIHRpdGxlRGVzY0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmVwbGFjZVRpdGxlRGVzYygpXG4gICAgfVxuICB9KVxuICBmdW5jdGlvbiByZXBsYWNlVGl0bGVEZXNjKCkge1xuICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY0lucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgICBkZXNjSW5wdXQucmVtb3ZlKClcbiAgICB9XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSB0aXRsZScpXG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVFZGl0RGVzYygpO1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgZGVzY3JpcHRpb24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC10aXRsZS1pbnB1dCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGl0bGVBdHQpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShrZXksIHRpdGxlQXR0W2tleV0pO1xuICAgIH07XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZSwgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXREZXNjKCkge1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgICBkZXNjLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICB0YXNrLnJlbW92ZSgpXG4gIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgVGFza1VJIGZyb20gJy9zcmMvdGFza1VJLmpzJ1xuXG5jb25zdCBzYk1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiLW1haW4tY29udGFpbmVyXCIpO1xuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudC1jb250YWluZXJcIik7XG5jb25zdCB0b2RheUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXRleHRcIik7IC8vc3R5bGVcbmNvbnN0IGhlYWRlck9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLW9wdGlvbi1jb250YWluZXJcIik7XG5jb25zdCBvcHRpb25zID0gaGVhZGVyT3B0aW9uQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgb3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgb3B0aW9uLSR7aX1gKTtcbiAgb3B0aW9uc1tpXS5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWljb25zXCIpO1xufVxuXG5jb25zdCB0ZE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8vIGNyZWF0ZXMgdGhlIGJvZHkgb2YgVG9kYXkgdGFza1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRkVGFza1VJKGRpc3BsYXkpIHtcbiAgdGRNYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcbiAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gIGFkZFRhc2tidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gIHRkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgYWRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWNvbnRhaW5lclwiKTtcbiAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrYnV0dG9uKTtcbiAgYWRkVGFza2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgdGRNYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgJHtkaXNwbGF5fWApXG59XG5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZE1haW5Db250YWluZXIpO1xuY3JlYXRlVGRUYXNrVUkoJ2Rpc3BsYXk6ZmxleDsnKVxuXG5jb25zdCBmb3JtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFkZC1idXR0b24nKTtcbmNvbnN0IHRkVXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZC11cC1tYWluLXRhc2stY29udGFpbmVyXCIpO1xuXG5hZGRUYXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFRhc2tVSS5jcmVhdGVGb3JtVUkoc2JNYWluQ29udGFpbmVyKTtcbn0pO1xuXG5mb3JtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgVGFza1VJLnJlbW92ZUZvcm0oc2JNYWluQ29udGFpbmVyKVxufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFRhc2tEYXRhJywgKG1zZywgdXNlcnRhc2spID0+IHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBUYXNrVUkuY3JlYXRlVGFza1VJKHRkVXBNYWluQ29udGFpbmVyLCB1c2VydGFzaylcbn0pXG5cbnRkVXBNYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gIFRhc2tVSS5yZW1vdmVUYXNrKHRhcmdldClcbiAgVGFza1VJLkVkaXRUYXNrKHRhcmdldClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=