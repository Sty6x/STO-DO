"use strict";
(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["projectApp"],{

/***/ "./src/projectApp.js":
/*!***************************!*\
  !*** ./src/projectApp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectAppUI": () => (/* binding */ createProjectAppUI)
/* harmony export */ });

const todayHeader = document.getElementById("header-text"); //style
const projectContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
function createProjectAppUI() {
  addProjectBtnContainer.setAttribute('id', 'add-project-btn-container');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  addProjectBtn.textContent = 'ADD PROJECT';
  addProjectBtnContainer.appendChild(addProjectBtn);
  projectContainer.setAttribute('id', 'project-app-container')
  projectContainer.appendChild(addProjectBtnContainer)
  mainContainer.appendChild(projectContainer)
  todayHeader.textContent = 'PROJECTS'
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectApp.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEFwcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9wcm9qZWN0QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10ZXh0XCIpOyAvL3N0eWxlXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGFkZFByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QXBwVUkoKSB7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4tY29udGFpbmVyJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBREQgUFJPSkVDVCc7XG4gIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWFwcC1jb250YWluZXInKVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG5Db250YWluZXIpXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSAnUFJPSkVDVFMnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=