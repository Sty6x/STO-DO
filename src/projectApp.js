
const todayHeader = document.getElementById("header-text"); //style
const projectContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container')
export function createProjectAppUI() {
  todayHeader.textContent = 'PROJECTS'
  projectContainer.setAttribute('id', 'project-app-container')
  mainContainer.appendChild(projectContainer)
}
