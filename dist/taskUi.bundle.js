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


// creates the body of Today task
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

  tdMainContainer.insertBefore(task, addTaskContainer);
  task.append(titleAndDescContainer, editRmContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
}


//Place holder for when user's first use of the application
createTaskUI('hm', {
  titleInput: 'Title Here',
  descInput: 'Description Here',
  priority: 'PH',
  id: 'PH'
})


// form handler
const popUpForm = document.getElementById('form-container')
const formAddTaskButton = document.getElementById('form-add-button');
const tdUpMainContainer = document.getElementById("td-up-main-task-container");

function createFormUI(mainContainer) {
  body.setAttribute("style", "overflow:hidden;");
  console.log("form created");
  const popUpForm = document.getElementById('form-container')
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
        removeForm(sbMainContainer)
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
tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  if (target.matches('#remove-button')) {
    console.log(target)
    removeTask(target)
  }
  EditTask(target)
})

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
  tdUpMainContainer.removeChild(task)
}

addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});

// creaTaskUi get its data from the getTaskData topic
// and uses those data to create a new task UI only
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQywwQ0FBMEMsRUFBRTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDdEc7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELG1CQUFtQjtBQUMxRSxrQ0FBa0MsWUFBWTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHNiTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ItbWFpbi1jb250YWluZXJcIik7XG5jb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiKTtcbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcbmNvbnN0IHRvZGF5SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItdGV4dFwiKTsgLy9zdHlsZVxuY29uc3QgaGVhZGVyT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItb3B0aW9uLWNvbnRhaW5lclwiKTtcbmNvbnN0IG9wdGlvbnMgPSBoZWFkZXJPcHRpb25Db250YWluZXIuY2hpbGRyZW47XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICBvcHRpb25zW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsIGBvcHRpb24tJHtpfWApO1xuICBvcHRpb25zW2ldLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24taWNvbnNcIik7XG59XG5cbmNvbnN0IHRkTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0ZFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGFkZFRhc2tidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpbUJnLnNldEF0dHJpYnV0ZShcbiAgXCJzdHlsZVwiLFxuICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuKTtcbmRpbUJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGltLWJhY2tncm91bmQtZm9ybScpXG5cblxuLy8gY3JlYXRlcyB0aGUgYm9keSBvZiBUb2RheSB0YXNrXG5mdW5jdGlvbiBjcmVhdGVUZFRhc2tVSSgpIHtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGRNYWluQ29udGFpbmVyKTtcbiAgdGRNYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcbiAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gIGFkZFRhc2tidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gIHRkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgYWRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWNvbnRhaW5lclwiKTtcbiAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrYnV0dG9uKTtcbiAgYWRkVGFza2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbn1cblxuY3JlYXRlVGRUYXNrVUkoKTtcblxuLy8gY3JlYXRlcyB0YXNrIGZyb20gdXNlciBpbnB1dFxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKG1zZywgdXNlclRhc2spIHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBjb25zb2xlLmxvZyh1c2VyVGFzaylcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGl0bGVBbmREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtZGVzYy1jb250YWluZXJcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdXNlclRhc2sudGl0bGVJbnB1dDtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY0lucHV0O1xuXG4gIGxldCBlZGl0Um1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stY29udGFpbmVyXCIpO1xuICBlZGl0Um1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LWNvbnRhaW5lclwiKTtcblxuXG4gIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW1vdmUtYnV0dG9uXCIpO1xuICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0LXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgdGRNYWluQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCBhZGRUYXNrQ29udGFpbmVyKTtcbiAgdGFzay5hcHBlbmQodGl0bGVBbmREZXNjQ29udGFpbmVyLCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5cbi8vUGxhY2UgaG9sZGVyIGZvciB3aGVuIHVzZXIncyBmaXJzdCB1c2Ugb2YgdGhlIGFwcGxpY2F0aW9uXG5jcmVhdGVUYXNrVUkoJ2htJywge1xuICB0aXRsZUlucHV0OiAnVGl0bGUgSGVyZScsXG4gIGRlc2NJbnB1dDogJ0Rlc2NyaXB0aW9uIEhlcmUnLFxuICBwcmlvcml0eTogJ1BIJyxcbiAgaWQ6ICdQSCdcbn0pXG5cblxuLy8gZm9ybSBoYW5kbGVyXG5jb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKVxuY29uc3QgZm9ybUFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1hZGQtYnV0dG9uJyk7XG5jb25zdCB0ZFVwTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjcmVhdGVkXCIpO1xuICBjb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKVxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jYW5jZWwtYnV0dG9uJylcbiAgY29uc3QgYnV0dG9uRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgY29uc3QgcHJpb3JpdHlCdG5zID0gQXJyYXkuZnJvbShidXR0b25Gb3JtQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICBwcmlvcml0eUJ0bnMuZm9yRWFjaChwcmlvcml0eUJ0biA9PiB7XG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IGZhbHNlO1xuICB9KVxuXG4gIGlmICghcG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tYWN0aXZlJylcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChkaW1CZyk7XG4gIH1cblxuICAvLyByZWZhY3RvciB0aGlzLCBzZXBhcmF0ZSB0aGUgY2FuY2VsIGZ1bnRpb25hbGl0eSwgYmVjYXVzZVxuICAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGNyZWF0ZSBhIGZvcm0gVUlcbiAgLy8gaGFuZGxlcyBjYW5jZWwgYnV0dG9uXG4gIGlmIChwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxuICAgICAgaWYgKG1haW5Db250YWluZXIuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgcmVtb3ZlRm9ybShzYk1haW5Db250YWluZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG50ZFVwTWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyNyZW1vdmUtYnV0dG9uJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgcmVtb3ZlVGFzayh0YXJnZXQpXG4gIH1cbiAgRWRpdFRhc2sodGFyZ2V0KVxufSlcblxuZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLWRlc2MnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZURlc2NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VUaXRsZURlc2MoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVRpdGxlRGVzYygpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgICAgZGVzY0lucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgdGl0bGUnKVxuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlRWRpdERlc2MoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIGRlc2NyaXB0aW9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0RGVzYygpIHtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjLWlucHV0Jyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aXRsZURlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXJnZXQpIHtcbiAgbGV0IHJlbW92ZUJ1dHRvblBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGFzayA9IHJlbW92ZUJ1dHRvblBhcmVudC5wYXJlbnROb2RlO1xuICB0ZFVwTWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKVxufVxuXG5hZGRUYXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZUZvcm1VSShzYk1haW5Db250YWluZXIpO1xufSk7XG5cbi8vIGNyZWFUYXNrVWkgZ2V0IGl0cyBkYXRhIGZyb20gdGhlIGdldFRhc2tEYXRhIHRvcGljXG4vLyBhbmQgdXNlcyB0aG9zZSBkYXRhIHRvIGNyZWF0ZSBhIG5ldyB0YXNrIFVJIG9ubHlcblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFRhc2tEYXRhJywgY3JlYXRlVGFza1VJKVxuZm9ybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZUZvcm0oc2JNYWluQ29udGFpbmVyKVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=