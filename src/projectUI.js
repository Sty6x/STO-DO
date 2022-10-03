import * as Task from './taskUI'
const formAddTaskButton = document.getElementById('form-add-button');
const mainContentContainer = document.getElementById('main-content-container')
const sbMainContainer = document.getElementById('sb-main-container')
export function createProjectUI(container, projectData) {
  const projectContainer = document.createElement('div');
  const projectTitleCont = document.createElement('div')
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.setAttribute('class', `proj-container`)
  projectTitleCont.setAttribute('class', 'proj-title-container')
  projectTitle.setAttribute('class', 'proj-title')
  projTaskCont.setAttribute('class', `proj-task-cont`)
  projAddTaskBtn.setAttribute('class', `proj-add-task-btn`)
  projAddTaskBtn.textContent = 'ADD TASK'
  projectTitle.textContent = `${projectData.title}`
  projectTitleCont.appendChild(projectTitle)
  projectContainer.append(projectTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
  setProjectElemID()
}
// add an eventlistener on the add taskbutton container
function setProjectElemID() {
  const projectUIList = document.querySelectorAll('.proj-container')
  const projectTaskList = document.querySelectorAll('.proj-task-cont')
  const projectAddTaskBtnList = document.querySelectorAll('.proj-add-task-btn')
  const projectUIListArr = Array.from(projectUIList)
  const projectTaskListArr = Array.from(projectTaskList)
  const projectAddTaskBtnListArr = Array.from(projectAddTaskBtnList)
  for (let i = 0; i < projectUIListArr.length; i++) {
    projectUIListArr[i].setAttribute('id', `project-ID-${i}`)
    projectTaskListArr[i].setAttribute('id', `project-task-cont-ID-${i}`)
    projectAddTaskBtnListArr[i].setAttribute('id', `project-add-task-btn-ID-${i}`)
  }
}

export function EditTitle(target) {
  const titleProjectContainer = target.parentNode;
  let title = document.createElement('input');
  let titleInput = document.getElementById('edit-title-input');
  let newTitle = document.createElement('h3');
  newTitle.setAttribute('id', 'project-title');


  if (target.matches('#proj-title')) {
    console.log(target);
    applyForm(target)
  }

  titleProjectContainer.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      replaceProjectTitle()
    }
  })
  function replaceProjectTitle() {
    if (!titleInput.value) {
      return;
    } else {
      titleProjectContainer.children[0].textContent = titleInput.value;
      titleInput.remove()
    }
    titleProjectContainer.children[0].setAttribute('style', 'display:inline')
  }

  function applyForm(target) {
    target.setAttribute('style', 'display:none;')
    if (target.nodeName === 'H3') {
      console.log('im of type title')
      createEditInput()
    }
  }

  function createEditInput() {
    const titleAtt = {
      id: 'edit-project-title-input',
      type: 'text',
    };
    for (let key in titleAtt) {
      title.setAttribute(key, titleAtt[key]);
    };
    titleProjectContainer.appendChild(title);
    title.value = target.textContent;
  }
}
// the projectTaskCont and the createTaskUI's argument needs to meet somewhere without the eventlistener
// the createTaskUI doesnt need an event listener it only needs the container which the 
// event listener provides
let target;
mainContentContainer.addEventListener('click', e => {
  target = e.target;
  if (target.matches('.proj-add-task-btn')) {
    Task.createFormUI(mainContentContainer)
  }
  // console.log(target)
})
function addTaskToProject() {
  const buttonId = target.id.slice(-1)
  const projectTaskCont = document.getElementById(`project-task-cont-ID-${buttonId}`)
  // console.log(target)
  return projectTaskCont
}

formAddTaskButton.addEventListener('click', (e) => {
  Task.removeForm(mainContentContainer)
})

mainContentContainer.addEventListener('click', e => {
  const target = e.target
  Task.removeTask(target)
  Task.EditTask(target)
})

PubSub.subscribe('getTaskData', (msg, userTask) => {
  console.log(msg)
  Task.createTaskUI(addTaskToProject(target), userTask)
})
