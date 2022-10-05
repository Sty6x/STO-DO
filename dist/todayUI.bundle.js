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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlVSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDdEc7QUFDQTs7O0FBR0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELG1CQUFtQjtBQUMxRSxrQ0FBa0MsWUFBWTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1QztBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEt3Qzs7QUFFeEM7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLGdCQUFnQixvQkFBb0I7QUFDcEMsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0RBQW1CO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHNEQUFpQjtBQUNuQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHdEQUFtQjtBQUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHNEQUFpQjtBQUNuQixFQUFFLG9EQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIiwid2VicGFjazovL3N0by1kby8uL3NyYy90b2RheVVJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd0YXNrVUkgaW5pdGlhbGl6ZWQnKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5jb25zdCBkaW1CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoXG4gIFwic3R5bGVcIixcbiAgXCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MCU7bGVmdDowJTt6LWluZGV4Ojk5O21pbi1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi41XCJcbik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpbS1iYWNrZ3JvdW5kLWZvcm0nKVxuXG5cbmNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXG4vLyBjcmVhdGVzIHRhc2sgZnJvbSB1c2VyIGlucHV0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1VJKGNvbnRhaW5lciwgdXNlclRhc2spIHtcbiAgLy8gY29uc29sZS5sb2cobXNnKVxuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW1vdmUtYnV0dG9uXCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsIGVkaXRSbUNvbnRhaW5lcik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtVUkobWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6aGlkZGVuO1wiKTtcbiAgY29uc29sZS5sb2coXCJmb3JtIGNyZWF0ZWRcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNhbmNlbC1idXR0b24nKVxuICBjb25zdCBidXR0b25Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHktYnV0dG9ucycpO1xuICBjb25zdCBwcmlvcml0eUJ0bnMgPSBBcnJheS5mcm9tKGJ1dHRvbkZvcm1Db250YWluZXIuY2hpbGRyZW4pO1xuXG4gIHByaW9yaXR5QnRucy5mb3JFYWNoKHByaW9yaXR5QnRuID0+IHtcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gZmFsc2U7XG4gIH0pXG5cbiAgaWYgKCFwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1hY3RpdmUnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpbUJnKTtcbiAgfVxuXG4gIC8vIHJlZmFjdG9yIHRoaXMsIHNlcGFyYXRlIHRoZSBjYW5jZWwgZnVudGlvbmFsaXR5LCBiZWNhdXNlXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2hvdWxkIG9ubHkgY3JlYXRlIGEgZm9ybSBVSVxuICAvLyBoYW5kbGVzIGNhbmNlbCBidXR0b25cbiAgaWYgKHBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICAgICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG4gICAgICBpZiAobWFpbkNvbnRhaW5lci5jaGlsZHJlblswXSkge1xuICAgICAgICByZW1vdmVGb3JtKG1haW5Db250YWluZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzphdXRvO1wiKTtcbiAgdHJ5IHtcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2RpbSBiZyByZW1vdmVkICcpXG4gIH1cbiAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1pbmFjdGl2ZScpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLWRlc2MnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZURlc2NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VUaXRsZURlc2MoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVRpdGxlRGVzYygpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgICAgZGVzY0lucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgdGl0bGUnKVxuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlRWRpdERlc2MoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIGRlc2NyaXB0aW9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0RGVzYygpIHtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjLWlucHV0Jyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aXRsZURlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIH1cbn1cbi8vIG9yIGNoYW5nZSB3aGVuIGV2ZW50IGlzIGV1cWFsIHRvIHJlbW92ZVxuLy8gYnV0dG9uIHRhcmdldCB0aGVuIHRhcmdldC5yZW1vdmUoKVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFyZ2V0KSB7XG4gIGxldCByZW1vdmVCdXR0b25QYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRhc2sgPSByZW1vdmVCdXR0b25QYXJlbnQucGFyZW50Tm9kZTtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjcmVtb3ZlLWJ1dHRvbicpKSB7XG4gICAgdGFzay5yZW1vdmUoKVxuICB9XG59XG5cbiIsImltcG9ydCAqIGFzIFRhc2tVSSBmcm9tICcvc3JjL3Rhc2tVSS5qcydcblxuY29uc3Qgc2JNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYi1tYWluLWNvbnRhaW5lclwiKTtcbmNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBoZWFkZXJPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1vcHRpb24tY29udGFpbmVyXCIpO1xuY29uc3Qgb3B0aW9ucyA9IGhlYWRlck9wdGlvbkNvbnRhaW5lci5jaGlsZHJlbjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gIG9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYG9wdGlvbi0ke2l9YCk7XG4gIG9wdGlvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1pY29uc1wiKTtcbn1cblxuY29uc3QgdGRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGFkZFRhc2tidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vLyBjcmVhdGVzIHRoZSBib2R5IG9mIFRvZGF5IHRhc2tcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZFRhc2tVSShkaXNwbGF5KSB7XG4gIHRkTWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRkLXVwLW1haW4tdGFzay1jb250YWluZXJcIik7XG4gIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUT0RBWVwiO1xuICBhZGRUYXNrYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICB0ZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1jb250YWluZXJcIik7XG4gIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza2J1dHRvbik7XG4gIGFkZFRhc2tidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIHRkTWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7ZGlzcGxheX1gKVxufVxubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGRNYWluQ29udGFpbmVyKTtcbmNyZWF0ZVRkVGFza1VJKCdkaXNwbGF5OmZsZXg7JylcblxuY29uc3QgZm9ybUFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1hZGQtYnV0dG9uJyk7XG5jb25zdCB0ZFVwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcblxuYWRkVGFza2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBUYXNrVUkuY3JlYXRlRm9ybVVJKHNiTWFpbkNvbnRhaW5lcik7XG59KTtcblxuZm9ybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFRhc2tVSS5yZW1vdmVGb3JtKHNiTWFpbkNvbnRhaW5lcilcbn0pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKCdnZXRUYXNrRGF0YScsIChtc2csIHVzZXJ0YXNrKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1zZylcbiAgVGFza1VJLmNyZWF0ZVRhc2tVSSh0ZFVwTWFpbkNvbnRhaW5lciwgdXNlcnRhc2spXG59KVxuXG50ZFVwTWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICBUYXNrVUkucmVtb3ZlVGFzayh0YXJnZXQpXG4gIFRhc2tVSS5FZGl0VGFzayh0YXJnZXQpXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9