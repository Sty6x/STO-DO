import { format, subDays } from 'date-fns'
const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
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
  priority = '';
};


// why do i need this?
// I need that so i could save the information
// the user input and parse it into a Json file
const userTasks = []
function storeUserTaskList(obj) {
  userTasks.push(obj)
  // console.log(userTasks)
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
  // use this logic to throw an error if input is empty
  if (userTitle.value == '') {
    console.log('need title');
    return;
  } else {
    PubSub.publish('getTaskData', TaskData())
    storeUserTaskList(TaskData());
    clearInput();
  }
});
