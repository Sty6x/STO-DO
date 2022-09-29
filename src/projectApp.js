import * as Project from './projectUI'
const todayHeader = document.getElementById("header-text"); //style
const projectContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
export function createProjectAppUI() {
  addProjectBtnContainer.setAttribute('id', 'add-project-btn-container');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  addProjectBtn.textContent = 'ADD PROJECT';
  addProjectBtnContainer.appendChild(addProjectBtn);
  projectContainer.setAttribute('id', 'project-app-container')
  projectContainer.appendChild(addProjectBtnContainer)
  mainContainer.appendChild(projectContainer)
  todayHeader.textContent = 'PROJECTS'
}
createProjectAppUI()

addProjectBtn.addEventListener('click', e => {
  Project.createProjectUI(projectContainer);
})
