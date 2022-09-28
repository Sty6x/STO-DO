(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["todayUI"],{

/***/ "./src/todayUI.js":
/*!************************!*\
  !*** ./src/todayUI.js ***!
  \************************/
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


//Place holder for when user's first use of the application
// createTaskUI('hm', {
//   titleInput: 'Title Here',
//   descInput: 'Description Here',
//   priority: 'PH',
//   id: 'PH'
// })


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
tdUpMainContainer.addEventListener('click', e => {
  const target = e.target
  if (target.matches('#remove-button')) {
    console.log(target)
    removeTask(tdUpMainContainer, target)
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
// or change when event is euqal to remove
// button target then target.remove()
function removeTask(container, target) {
  let removeButtonParent = target.parentNode;
  let task = removeButtonParent.parentNode;
  container.removeChild(task)
}

addTaskbutton.addEventListener("click", () => {
  createFormUI(sbMainContainer);
});

// creaTaskUi get its data from the getTaskData topic
// and uses those data to create a new task UI only
PubSub.subscribe('getTaskData', (msg, userTask) => {
  console.log(msg)
  createTaskUI(tdUpMainContainer, userTask)
})

formAddTaskButton.addEventListener('click', () => {
  removeForm(sbMainContainer)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todayUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlVSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLGdCQUFnQixvQkFBb0I7QUFDcEMsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVSxRQUFRLFdBQVcsaUJBQWlCLFlBQVksdUJBQXVCO0FBQ3RHO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxtQkFBbUI7QUFDMUUsa0NBQWtDLFlBQVk7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3RvZGF5VUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgc2JNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYi1tYWluLWNvbnRhaW5lclwiKTtcbmNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBoZWFkZXJPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1vcHRpb24tY29udGFpbmVyXCIpO1xuY29uc3Qgb3B0aW9ucyA9IGhlYWRlck9wdGlvbkNvbnRhaW5lci5jaGlsZHJlbjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gIG9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYG9wdGlvbi0ke2l9YCk7XG4gIG9wdGlvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1pY29uc1wiKTtcbn1cblxuY29uc3QgdGRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRkVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgZGltQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGltQmcuc2V0QXR0cmlidXRlKFxuICBcInN0eWxlXCIsXG4gIFwicG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjAlO2xlZnQ6MCU7ei1pbmRleDo5OTttaW4taGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouNVwiXG4pO1xuZGltQmcuc2V0QXR0cmlidXRlKCdpZCcsICdkaW0tYmFja2dyb3VuZC1mb3JtJylcblxuXG4vLyBjcmVhdGVzIHRoZSBib2R5IG9mIFRvZGF5IHRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRkVGFza1VJKCkge1xuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZE1haW5Db250YWluZXIpO1xuICB0ZE1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZC11cC1tYWluLXRhc2stY29udGFpbmVyXCIpO1xuICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9IFwiVE9EQVlcIjtcbiAgYWRkVGFza2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgdGRNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICBhZGRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tidXR0b24pO1xuICBhZGRUYXNrYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xufVxuXG5jcmVhdGVUZFRhc2tVSSgpO1xuXG4vLyBjcmVhdGVzIHRhc2sgZnJvbSB1c2VyIGlucHV0XG5mdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaykge1xuICAvLyBjb25zb2xlLmxvZyhtc2cpXG4gIGNvbnNvbGUubG9nKHVzZXJUYXNrKVxuICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gIGxldCB0aXRsZUFuZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1kZXNjLWNvbnRhaW5lclwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB1c2VyVGFzay50aXRsZUlucHV0O1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY1wiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB1c2VyVGFzay5kZXNjSW5wdXQ7XG5cbiAgbGV0IGVkaXRSbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1jb250YWluZXJcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtY29udGFpbmVyXCIpO1xuXG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbW92ZS1idXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtdGFzay1idXR0b25zXCIpO1xuXG4gIGVkaXRSbUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYm9yZGVyLWxlZnQ6c29saWQgMTBweCAke3VzZXJUYXNrLnByaW9yaXR5fTtgKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2stJHt1c2VyVGFzay5pZH1gKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gIHRhc2suYXBwZW5kKHRpdGxlQW5kRGVzY0NvbnRhaW5lciwgZWRpdFJtQ29udGFpbmVyKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbn1cblxuXG4vL1BsYWNlIGhvbGRlciBmb3Igd2hlbiB1c2VyJ3MgZmlyc3QgdXNlIG9mIHRoZSBhcHBsaWNhdGlvblxuLy8gY3JlYXRlVGFza1VJKCdobScsIHtcbi8vICAgdGl0bGVJbnB1dDogJ1RpdGxlIEhlcmUnLFxuLy8gICBkZXNjSW5wdXQ6ICdEZXNjcmlwdGlvbiBIZXJlJyxcbi8vICAgcHJpb3JpdHk6ICdQSCcsXG4vLyAgIGlkOiAnUEgnXG4vLyB9KVxuXG5cbi8vIGZvcm0gaGFuZGxlclxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbmNvbnN0IGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLWJ1dHRvbicpO1xuY29uc3QgdGRVcE1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkLXVwLW1haW4tdGFzay1jb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzpoaWRkZW47XCIpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gY3JlYXRlZFwiKTtcbiAgY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY2FuY2VsLWJ1dHRvbicpXG4gIGNvbnN0IGJ1dHRvbkZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eS1idXR0b25zJyk7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IEFycmF5LmZyb20oYnV0dG9uRm9ybUNvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgcHJpb3JpdHlCdG5zLmZvckVhY2gocHJpb3JpdHlCdG4gPT4ge1xuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSlcblxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG5cbiAgLy8gcmVmYWN0b3IgdGhpcywgc2VwYXJhdGUgdGhlIGNhbmNlbCBmdW50aW9uYWxpdHksIGJlY2F1c2VcbiAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBjcmVhdGUgYSBmb3JtIFVJXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6YXV0bztcIik7XG4gIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG4gIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxufTtcbnRkVXBNYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3JlbW92ZS1idXR0b24nKSkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICByZW1vdmVUYXNrKHRkVXBNYWluQ29udGFpbmVyLCB0YXJnZXQpXG4gIH1cbiAgRWRpdFRhc2sodGFyZ2V0KVxufSlcblxuZnVuY3Rpb24gRWRpdFRhc2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRpdGxlRGVzY0NvbnRhaW5lciA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbGV0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICBuZXdEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjJyk7XG5cblxuICBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLXRpdGxlJykpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJyN0YXNrLWRlc2MnKSkge1xuICAgIGFwcGx5Rm9ybSh0YXJnZXQpXG4gIH1cblxuICB0aXRsZURlc2NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJlcGxhY2VUaXRsZURlc2MoKVxuICAgIH1cbiAgfSlcbiAgZnVuY3Rpb24gcmVwbGFjZVRpdGxlRGVzYygpIHtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgdGl0bGVJbnB1dC5yZW1vdmUoKVxuICAgICAgZGVzY0lucHV0LnJlbW92ZSgpXG4gICAgfVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcm0odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgdGl0bGUnKVxuICAgICAgY3JlYXRlRWRpdElucHV0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlRWRpdERlc2MoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIGRlc2NyaXB0aW9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVBdHQgPSB7XG4gICAgICBpZDogJ2VkaXQtdGl0bGUtaW5wdXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gICAgZm9yIChsZXQga2V5IGluIHRpdGxlQXR0KSB7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoa2V5LCB0aXRsZUF0dFtrZXldKTtcbiAgICB9O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGUsIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgdGl0bGUudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0RGVzYygpIHtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjLWlucHV0Jyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aXRsZURlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIH1cbn1cbi8vIG9yIGNoYW5nZSB3aGVuIGV2ZW50IGlzIGV1cWFsIHRvIHJlbW92ZVxuLy8gYnV0dG9uIHRhcmdldCB0aGVuIHRhcmdldC5yZW1vdmUoKVxuZnVuY3Rpb24gcmVtb3ZlVGFzayhjb250YWluZXIsIHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0YXNrID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKVxufVxuXG5hZGRUYXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZUZvcm1VSShzYk1haW5Db250YWluZXIpO1xufSk7XG5cbi8vIGNyZWFUYXNrVWkgZ2V0IGl0cyBkYXRhIGZyb20gdGhlIGdldFRhc2tEYXRhIHRvcGljXG4vLyBhbmQgdXNlcyB0aG9zZSBkYXRhIHRvIGNyZWF0ZSBhIG5ldyB0YXNrIFVJIG9ubHlcblB1YlN1Yi5zdWJzY3JpYmUoJ2dldFRhc2tEYXRhJywgKG1zZywgdXNlclRhc2spID0+IHtcbiAgY29uc29sZS5sb2cobXNnKVxuICBjcmVhdGVUYXNrVUkodGRVcE1haW5Db250YWluZXIsIHVzZXJUYXNrKVxufSlcblxuZm9ybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZUZvcm0oc2JNYWluQ29udGFpbmVyKVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=