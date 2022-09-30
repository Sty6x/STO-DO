import * as Task from './taskUI'
const mainContentContainer = document.getElementById('main-content-container')
export function createProjectUI(container) {
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
  projectTitle.textContent = `My First Project`
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
console.log(mainContentContainer)
mainContentContainer.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('.proj-add-task-btn')) {
    console.log(target)
    const buttonId = target.id.slice(-1)
    console.log(buttonId)
    const projectTaskCont = document.getElementById(`project-task-cont-ID-${buttonId}`)
    console.log(projectTaskCont)
    Task.createTaskUI(projectTaskCont, { titleInput: 'something', descInput: 'ok' }, target)
  }
})
