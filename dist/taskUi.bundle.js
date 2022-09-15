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
const headerOptionContainer = document.getElementById(
  "header-option-container"
);
const options = headerOptionContainer.children;

for (let i = 0; i < options.length; i++) {
  options[i].setAttribute("id", `option-${i}`);
  options[i].classList.add("option-icons");
}

const tdMainContainer = document.createElement("div");
const tdTasksContainer = document.createElement("div");
const addTaskbutton = document.createElement("button");
const addTaskContainer = document.createElement("div");

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

class Task {
  constructor(title, description, isDone, color) {
    this.title = title;
    this.description = description;
    this.isDone = false;
    this.color = color;
  }
  priorityChange(task) {
    task.setAttribute("style", `background-color:${this.color};`);
  }
}

// creates task from user input
function createTasks(tdContainer, userTask) {
  let task = document.createElement("div");
  task.setAttribute("class", "task");

  let titleAndDescContainer = document.createElement("div");
  titleAndDescContainer.setAttribute("class", "title-desc-container");

  let taskTitle = document.createElement("h3");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.textContent = userTask.title;

  let taskDesc = document.createElement("p");
  taskDesc.setAttribute("id", "task-desc");
  taskDesc.textContent = userTask.description;

  let taskSettingContainer = document.createElement("div");
  taskSettingContainer.setAttribute("id", "task-setting-container");

  let taskSettings = document.createElement("button");
  taskSettingContainer.appendChild(taskSettings);
  taskSettings.setAttribute("id", "task-setting");
  taskSettings.textContent = "...";

  tdContainer.appendChild(task);
  task.append(titleAndDescContainer, taskSettingContainer);
  titleAndDescContainer.append(taskTitle, taskDesc);
  userTask.priorityChange(task);
}

//application logic
let taskArr = [];

function storeTask(Obj, taskArr) {
  taskArr.push(Obj);
  console.log(taskArr);
}

function applyAttributes(node, objAttr) {
  for (key in objAttr) {
    console.log(key);
    node.setAttribute(key, `${objAttr[key]}`);
  }
}

function createFormUI(mainContainer) {
  const dimBg = document.createElement("div");
  dimBg.setAttribute(
    "style",
    "position:absolute;bottom:0%;left:0%;z-index:99;min-height:100vh;width:100vw;background-color:black;opacity:.5"
  );
  body.setAttribute("style", "overflow:hidden;");
  console.log("form created");
  // formFunction(dimBg,mainContainer)

  const popUpForm = document.getElementById('form-container')
  const cancelButton = document.getElementById('form-cancel-button')
  if (!popUpForm.classList.contains('form-active')) {
    popUpForm.setAttribute('class', 'form-active')
    mainContainer.append(dimBg);
  }
  // bug 
  // error on removing child saying it doesnt exist
  // probably need to create again if gone but then again its
  // still appending everytime we click on add task
  if(popUpForm.classList.contains('form-active')){
    cancelButton.addEventListener('click', e => {
      popUpForm.classList.remove('form-active')
      popUpForm.setAttribute('class', 'form-inactive')
      if(mainContainer.children[0]){
        mainContainer.removeChild(dimBg)
      }
    })
  }

}

