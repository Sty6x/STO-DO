import { format, formatDistance } from 'date-fns'
const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const formAddTaskButton = document.getElementById('form-add-button');
const sideBar = document.querySelector('.sidebar')
const dateInput = document.getElementById('date-input')
let priority;
priorityButtonContainer.addEventListener('click', event => {
  if (event.target.matches('#very-important')) {
    priority = '#bf616a';
  } else if (event.target.matches('#important')) {
    priority = '#ebcb8b';
  } else if (event.target.matches('#less-important')) {
    priority = '#a3be8c';
  }
})

function clearInput() {
  userDesc.value = '';
  userTitle.value = '';
  priority = '';
  dateInput.value = '';
};

const userTasks = []
function storeUserTaskList(obj) {
  if (sideBar.children[0].classList.contains('active')) {
    userTasks.push(obj)
  }
};

function TaskData() {
  let id = 0;
  let descInput;
  let titleInput;
  descInput = userDesc.value;
  titleInput = userTitle.value;
  let taskDate = new Date(dateInput.value)
  let todayDate = new Date()
  let dueDate = formatDistance(todayDate, taskDate)
  console.log(dueDate)

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
    id,
    taskDate,
    // testDate,
    dueDate
  };
};

formAddTaskButton.addEventListener('click', e => {
  e.preventDefault();
  if (userTitle.value == '') {
    return;
  } else {
    if (sideBar.children[0].classList.contains('active')) {
      PubSub.publish('getTaskData', TaskData())
      storeUserTaskList(TaskData());
      clearInput();
    } else if (sideBar.children[1].classList.contains('active')) {
      PubSub.publish('getProjectTaskData', TaskData())
      clearInput();
    }
  }
});
