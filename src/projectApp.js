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

projectAppContainer.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('#add-project-btn')) {
    Project.createProjectUI(projectAppContainer);
    createForm(target)
  }
})

function createForm(target) {
  target.parentNode.setAttribute('style', 'display:none;')
  // target.classList.add('btn-inactive')
  const form = document.createElement('form')
  const titleInput = document.createElement('input')
  const submitBtn = document.createElement('button')
  projectAppContainer.insertBefore(form, target.parentNode)
  form.setAttribute('id', 'project-form');
  titleInput.setAttribute('id', 'project-title-input')
  titleInput.setAttribute('type', 'text')
  titleInput.setAttribute('placeholder', 'Add Title')
  submitBtn.setAttribute('id', 'project-submit-input-btn')
  form.append(titleInput, submitBtn)
  submitBtn.textContent = 'New Project'
  submitBtn.addEventListener('click', e => {
    target.parentNode.setAttribute('style', 'display:inline-block;')
    e.preventDefault()
    projectAppContainer.removeChild(form)
  })
}