createTasks(tdMainContainer, new Task('kafka', 'something along the lines of i dont care', false, 'd'))
addTaskbutton.addEventListener("click", () => {
  // pubsub make a function that returns an object and pass it into these 2 functions
  //   createTasks(tdMainContainer, new Task('kafka', 'something along the lines of i dont care', false, 'd'))
  //   storeTask(new Task('kafka', 'something along the lines of i dont care', false, 'res'),taskArr)
  createFormUI(sbMainContainer);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVLFFBQVEsV0FBVyxpQkFBaUIsWUFBWSx1QkFBdUI7QUFDeEc7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvdGFza1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHNiTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ItbWFpbi1jb250YWluZXJcIik7XG5jb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiKTtcblxuY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBoZWFkZXJPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJoZWFkZXItb3B0aW9uLWNvbnRhaW5lclwiXG4pO1xuY29uc3Qgb3B0aW9ucyA9IGhlYWRlck9wdGlvbkNvbnRhaW5lci5jaGlsZHJlbjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gIG9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYG9wdGlvbi0ke2l9YCk7XG4gIG9wdGlvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1pY29uc1wiKTtcbn1cblxuY29uc3QgdGRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRkVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWRkVGFza2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVGRUYXNrVUkoKSB7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRkTWFpbkNvbnRhaW5lcik7XG4gIHRkTWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRkLXVwLW1haW4tdGFzay1jb250YWluZXJcIik7XG4gIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUT0RBWVwiO1xuICBhZGRUYXNrYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICB0ZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1jb250YWluZXJcIik7XG4gIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza2J1dHRvbik7XG4gIGFkZFRhc2tidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG59XG5jcmVhdGVUZFRhc2tVSSgpO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpc0RvbmUsIGNvbG9yKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuICBwcmlvcml0eUNoYW5nZSh0YXNrKSB7XG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuY29sb3J9O2ApO1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKHRkQ29udGFpbmVyLCB1c2VyVGFzaykge1xuICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gIGxldCB0aXRsZUFuZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1kZXNjLWNvbnRhaW5lclwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB1c2VyVGFzay50aXRsZTtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdXNlclRhc2suZGVzY3JpcHRpb247XG5cbiAgbGV0IHRhc2tTZXR0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1NldHRpbmdDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXNldHRpbmctY29udGFpbmVyXCIpO1xuXG4gIGxldCB0YXNrU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YXNrU2V0dGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU2V0dGluZ3MpO1xuICB0YXNrU2V0dGluZ3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXNldHRpbmdcIik7XG4gIHRhc2tTZXR0aW5ncy50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG5cbiAgdGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gIHRhc2suYXBwZW5kKHRpdGxlQW5kRGVzY0NvbnRhaW5lciwgdGFza1NldHRpbmdDb250YWluZXIpO1xuICB0aXRsZUFuZERlc2NDb250YWluZXIuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xuICB1c2VyVGFzay5wcmlvcml0eUNoYW5nZSh0YXNrKTtcbn1cblxuLy9hcHBsaWNhdGlvbiBsb2dpY1xubGV0IHRhc2tBcnIgPSBbXTtcblxuZnVuY3Rpb24gc3RvcmVUYXNrKE9iaiwgdGFza0Fycikge1xuICB0YXNrQXJyLnB1c2goT2JqKTtcbiAgY29uc29sZS5sb2codGFza0Fycik7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyhub2RlLCBvYmpBdHRyKSB7XG4gIGZvciAoa2V5IGluIG9iakF0dHIpIHtcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYCR7b2JqQXR0cltrZXldfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1VSShtYWluQ29udGFpbmVyKSB7XG4gIGNvbnN0IGRpbUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGltQmcuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowJTtsZWZ0OjAlO3otaW5kZXg6OTk7bWluLWhlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjVcIlxuICApO1xuICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6aGlkZGVuO1wiKTtcbiAgY29uc29sZS5sb2coXCJmb3JtIGNyZWF0ZWRcIik7XG4gIC8vIGZvcm1GdW5jdGlvbihkaW1CZyxtYWluQ29udGFpbmVyKVxuXG4gIGNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNhbmNlbC1idXR0b24nKVxuICBpZiAoIXBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpIHtcbiAgICBwb3BVcEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWFjdGl2ZScpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGltQmcpO1xuICB9XG4gIC8vIGJ1ZyBcbiAgLy8gZXJyb3Igb24gcmVtb3ZpbmcgY2hpbGQgc2F5aW5nIGl0IGRvZXNudCBleGlzdFxuICAvLyBwcm9iYWJseSBuZWVkIHRvIGNyZWF0ZSBhZ2FpbiBpZiBnb25lIGJ1dCB0aGVuIGFnYWluIGl0c1xuICAvLyBzdGlsbCBhcHBlbmRpbmcgZXZlcnl0aW1lIHdlIGNsaWNrIG9uIGFkZCB0YXNrXG4gIGlmKHBvcFVwRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWN0aXZlJykpe1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJylcbiAgICAgIHBvcFVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0taW5hY3RpdmUnKVxuICAgICAgaWYobWFpbkNvbnRhaW5lci5jaGlsZHJlblswXSl7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGltQmcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmNyZWF0ZVRhc2tzKHRkTWFpbkNvbnRhaW5lciwgbmV3IFRhc2soJ2thZmthJywgJ3NvbWV0aGluZyBhbG9uZyB0aGUgbGluZXMgb2YgaSBkb250IGNhcmUnLCBmYWxzZSwgJ2QnKSlcbmFkZFRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gcHVic3ViIG1ha2UgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0IGFuZCBwYXNzIGl0IGludG8gdGhlc2UgMiBmdW5jdGlvbnNcbiAgLy8gICBjcmVhdGVUYXNrcyh0ZE1haW5Db250YWluZXIsIG5ldyBUYXNrKCdrYWZrYScsICdzb21ldGhpbmcgYWxvbmcgdGhlIGxpbmVzIG9mIGkgZG9udCBjYXJlJywgZmFsc2UsICdkJykpXG4gIC8vICAgc3RvcmVUYXNrKG5ldyBUYXNrKCdrYWZrYScsICdzb21ldGhpbmcgYWxvbmcgdGhlIGxpbmVzIG9mIGkgZG9udCBjYXJlJywgZmFsc2UsICdyZXMnKSx0YXNrQXJyKVxuICBjcmVhdGVGb3JtVUkoc2JNYWluQ29udGFpbmVyKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==