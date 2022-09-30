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

// createTdTaskUI();
const formAddTaskButton = document.getElementById('form-add-button');
const tdUpMainContainer = document.getElementById("td-up-main-task-container");

addTaskbutton.addEventListener("click", () => {
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.createFormUI(sbMainContainer);
});

formAddTaskButton.addEventListener('click', () => {
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.removeForm(sbMainContainer)
});

PubSub.subscribe('getTaskData', (msg, userTask) => {
  console.log(msg)
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.createTaskUI(tdUpMainContainer, userTask, addTaskContainer)
})


tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  if (target.matches('#remove-button')) {
    console.log(target)
    _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.removeTask(tdUpMainContainer, target)
  }
  _src_taskUI_js__WEBPACK_IMPORTED_MODULE_0__.EditTask(target)
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todayUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlVSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDdEc7QUFDQTs7O0FBR0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELG1CQUFtQjtBQUMxRSxrQ0FBa0MsWUFBWTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0p3Qzs7QUFFeEM7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLGdCQUFnQixvQkFBb0I7QUFDcEMsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHdEQUFtQjtBQUNyQixDQUFDOztBQUVEO0FBQ0EsRUFBRSxzREFBaUI7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSx3REFBbUI7QUFDckIsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFpQjtBQUNyQjtBQUNBLEVBQUUsb0RBQWU7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy90YXNrVUkuanMiLCJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3RvZGF5VUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3Rhc2tVSSBpbml0aWFsaXplZCcpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpbUJnLnNldEF0dHJpYnV0ZShcbiAgXCJzdHlsZVwiLFxuICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuKTtcbmRpbUJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGltLWJhY2tncm91bmQtZm9ybScpXG5cblxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaywgaW5zZXJ0KSB7XG4gIC8vIGNvbnNvbGUubG9nKG1zZylcbiAgY29uc29sZS5sb2codXNlclRhc2spXG4gIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG5cbiAgbGV0IHRpdGxlQW5kRGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlLWRlc2MtY29udGFpbmVyXCIpO1xuXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJUYXNrLnRpdGxlSW5wdXQ7XG5cbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXNjXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHVzZXJUYXNrLmRlc2NJbnB1dDtcblxuICBsZXQgZWRpdFJtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLWNvbnRhaW5lclwiKTtcbiAgZWRpdFJtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC1jb250YWluZXJcIik7XG5cblxuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlLWJ1dHRvblwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC10YXNrLWJ1dHRvbnNcIik7XG5cbiAgZWRpdFJtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBib3JkZXItbGVmdDpzb2xpZCAxMHB4ICR7dXNlclRhc2sucHJpb3JpdHl9O2ApO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3VzZXJUYXNrLmlkfWApO1xuXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgaW5zZXJ0KTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjcmVhdGVkXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jYW5jZWwtYnV0dG9uJylcbiAgY29uc3QgYnV0dG9uRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgY29uc3QgcHJpb3JpdHlCdG5zID0gQXJyYXkuZnJvbShidXR0b25Gb3JtQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICBwcmlvcml0eUJ0bnMuZm9yRWFjaChwcmlvcml0eUJ0biA9PiB7XG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IGZhbHNlO1xuICB9KVxuXG4gIGlmICghcG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tYWN0aXZlJylcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChkaW1CZyk7XG4gIH1cblxuICAvLyByZWZhY3RvciB0aGlzLCBzZXBhcmF0ZSB0aGUgY2FuY2VsIGZ1bnRpb25hbGl0eSwgYmVjYXVzZVxuICAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGNyZWF0ZSBhIGZvcm0gVUlcbiAgLy8gaGFuZGxlcyBjYW5jZWwgYnV0dG9uXG4gIGlmIChwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxuICAgICAgaWYgKG1haW5Db250YWluZXIuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6YXV0bztcIik7XG4gIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG4gIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUYXNrKHRhcmdldCkge1xuICBjb25zdCB0aXRsZURlc2NDb250YWluZXIgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlLWlucHV0Jyk7XG4gIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjLWlucHV0Jyk7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuZXdUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgbmV3RGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzYycpO1xuXG5cbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay10aXRsZScpKSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay1kZXNjJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVEZXNjQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlVGl0bGVEZXNjKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VUaXRsZURlc2MoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlSW5wdXQucmVtb3ZlKClcbiAgICAgIGRlc2NJbnB1dC5yZW1vdmUoKVxuICAgIH1cbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JtKHRhcmdldCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIMycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIHRpdGxlJylcbiAgICAgIGNyZWF0ZUVkaXRJbnB1dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZUVkaXREZXNjKCk7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSBkZXNjcmlwdGlvbicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlQXR0ID0ge1xuICAgICAgaWQ6ICdlZGl0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZURlc2NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdERlc2MoKSB7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICAgIGRlc2MudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICB9XG59XG4vLyBvciBjaGFuZ2Ugd2hlbiBldmVudCBpcyBldXFhbCB0byByZW1vdmVcbi8vIGJ1dHRvbiB0YXJnZXQgdGhlbiB0YXJnZXQucmVtb3ZlKClcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKGNvbnRhaW5lciwgdGFyZ2V0KSB7XG4gIGxldCByZW1vdmVCdXR0b25QYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRhc2sgPSByZW1vdmVCdXR0b25QYXJlbnQucGFyZW50Tm9kZTtcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2spXG59XG5cbiIsImltcG9ydCAqIGFzIFRhc2tVSSBmcm9tICcvc3JjL3Rhc2tVSS5qcydcblxuY29uc3Qgc2JNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYi1tYWluLWNvbnRhaW5lclwiKTtcbmNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBoZWFkZXJPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1vcHRpb24tY29udGFpbmVyXCIpO1xuY29uc3Qgb3B0aW9ucyA9IGhlYWRlck9wdGlvbkNvbnRhaW5lci5jaGlsZHJlbjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gIG9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYG9wdGlvbi0ke2l9YCk7XG4gIG9wdGlvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1pY29uc1wiKTtcbn1cblxuY29uc3QgdGRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGFkZFRhc2tidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vLyBjcmVhdGVzIHRoZSBib2R5IG9mIFRvZGF5IHRhc2tcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZFRhc2tVSSgpIHtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGRNYWluQ29udGFpbmVyKTtcbiAgdGRNYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcbiAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gIGFkZFRhc2tidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gIHRkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgYWRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWNvbnRhaW5lclwiKTtcbiAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrYnV0dG9uKTtcbiAgYWRkVGFza2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbn1cblxuLy8gY3JlYXRlVGRUYXNrVUkoKTtcbmNvbnN0IGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWJ1dHRvbicpO1xuY29uc3QgdGRVcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkLXVwLW1haW4tdGFzay1jb250YWluZXJcIik7XG5cbmFkZFRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgVGFza1VJLmNyZWF0ZUZvcm1VSShzYk1haW5Db250YWluZXIpO1xufSk7XG5cbmZvcm1BZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBUYXNrVUkucmVtb3ZlRm9ybShzYk1haW5Db250YWluZXIpXG59KTtcblxuUHViU3ViLnN1YnNjcmliZSgnZ2V0VGFza0RhdGEnLCAobXNnLCB1c2VyVGFzaykgPT4ge1xuICBjb25zb2xlLmxvZyhtc2cpXG4gIFRhc2tVSS5jcmVhdGVUYXNrVUkodGRVcE1haW5Db250YWluZXIsIHVzZXJUYXNrLCBhZGRUYXNrQ29udGFpbmVyKVxufSlcblxuXG50ZFVwTWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgVGFza1VJLnJlbW92ZVRhc2sodGRVcE1haW5Db250YWluZXIsIHRhcmdldClcbiAgfVxuICBUYXNrVUkuRWRpdFRhc2sodGFyZ2V0KVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==