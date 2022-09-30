import * as Project from './projectUI'
const todayHeader = document.getElementById("header-text"); //style
const projectAppContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
export function createProjectAppUI() {
  addProjectBtnContainer.setAttribute('id', 'add-project-btn-container');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  addProjectBtn.textContent = 'ADD PROJECT';
  addProjectBtnContainer.appendChild(addProjectBtn);
  projectAppContainer.setAttribute('id', 'project-app-container')
  projectAppContainer.appendChild(addProjectBtnContainer)
  mainContainer.appendChild(projectAppContainer)
  todayHeader.textContent = 'PROJECTS'
}
createProjectAppUI()

addProjectBtn.addEventListener('click', e => {
  Project.createProjectUI(projectAppContainer);
})

