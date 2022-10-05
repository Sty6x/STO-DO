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
  console.log(projectList[projectList.length - 1])
  projectTitleInput.value = '';
  console.log(projectList)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdERhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDJEQUEyRCxrQkFBa0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvcHJvamVjdERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcbmxldCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlLWlucHV0JylcbmNvbnN0IHN1Ym1pdElucEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdC1pbnB1dC1idG4nKVxuY29uc3QgcHJvamVjdEFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFwcC1jb250YWluZXInKVxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayhtc2csIHRhc2spIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gIH1cbiAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnBvcCh0YXNrSW5kZXgpXG4gIH1cbiAgZGVsZXRlUHJvamVjdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudGFza0xpc3QucG9wKGkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW11cbmxldCBpbmNyZW1lbnRQcm9qSUQgPSAwO1xuXG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlUHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlXG4gIHByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QocHJvamVjdFRpdGxlLCBgcHJvamVjdC1JRC0ke2luY3JlbWVudFByb2pJRCsrfWApKVxuICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5sZW5ndGggLSAxXSlcbiAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5sZW5ndGggLSAxXVxufVxuXG5zdWJtaXRJbnBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFB1YlN1Yi5wdWJsaXNoKCdnZXRQcm9qZWN0RGF0YScsIGluc3RhbnRpYXRlUHJvamVjdCgpKVxufSlcblxubGV0IHRhcmdldDtcbnByb2plY3RBcHBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgdGFyZ2V0ID0gZS50YXJnZXRcbiAgZGVsZXRlUHJvaih0YXJnZXQpXG4gIHJlbW92ZVRhc2sodGFyZ2V0KVxufSlcblxuZnVuY3Rpb24gZGVsZXRlUHJvaih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJvai1kZWwtYnRuJykpIHtcbiAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSB0YXJnZXQuaWQuc2xpY2UoLTEpXG4gICAgcHJvamVjdExpc3RbcHJvamVjdFBvc2l0aW9uXS5kZWxldGVQcm9qZWN0KClcbiAgICBwcm9qZWN0TGlzdC5wb3AocHJvamVjdFBvc2l0aW9uKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnI3JlbW92ZS1idXR0b24nKSkge1xuICAgIGxldCByZW1vdmVUYXNrQnRuUGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IHRhc2tDb250YWluZXIgPSByZW1vdmVUYXNrQnRuUGFyZW50LnBhcmVudE5vZGVcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lckNoaWxkcmVuID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlLmNoaWxkcmVuXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGUuaWQuc2xpY2UoLTEpXG4gICAgbGV0IHRhc2sgPSBBcnJheS5mcm9tKHByb2plY3RDb250YWluZXJDaGlsZHJlbikuaW5kZXhPZih0YXNrQ29udGFpbmVyKVxuICAgIHByb2plY3RMaXN0W3Byb2plY3RDb250YWluZXJdLnJlbW92ZVRhc2sodGFzaylcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qVGFza0xpc3QoKSB7XG4gIGNvbnN0IGJ1dHRvbklkID0gdGFyZ2V0LmlkLnNsaWNlKC0xKVxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3RbYnV0dG9uSWRdXG4gIHJldHVybiBwcm9qZWN0XG59XG5QdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0VGFza0RhdGEnLCAobXNnLCB0YXNrKSA9PiB7XG4gIGFkZFRhc2tUb1Byb2pUYXNrTGlzdCgpLmFkZFRhc2sobXNnLCB0YXNrKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9