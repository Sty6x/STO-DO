"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["taskUI"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVUsUUFBUSxXQUFXLGlCQUFpQixZQUFZLHVCQUF1QjtBQUN0RztBQUNBOzs7QUFHQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLGtDQUFrQyxZQUFZOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy90YXNrVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3Rhc2tVSSBpbml0aWFsaXplZCcpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpbUJnLnNldEF0dHJpYnV0ZShcbiAgXCJzdHlsZVwiLFxuICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuKTtcbmRpbUJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGltLWJhY2tncm91bmQtZm9ybScpXG5cblxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVUkoY29udGFpbmVyLCB1c2VyVGFzaykge1xuICAvLyBjb25zb2xlLmxvZyhtc2cpXG4gIGNvbnNvbGUubG9nKHVzZXJUYXNrKVxuICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gIGxldCB0aXRsZUFuZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1kZXNjLWNvbnRhaW5lclwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB1c2VyVGFzay50aXRsZUlucHV0O1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY1wiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB1c2VyVGFzay5kZXNjSW5wdXQ7XG5cbiAgbGV0IGVkaXRSbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1jb250YWluZXJcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtY29udGFpbmVyXCIpO1xuXG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbW92ZS1idXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtdGFzay1idXR0b25zXCIpO1xuXG4gIGVkaXRSbUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICB0YXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYm9yZGVyLWxlZnQ6c29saWQgMTBweCAke3VzZXJUYXNrLnByaW9yaXR5fTtgKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2stJHt1c2VyVGFzay5pZH1gKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gIHRhc2suYXBwZW5kKHRpdGxlQW5kRGVzY0NvbnRhaW5lciwgZWRpdFJtQ29udGFpbmVyKTtcbiAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzpoaWRkZW47XCIpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gY3JlYXRlZFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY2FuY2VsLWJ1dHRvbicpXG4gIGNvbnN0IGJ1dHRvbkZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eS1idXR0b25zJyk7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IEFycmF5LmZyb20oYnV0dG9uRm9ybUNvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgcHJpb3JpdHlCdG5zLmZvckVhY2gocHJpb3JpdHlCdG4gPT4ge1xuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSlcblxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG5cbiAgLy8gcmVmYWN0b3IgdGhpcywgc2VwYXJhdGUgdGhlIGNhbmNlbCBmdW50aW9uYWxpdHksIGJlY2F1c2VcbiAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBjcmVhdGUgYSBmb3JtIFVJXG4gIC8vIGhhbmRsZXMgY2FuY2VsIGJ1dHRvblxuICBpZiAocG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gICAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmF1dG87XCIpO1xuICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbUJnKVxuICBwb3BVcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKVxuICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWluYWN0aXZlJylcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0VGFzayh0YXJnZXQpIHtcbiAgY29uc3QgdGl0bGVEZXNjQ29udGFpbmVyID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpO1xuICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gIG5ld0Rlc2Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2MnKTtcblxuXG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stdGl0bGUnKSkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnI3Rhc2stZGVzYycpKSB7XG4gICAgYXBwbHlGb3JtKHRhcmdldClcbiAgfVxuXG4gIHRpdGxlRGVzY0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmVwbGFjZVRpdGxlRGVzYygpXG4gICAgfVxuICB9KVxuICBmdW5jdGlvbiByZXBsYWNlVGl0bGVEZXNjKCkge1xuICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY0lucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICB0aXRsZUlucHV0LnJlbW92ZSgpXG4gICAgICBkZXNjSW5wdXQucmVtb3ZlKClcbiAgICB9XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9ybSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSDMnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSB0aXRsZScpXG4gICAgICBjcmVhdGVFZGl0SW5wdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVFZGl0RGVzYygpO1xuICAgICAgY29uc29sZS5sb2coJ2ltIG9mIHR5cGUgZGVzY3JpcHRpb24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dCgpIHtcbiAgICBjb25zdCB0aXRsZUF0dCA9IHtcbiAgICAgIGlkOiAnZWRpdC10aXRsZS1pbnB1dCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGl0bGVBdHQpIHtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShrZXksIHRpdGxlQXR0W2tleV0pO1xuICAgIH07XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZSwgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXREZXNjKCkge1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2MtaW5wdXQnKTtcbiAgICBkZXNjLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRpdGxlRGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgfVxufVxuLy8gb3IgY2hhbmdlIHdoZW4gZXZlbnQgaXMgZXVxYWwgdG8gcmVtb3ZlXG4vLyBidXR0b24gdGFyZ2V0IHRoZW4gdGFyZ2V0LnJlbW92ZSgpXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhjb250YWluZXIsIHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0YXNrID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=