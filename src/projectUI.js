import * as Task from './taskUI'
export function createProjectUI(container) {
  const projectContainer = document.createElement('div');
  const projTitleCont = document.createElement('div')
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.setAttribute('class', `project-container`)

  projTaskCont.setAttribute('class', `proj-task-cont`)
  projAddTaskBtn.setAttribute('class', `proj-add-task-btn`)
  projAddTaskBtn.textContent = 'ADD TASK'
  projectTitle.textContent = `Project`
  projTitleCont.appendChild(projectTitle)
  projectContainer.append(projTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
  setProjectElemID()
}
// add an eventlistener on the add taskbutton container
function setProjectElemID() {
  const projectUIList = document.querySelectorAll('.project-container')
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
