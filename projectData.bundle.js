(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectData"],{

/***/ "./src/projectData.js":
/*!****************************!*\
  !*** ./src/projectData.js ***!
  \****************************/
/***/ (() => {

const addProjectBtn = document.getElementById('add-project-btn');
let projectTitleInput = document.getElementById('project-title-input')
const submitInpBtn = document.getElementById('project-submit-input-btn')
const projectAppContainer = document.getElementById('project-app-container')
class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.taskList = [];
  }

  addTask(msg, task) {
    console.log(msg)
    this.taskList.push(task)
  }
  removeTask(taskIndex) {
    this.taskList.pop(taskIndex)
  }
  deleteProject() {
    for (let i = 0; i < this.taskList.length; i++) {
      this.taskList.pop(i)
    }
  }
}

const projectList = []
let incrementProjID = 0;


function instantiateProject() {
  let projectTitle = projectTitleInput.value
  projectList.push(new Project(projectTitle, `project-ID-${incrementProjID++}`))
  projectTitleInput.value = '';
  return projectList[projectList.length - 1]
}

submitInpBtn.addEventListener('click', () => {
  PubSub.publish('getProjectData', instantiateProject())
})

let target;
projectAppContainer.addEventListener('click', e => {
  target = e.target
  deleteProj(target)
  removeTask(target)
})

function deleteProj(target) {
  if (target.matches('.proj-del-btn')) {
    const projectPosition = target.id.slice(-1)
    projectList[projectPosition].deleteProject()
    projectList.pop(projectPosition)
  }
}

function removeTask(target) {
  if (target.matches('#remove-button')) {
    let removeTaskBtnParent = target.parentNode;
    let taskContainer = removeTaskBtnParent.parentNode
    let projectContainerChildren = taskContainer.parentNode.children
    let projectContainer = taskContainer.parentNode.id.slice(-1)
    let task = Array.from(projectContainerChildren).indexOf(taskContainer)
    projectList[projectContainer].removeTask(task)
  }
}

function addTaskToProjTaskList() {
  const buttonId = target.id.slice(-1)
  const project = projectList[buttonId]
  return project
}
PubSub.subscribe('getProjectTaskData', (msg, task) => {
  addTaskToProjTaskList().addTask(msg, task)
})



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdERhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDJEQUEyRCxrQkFBa0I7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0RGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xubGV0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUtaW5wdXQnKVxuY29uc3Qgc3VibWl0SW5wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3VibWl0LWlucHV0LWJ0bicpXG5jb25zdCBwcm9qZWN0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYXBwLWNvbnRhaW5lcicpXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGlkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gIH1cblxuICBhZGRUYXNrKG1zZywgdGFzaykge1xuICAgIGNvbnNvbGUubG9nKG1zZylcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzaylcbiAgfVxuICByZW1vdmVUYXNrKHRhc2tJbmRleCkge1xuICAgIHRoaXMudGFza0xpc3QucG9wKHRhc2tJbmRleClcbiAgfVxuICBkZWxldGVQcm9qZWN0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50YXNrTGlzdC5wb3AoaSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXVxubGV0IGluY3JlbWVudFByb2pJRCA9IDA7XG5cblxuZnVuY3Rpb24gaW5zdGFudGlhdGVQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWVcbiAgcHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUsIGBwcm9qZWN0LUlELSR7aW5jcmVtZW50UHJvaklEKyt9YCkpXG4gIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gJyc7XG4gIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5sZW5ndGggLSAxXVxufVxuXG5zdWJtaXRJbnBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFB1YlN1Yi5wdWJsaXNoKCdnZXRQcm9qZWN0RGF0YScsIGluc3RhbnRpYXRlUHJvamVjdCgpKVxufSlcblxubGV0IHRhcmdldDtcbnByb2plY3RBcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgdGFyZ2V0ID0gZS50YXJnZXRcbiAgZGVsZXRlUHJvaih0YXJnZXQpXG4gIHJlbW92ZVRhc2sodGFyZ2V0KVxufSlcblxuZnVuY3Rpb24gZGVsZXRlUHJvaih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai1kZWwtYnRuJykpIHtcbiAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSB0YXJnZXQuaWQuc2xpY2UoLTEpXG4gICAgcHJvamVjdExpc3RbcHJvamVjdFBvc2l0aW9uXS5kZWxldGVQcm9qZWN0KClcbiAgICBwcm9qZWN0TGlzdC5wb3AocHJvamVjdFBvc2l0aW9uKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3JlbW92ZS1idXR0b24nKSkge1xuICAgIGxldCByZW1vdmVUYXNrQnRuUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IHRhc2tDb250YWluZXIgPSByZW1vdmVUYXNrQnRuUGFyZW50LnBhcmVudE5vZGVcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lckNoaWxkcmVuID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlLmNoaWxkcmVuXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGUuaWQuc2xpY2UoLTEpXG4gICAgbGV0IHRhc2sgPSBBcnJheS5mcm9tKHByb2plY3RDb250YWluZXJDaGlsZHJlbikuaW5kZXhPZih0YXNrQ29udGFpbmVyKVxuICAgIHByb2plY3RMaXN0W3Byb2plY3RDb250YWluZXJdLnJlbW92ZVRhc2sodGFzaylcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qVGFza0xpc3QoKSB7XG4gIGNvbnN0IGJ1dHRvbklkID0gdGFyZ2V0LmlkLnNsaWNlKC0xKVxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3RbYnV0dG9uSWRdXG4gIHJldHVybiBwcm9qZWN0XG59XG5QdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0VGFza0RhdGEnLCAobXNnLCB0YXNrKSA9PiB7XG4gIGFkZFRhc2tUb1Byb2pUYXNrTGlzdCgpLmFkZFRhc2sobXNnLCB0YXNrKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9