(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["taskUi"],{

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ (() => {

const body = document.querySelector("body");
const sbMainContainer = document.getElementById("sb-main-container");
const mainContentContainer = document.getElementById("main-content-container");
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
    cancelButton.addEventListener('click', () => {
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

function removeTask(target) {
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  tdUpMainContainer.removeChild(task)
}

// invokes when task-title or task-desc is pressed and sets display to none on title and desc


addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});


PubSub.subscribe('getTaskData', createTaskUI)
formAddTaskButton.addEventListener('click', () => {
  removeForm(sbMainContainer)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQywwQ0FBMEMsRUFBRTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDdEc7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLGtDQUFrQyxZQUFZOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBzYk1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiLW1haW4tY29udGFpbmVyXCIpO1xuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudC1jb250YWluZXJcIik7XG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1jb250YWluZXJcIik7XG5jb25zdCB0b2RheUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXRleHRcIik7IC8vc3R5bGVcbmNvbnN0IGhlYWRlck9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLW9wdGlvbi1jb250YWluZXJcIik7XG5jb25zdCBvcHRpb25zID0gaGVhZGVyT3B0aW9uQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgb3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgb3B0aW9uLSR7aX1gKTtcbiAgb3B0aW9uc1tpXS5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWljb25zXCIpO1xufVxuXG5jb25zdCB0ZE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdGRUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBkaW1CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoXG4gIFwic3R5bGVcIixcbiAgXCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MCU7bGVmdDowJTt6LWluZGV4Ojk5O21pbi1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi41XCJcbik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpbS1iYWNrZ3JvdW5kLWZvcm0nKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRkVGFza1VJKCkge1xuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZE1haW5Db250YWluZXIpO1xuICB0ZE1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZC11cC1tYWluLXRhc2stY29udGFpbmVyXCIpO1xuICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9IFwiVE9EQVlcIjtcbiAgYWRkVGFza2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgdGRNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICBhZGRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tidXR0b24pO1xuICBhZGRUYXNrYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xufVxuY3JlYXRlVGRUYXNrVUkoKTtcblxuLy8gY3JlYXRlcyB0YXNrIGZyb20gdXNlciBpbnB1dFxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKG1zZywgdXNlclRhc2spIHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDsgLy8gRnJvbSB0YXNrIGRhdGFcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0OyAvLyBGcm9tIHRhc2sgZGF0YVxuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtdGFzay1idXR0b25zXCIpO1xuICAvLyBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcblxuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlLWJ1dHRvblwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdC10YXNrLWJ1dHRvbnNcIik7XG4gIC8vIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlIFRhc2tcIjtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kKGVkaXRCdXR0b24sIHJlbW92ZUJ1dHRvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBib3JkZXItbGVmdDpzb2xpZCAxMHB4ICR7dXNlclRhc2sucHJpb3JpdHl9O2ApO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3VzZXJUYXNrLmlkfWApO1xuXG4gIHRkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5jcmVhdGVUYXNrVUkoJ2htJywge1xuICB0aXRsZUlucHV0OiAnVGl0bGUgSGVyZScsXG4gIGRlc2NJbnB1dDogJ0Rlc2NyaXB0aW9uIEhlcmUnLFxuICBwcmlvcml0eTogJ1BIJyxcbiAgaWQ6ICdQSCdcbn0pXG5cblxuZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjcmVhdGVkXCIpO1xuICBjb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKVxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jYW5jZWwtYnV0dG9uJylcbiAgaWYgKCFwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1hY3RpdmUnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpbUJnKTtcbiAgfVxuXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0oc2JNYWluQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5cbi8vIGZvcm0gaGFuZGxlclxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbmNvbnN0IGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWJ1dHRvbicpO1xuXG5mdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG5cbmNvbnN0IHRkVXBNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZC11cC1tYWluLXRhc2stY29udGFpbmVyXCIpO1xudGRVcE1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgcmVtb3ZlVGFzayh0YXJnZXQpXG4gIH1cbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay10aXRsZScpIHx8IHRhcmdldC5tYXRjaGVzKCcjdGFzay1kZXNjJykpIHtcbiAgICBlZGl0Rm9ybSgpLmNyZWF0ZUVkaXRmb3JtKHRhcmdldClcbiAgfVxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0ZC11cC1tYWluLXRhc2stY29udGFpbmVyJykpIHtcbiAgICBlZGl0Rm9ybSgpLmNoYW5nZVRpdGxlRGVzYygpXG4gICAgZWRpdEZvcm0oKS5yZW1vdmVFZGl0Rm9ybSgpXG4gIH1cbiAgY29uc29sZS5sb2codGFyZ2V0KVxufSlcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICB0ZFVwTWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKVxufVxuXG4vLyBpbnZva2VzIHdoZW4gdGFzay10aXRsZSBvciB0YXNrLWRlc2MgaXMgcHJlc3NlZCBhbmQgc2V0cyBkaXNwbGF5IHRvIG5vbmUgb24gdGl0bGUgYW5kIGRlc2NcblxuXG5hZGRUYXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZUZvcm1VSShzYk1haW5Db250YWluZXIpO1xufSk7XG5cblxuUHViU3ViLnN1YnNjcmliZSgnZ2V0VGFza0RhdGEnLCBjcmVhdGVUYXNrVUkpXG5mb3JtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlRm9ybShzYk1haW5Db250YWluZXIpXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==