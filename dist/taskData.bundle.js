(self["webpackChunksto_do"] = self["webpackChunksto_do"] || []).push([["taskData"],{

/***/ "./src/taskData.js":
/*!*************************!*\
  !*** ./src/taskData.js ***!
  \*************************/
/***/ (() => {

const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const formAddTaskButton = document.getElementById('form-add-button');

let priority;
priorityButtonContainer.addEventListener('click', event => {
  console.log(event.target)
  if (event.target.matches('#very-important')) {
    console.log('very important')
    priority = '#bf616a';
  } else if (event.target.matches('#important')) {
    console.log('important')
    priority = '#ebcb8b';
  } else if (event.target.matches('#less-important')) {
    console.log('less important')
    priority = '#a3be8c';
  }
})

function clearInput() {
  userDesc.value = '';
  userTitle.value = '';
  // priority = '';
};


// why do i need this?
// I need that so i could save the information
// the user input and parse it into a Json file
const userTasks = [{}]
function storeUserTask(obj) {
  userTasks.push(obj)
  console.log(userTasks)
};

function getUserData() {
  let descInput;
  let titleInput;
  let id;
  descInput = userDesc.value;
  titleInput = userTitle.value;
  for (let i = 0; i < userTasks.length; i++) {
    id = `${i}`;
  }
  if (priority == '') {
    priority = 'var(--dark)';
  }
  return {
    titleInput,
    descInput,
    priority,
    id
  };
};

formAddTaskButton.addEventListener('click', e => {
  e.preventDefault();
  // use this logic to throw an error if input is empty
  if (userTitle.value == '') {
    console.log('need title');
    return;
  } else {
    PubSub.publish('getTaskData', getUserData())
    storeUserTask(getUserData());
    clearInput();
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0RhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDLFlBQVksRUFBRTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0by1kby8uL3NyYy90YXNrRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmlvcml0eUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5LWJ1dHRvbnMnKTtcbmNvbnN0IHVzZXJEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKVxuY29uc3QgdXNlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWNvbnRhaW5lcicpXG5jb25zdCBmb3JtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFkZC1idXR0b24nKTtcblxubGV0IHByaW9yaXR5O1xucHJpb3JpdHlCdXR0b25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcjdmVyeS1pbXBvcnRhbnQnKSkge1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ5IGltcG9ydGFudCcpXG4gICAgcHJpb3JpdHkgPSAnI2JmNjE2YSc7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyNpbXBvcnRhbnQnKSkge1xuICAgIGNvbnNvbGUubG9nKCdpbXBvcnRhbnQnKVxuICAgIHByaW9yaXR5ID0gJyNlYmNiOGInO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcjbGVzcy1pbXBvcnRhbnQnKSkge1xuICAgIGNvbnNvbGUubG9nKCdsZXNzIGltcG9ydGFudCcpXG4gICAgcHJpb3JpdHkgPSAnI2EzYmU4Yyc7XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoKSB7XG4gIHVzZXJEZXNjLnZhbHVlID0gJyc7XG4gIHVzZXJUaXRsZS52YWx1ZSA9ICcnO1xuICAvLyBwcmlvcml0eSA9ICcnO1xufTtcblxuXG4vLyB3aHkgZG8gaSBuZWVkIHRoaXM/XG4vLyBJIG5lZWQgdGhhdCBzbyBpIGNvdWxkIHNhdmUgdGhlIGluZm9ybWF0aW9uXG4vLyB0aGUgdXNlciBpbnB1dCBhbmQgcGFyc2UgaXQgaW50byBhIEpzb24gZmlsZVxuY29uc3QgdXNlclRhc2tzID0gW3t9XVxuZnVuY3Rpb24gc3RvcmVVc2VyVGFzayhvYmopIHtcbiAgdXNlclRhc2tzLnB1c2gob2JqKVxuICBjb25zb2xlLmxvZyh1c2VyVGFza3MpXG59O1xuXG5mdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcbiAgbGV0IGRlc2NJbnB1dDtcbiAgbGV0IHRpdGxlSW5wdXQ7XG4gIGxldCBpZDtcbiAgZGVzY0lucHV0ID0gdXNlckRlc2MudmFsdWU7XG4gIHRpdGxlSW5wdXQgPSB1c2VyVGl0bGUudmFsdWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlclRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWQgPSBgJHtpfWA7XG4gIH1cbiAgaWYgKHByaW9yaXR5ID09ICcnKSB7XG4gICAgcHJpb3JpdHkgPSAndmFyKC0tZGFyayknO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjSW5wdXQsXG4gICAgcHJpb3JpdHksXG4gICAgaWRcbiAgfTtcbn07XG5cbmZvcm1BZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gdXNlIHRoaXMgbG9naWMgdG8gdGhyb3cgYW4gZXJyb3IgaWYgaW5wdXQgaXMgZW1wdHlcbiAgaWYgKHVzZXJUaXRsZS52YWx1ZSA9PSAnJykge1xuICAgIGNvbnNvbGUubG9nKCduZWVkIHRpdGxlJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdnZXRUYXNrRGF0YScsIGdldFVzZXJEYXRhKCkpXG4gICAgc3RvcmVVc2VyVGFzayhnZXRVc2VyRGF0YSgpKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9