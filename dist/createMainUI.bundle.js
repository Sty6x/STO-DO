(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["createMainUI"],{

/***/ "./src/createMainUI.js":
/*!*****************************!*\
  !*** ./src/createMainUI.js ***!
  \*****************************/
/***/ (() => {

const body = document.querySelector('body')
const sbMainContainer = document.getElementById('sb-main-container')
const mainContentContainer = document.getElementById('main-content-container')


const headerContainer = document.createElement('div')
const todayHeader = document.createElement('h1') //style
const headerOptionContainer = document.createElement('ul')


const tdTaskContainer = document.createElement('div')

const optionArr = [] //style
for (let i = 0; i < 3; i++) {
    let option = document.createElement('li')
    optionArr.push(option)
    // optionArr[i].textContent = `${i}`
    headerOptionContainer.append(optionArr[i]) //style
    optionArr[i].setAttribute('class',`option-${i}`)
    optionArr[i].classList.add('option-icons')
}


function createTdTask() {
    mainContentContainer.appendChild(headerContainer)
    headerContainer.setAttribute('id','header-container')
    mainContentContainer.appendChild(tdTaskContainer)
    tdTaskContainer.setAttribute('id','td-task-container')
    headerContainer.append(todayHeader)
    todayHeader.setAttribute('id','today-header') //style
    headerContainer.appendChild(headerOptionContainer)
    headerOptionContainer.setAttribute('id','header-option-container')
    todayHeader.textContent = "TODAY"
}
createTdTask()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createMainUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTWFpblVJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QztBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy9jcmVhdGVNYWluVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3Qgc2JNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiLW1haW4tY29udGFpbmVyJylcbmNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1jb250YWluZXInKVxuXG5cbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCB0b2RheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJykgLy9zdHlsZVxuY29uc3QgaGVhZGVyT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG5cbmNvbnN0IHRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbmNvbnN0IG9wdGlvbkFyciA9IFtdIC8vc3R5bGVcbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBvcHRpb25BcnIucHVzaChvcHRpb24pXG4gICAgLy8gb3B0aW9uQXJyW2ldLnRleHRDb250ZW50ID0gYCR7aX1gXG4gICAgaGVhZGVyT3B0aW9uQ29udGFpbmVyLmFwcGVuZChvcHRpb25BcnJbaV0pIC8vc3R5bGVcbiAgICBvcHRpb25BcnJbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsYG9wdGlvbi0ke2l9YClcbiAgICBvcHRpb25BcnJbaV0uY2xhc3NMaXN0LmFkZCgnb3B0aW9uLWljb25zJylcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUZFRhc2soKSB7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKVxuICAgIGhlYWRlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyLWNvbnRhaW5lcicpXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGRUYXNrQ29udGFpbmVyKVxuICAgIHRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywndGQtdGFzay1jb250YWluZXInKVxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmQodG9kYXlIZWFkZXIpXG4gICAgdG9kYXlIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZGF5LWhlYWRlcicpIC8vc3R5bGVcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyT3B0aW9uQ29udGFpbmVyKVxuICAgIGhlYWRlck9wdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyLW9wdGlvbi1jb250YWluZXInKVxuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUT0RBWVwiXG59XG5jcmVhdGVUZFRhc2soKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==