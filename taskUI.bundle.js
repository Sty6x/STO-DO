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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVUsUUFBUSxXQUFXLGlCQUFpQixZQUFZLHVCQUF1QjtBQUN0RztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixnREFBZ0Qsa0JBQWtCO0FBQ2xFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxtQkFBbUI7QUFDMUUsa0NBQWtDLFlBQVk7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBkaW1CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoXG4gIFwic3R5bGVcIixcbiAgXCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MCU7bGVmdDowJTt6LWluZGV4Ojk5O21pbi1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi41XCJcbik7XG5kaW1CZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpbS1iYWNrZ3JvdW5kLWZvcm0nKVxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tVSShjb250YWluZXIsIHVzZXJUYXNrKSB7XG4gIGNvbnNvbGUubG9nKHVzZXJUYXNrKVxuICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gIGxldCB0aXRsZUFuZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1kZXNjLWNvbnRhaW5lclwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB1c2VyVGFzay50aXRsZUlucHV0O1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY1wiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB1c2VyVGFzay5kZXNjSW5wdXQ7XG5cbiAgbGV0IGVkaXRSbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1jb250YWluZXJcIik7XG4gIGVkaXRSbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQtY29udGFpbmVyXCIpO1xuXG5cbiAgbGV0IGR1ZURhdGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVDb250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlLWRhdGUtY29udGFpbmVyJylcbiAgbGV0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZS1kYXRlLXRleHQnKVxuXG4gIGlmICh1c2VyVGFzay5kdWVEYXRlID09IDApIHtcbiAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IGBUYXNrIGlzIGR1ZSB0b2RheWA7XG4gIH0gZWxzZSBpZiAodXNlclRhc2suZHVlRGF0ZSA9PSAxKSB7XG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBgVGFzayBpcyBkdWUgdG9tb3Jyb3dgO1xuICB9IGVsc2Uge1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYFRhc2sgaXMgZHVlIGluICR7dXNlclRhc2suZHVlRGF0ZX0gZGF5c2A7XG4gIH1cbiAgZHVlRGF0ZUNvbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpXG5cblxuICBsZXQgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlLWJ1dHRvblwiKTtcbiAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtb3ZlLXRhc2stYnV0dG9uc1wiKTtcblxuICBlZGl0Um1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJvcmRlci1sZWZ0OnNvbGlkIDEwcHggJHt1c2VyVGFzay5wcmlvcml0eX07YCk7XG4gIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrLSR7dXNlclRhc2suaWR9YCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsIGR1ZURhdGVDb250LCBlZGl0Um1Db250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVVJKG1haW5Db250YWluZXIpIHtcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OmhpZGRlbjtcIik7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjcmVhdGVkXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jYW5jZWwtYnV0dG9uJylcbiAgY29uc3QgYnV0dG9uRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgY29uc3QgcHJpb3JpdHlCdG5zID0gQXJyYXkuZnJvbShidXR0b25Gb3JtQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICBwcmlvcml0eUJ0bnMuZm9yRWFjaChwcmlvcml0eUJ0biA9PiB7XG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IGZhbHNlO1xuICB9KVxuXG4gIGlmICghcG9wVXBGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hY3RpdmUnKSkge1xuICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tYWN0aXZlJylcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChkaW1CZyk7XG4gIH1cblxuICAvLyByZWZhY3RvciB0aGlzLCBzZXBhcmF0ZSB0aGUgY2FuY2VsIGZ1bnRpb25hbGl0eSwgYmVjYXVzZVxuICAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGNyZWF0ZSBhIGZvcm0gVUlcbiAgLy8gaGFuZGxlcyBjYW5jZWwgYnV0dG9uXG4gIGlmIChwb3BVcEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWFjdGl2ZScpKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxuICAgICAgaWYgKG1haW5Db250YWluZXIuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgcmVtb3ZlRm9ybShtYWluQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvcm0obWFpbkNvbnRhaW5lcikge1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6YXV0bztcIik7XG4gIHRyeSB7XG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChkaW1CZylcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdkaW0gYmcgcmVtb3ZlZCAnKVxuICB9XG4gIHBvcFVwRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpXG4gIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUYXNrKHRhcmdldCkge1xuICBjb25zdCB0aXRsZURlc2NDb250YWluZXIgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlLWlucHV0Jyk7XG4gIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjLWlucHV0Jyk7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuZXdUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgbmV3RGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzYycpO1xuXG5cbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay10aXRsZScpKSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcjdGFzay1kZXNjJykpIHtcbiAgICBhcHBseUZvcm0odGFyZ2V0KVxuICB9XG5cbiAgdGl0bGVEZXNjQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXBsYWNlVGl0bGVEZXNjKClcbiAgICB9XG4gIH0pXG4gIGZ1bmN0aW9uIHJlcGxhY2VUaXRsZURlc2MoKSB7XG4gICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlRGVzY0NvbnRhaW5lci5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgIHRpdGxlSW5wdXQucmVtb3ZlKClcbiAgICAgIGRlc2NJbnB1dC5yZW1vdmUoKVxuICAgIH1cbiAgICB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmlubGluZScpXG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTppbmxpbmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JtKHRhcmdldCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIMycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbSBvZiB0eXBlIHRpdGxlJylcbiAgICAgIGNyZWF0ZUVkaXRJbnB1dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZUVkaXREZXNjKCk7XG4gICAgICBjb25zb2xlLmxvZygnaW0gb2YgdHlwZSBkZXNjcmlwdGlvbicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlQXR0ID0ge1xuICAgICAgaWQ6ICdlZGl0LXRpdGxlLWlucHV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiB0aXRsZUF0dCkge1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKGtleSwgdGl0bGVBdHRba2V5XSk7XG4gICAgfTtcbiAgICB0aXRsZURlc2NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRpdGxlLCB0aXRsZURlc2NDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgIHRpdGxlLnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWRpdERlc2MoKSB7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYy1pbnB1dCcpO1xuICAgIGRlc2MudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGl0bGVEZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRhcmdldCkge1xuICBsZXQgcmVtb3ZlQnV0dG9uUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGxldCB0YXNrID0gcmVtb3ZlQnV0dG9uUGFyZW50LnBhcmVudE5vZGU7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3JlbW92ZS1idXR0b24nKSkge1xuICAgIHRhc2sucmVtb3ZlKClcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=