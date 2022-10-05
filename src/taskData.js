import { format, subDays } from 'date-fns'
const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const formAddTaskButton = document.getElementById('form-add-button');
const sideBar = document.querySelector('.sidebar')

let priority;
priorityButtonContainer.addEventListener('click', event => {
  console.log(event.target)
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
};

const userTasks = []
function storeUserTaskList(obj) {
  if (sideBar.children[0].classList.contains('active')) {
    userTasks.push(obj)
  }
  console.log({ Today: userTasks });
};

function TaskData() {
  let descInput;
  let titleInput;
  let id = 0;
  descInput = userDesc.value;
  titleInput = userTitle.value;
  let taskDate = format(new Date(), 'MM-dd-yyyy');
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
    taskDate
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
      storeUserTaskList(TaskData());
      clearInput();
    }
  }
});
