let i = 0
export function createProjectUI(container) {
  const projectContainer = document.createElement('div');
  const projTitleCont = document.createElement('div')
  const projectTitle = document.createElement('h3');
  projTitleCont.appendChild(projectTitle)
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.append(projTitleCont, projAddTaskBtn, projTaskCont)
  projectTitle.textContent = `Project-${i++}`

  container.appendChild(projectContainer);
}
