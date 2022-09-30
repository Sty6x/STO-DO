(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectData"],{

/***/ "./src/projectData.js":
/*!****************************!*\
  !*** ./src/projectData.js ***!
  \****************************/
/***/ (() => {

const addProjectBtn = document.getElementById('add-project-btn');

class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task)
  }
  removeTask() {
    // something
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

  // pass in a user title input on the first argumet
  projectList.push(new Project('my First Project', `project-ID-${incrementProjID++}`))
  console.log(projectList)
}

addProjectBtn.addEventListener('click', e => {
  instantiateProject()
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdERhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUUsa0JBQWtCO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG8tZG8vLi9zcmMvcHJvamVjdERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gIH1cbiAgcmVtb3ZlVGFzaygpIHtcbiAgICAvLyBzb21ldGhpbmdcbiAgfVxuICBkZWxldGVQcm9qZWN0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50YXNrTGlzdC5wb3AoaSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXVxubGV0IGluY3JlbWVudFByb2pJRCA9IDA7XG5mdW5jdGlvbiBpbnN0YW50aWF0ZVByb2plY3QoKSB7XG5cbiAgLy8gcGFzcyBpbiBhIHVzZXIgdGl0bGUgaW5wdXQgb24gdGhlIGZpcnN0IGFyZ3VtZXRcbiAgcHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdCgnbXkgRmlyc3QgUHJvamVjdCcsIGBwcm9qZWN0LUlELSR7aW5jcmVtZW50UHJvaklEKyt9YCkpXG4gIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGluc3RhbnRpYXRlUHJvamVjdCgpXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9