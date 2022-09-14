(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["taskUi"],{

/***/ "./src/taskUI.js":
/*!***********************!*\
  !*** ./src/taskUI.js ***!
  \***********************/
/***/ (() => {

const body = document.querySelector('body')
const sbMainContainer = document.getElementById('sb-main-container')
const mainContentContainer = document.getElementById('main-content-container')


const headerContainer = document.getElementById('header-container')
const todayHeader = document.getElementById('header-text') //style
const headerOptionContainer = document.getElementById('header-option-container')
const options = headerOptionContainer.children;


for(let i = 0;i < options.length;i++){
    options[i].setAttribute('id',`option-${i}`)
    options[i].classList.add('option-icons')    
}

const tdMainContainer = document.createElement('div')
const tdTasksContainer = document.createElement('div')
const addTaskbutton = document.createElement('button')
const addTaskContainer = document.createElement('div')

function createTdTaskUI() {
    mainContentContainer.appendChild(tdMainContainer)
    tdMainContainer.setAttribute('id', 'td-up-main-task-container')
    todayHeader.textContent = "TODAY"
    addTaskbutton.setAttribute('id','add-task-button')
    tdMainContainer.appendChild(addTaskContainer)
    addTaskContainer.setAttribute('id','add-task-container')
    addTaskContainer.appendChild(addTaskbutton)
    addTaskbutton.textContent = 'Add Task'
}


createTdTaskUI()


// creates task from user input
function createTasks(tdContainer,title,description){
    let task = document.createElement('div');
    // container => |     |title:      |                |    |
    //              |     |Description:|                |o o o| <= container
    task.setAttribute('class','tasks');
    // let checkBox = document.createElement('')
    let taskTitle = document.createElement('h3');
    let taskDesc = document.createElement('p')
    let titleAndDescContainer = document.createElement('div')
    let taskSettings = document.createElement('button')
    let taskSettingContainer = document.createElement('div')
    task.append(titleAndDescContainer,taskSettingContainer)
    taskSettingContainer.setAttribute('id',('task-setting-container'))
    taskSettingContainer.appendChild(taskSettings)
    titleAndDescContainer.setAttribute('class','title-desc-container')
    tdContainer.appendChild(task)
    titleAndDescContainer.append(taskTitle,taskDesc)
    taskTitle.setAttribute('id','task-title')
    taskDesc.setAttribute('id','task-desc')
    taskSettings.setAttribute('id','task-setting')
    taskTitle.textContent=title
    taskDesc.textContent=description
    taskSettings.textContent = '...'
}

createTasks(tdMainContainer,'Do Something','Description of something you want to do')

addTaskbutton.addEventListener('click',()=> {
    createTasks(tdMainContainer,'Title Here','Make it do something, i dont care')
    console.log('here')
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskUI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza1VpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGNBQWMsbUJBQW1CO0FBQ2pDLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvLWRvLy4vc3JjL3Rhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBzYk1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItbWFpbi1jb250YWluZXInKVxuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG5cblxuY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1jb250YWluZXInKVxuY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXRleHQnKSAvL3N0eWxlXG5jb25zdCBoZWFkZXJPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW9wdGlvbi1jb250YWluZXInKVxuY29uc3Qgb3B0aW9ucyA9IGhlYWRlck9wdGlvbkNvbnRhaW5lci5jaGlsZHJlbjtcblxuXG5mb3IobGV0IGkgPSAwO2kgPCBvcHRpb25zLmxlbmd0aDtpKyspe1xuICAgIG9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdpZCcsYG9wdGlvbi0ke2l9YClcbiAgICBvcHRpb25zW2ldLmNsYXNzTGlzdC5hZGQoJ29wdGlvbi1pY29ucycpICAgIFxufVxuXG5jb25zdCB0ZE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgdGRUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBhZGRUYXNrYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5mdW5jdGlvbiBjcmVhdGVUZFRhc2tVSSgpIHtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZE1haW5Db250YWluZXIpXG4gICAgdGRNYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtdXAtbWFpbi10YXNrLWNvbnRhaW5lcicpXG4gICAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRPREFZXCJcbiAgICBhZGRUYXNrYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdhZGQtdGFzay1idXR0b24nKVxuICAgIHRkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKVxuICAgIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZC10YXNrLWNvbnRhaW5lcicpXG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrYnV0dG9uKVxuICAgIGFkZFRhc2tidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG59XG5cblxuY3JlYXRlVGRUYXNrVUkoKVxuXG5cbi8vIGNyZWF0ZXMgdGFzayBmcm9tIHVzZXIgaW5wdXRcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKHRkQ29udGFpbmVyLHRpdGxlLGRlc2NyaXB0aW9uKXtcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnRhaW5lciA9PiB8ICAgICB8dGl0bGU6ICAgICAgfCAgICAgICAgICAgICAgICB8ICAgIHxcbiAgICAvLyAgICAgICAgICAgICAgfCAgICAgfERlc2NyaXB0aW9uOnwgICAgICAgICAgICAgICAgfG8gbyBvfCA8PSBjb250YWluZXJcbiAgICB0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrcycpO1xuICAgIC8vIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJycpXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IHRpdGxlQW5kRGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHRhc2tTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbGV0IHRhc2tTZXR0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrLmFwcGVuZCh0aXRsZUFuZERlc2NDb250YWluZXIsdGFza1NldHRpbmdDb250YWluZXIpXG4gICAgdGFza1NldHRpbmdDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsKCd0YXNrLXNldHRpbmctY29udGFpbmVyJykpXG4gICAgdGFza1NldHRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1NldHRpbmdzKVxuICAgIHRpdGxlQW5kRGVzY0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUtZGVzYy1jb250YWluZXInKVxuICAgIHRkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXG4gICAgdGl0bGVBbmREZXNjQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsdGFza0Rlc2MpXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrLXRpdGxlJylcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywndGFzay1kZXNjJylcbiAgICB0YXNrU2V0dGluZ3Muc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2stc2V0dGluZycpXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50PXRpdGxlXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQ9ZGVzY3JpcHRpb25cbiAgICB0YXNrU2V0dGluZ3MudGV4dENvbnRlbnQgPSAnLi4uJ1xufVxuXG5jcmVhdGVUYXNrcyh0ZE1haW5Db250YWluZXIsJ0RvIFNvbWV0aGluZycsJ0Rlc2NyaXB0aW9uIG9mIHNvbWV0aGluZyB5b3Ugd2FudCB0byBkbycpXG5cbmFkZFRhc2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4ge1xuICAgIGNyZWF0ZVRhc2tzKHRkTWFpbkNvbnRhaW5lciwnVGl0bGUgSGVyZScsJ01ha2UgaXQgZG8gc29tZXRoaW5nLCBpIGRvbnQgY2FyZScpXG4gICAgY29uc29sZS5sb2coJ2hlcmUnKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=