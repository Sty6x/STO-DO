import * as Task from './taskUI'
const projectUIList = document.querySelectorAll()
let i = 0
export function createProjectUI(container) {
  i++
  const projectContainer = document.createElement('div');
  const projTitleCont = document.createElement('div')
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projAddTaskBtn.textContent = 'ADD TASK'
  projectTitle.textContent = `Project-${i}`
  projectContainer.setAttribute('id', `project-container-id-${i}`)
  projTaskCont.setAttribute('id', `proj-task-container-${i}`)
  projAddTaskBtn.setAttribute('id', `add-task-btn-${i}`)
  projTitleCont.appendChild(projectTitle)
  projectContainer.append(projTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
}
// add an eventlistener on the add taskbutton container
function setID() {
  // for(let i = 0; )
}
