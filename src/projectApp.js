import * as Project from './projectUI'
const todayHeader = document.getElementById("header-text"); //style
const projectAppContainer = document.createElement('div');
const mainContainer = document.getElementById('main-content-container');
const addProjectBtn = document.createElement('button');
const addProjectBtnContainer = document.createElement('div');
const addProjectBtnCont = document.getElementById('add-project-btn-container')
const form = document.createElement('form')
const titleInput = document.createElement('input')
const submitBtn = document.createElement('button')
submitBtn.setAttribute('id', 'project-submit-input-btn')
titleInput.setAttribute('id', 'project-title-input')
titleInput.setAttribute('type', 'text')
form.setAttribute('id', 'project-form');
form.append(titleInput, submitBtn)
form.setAttribute('style', 'display:none;')
projectAppContainer.insertBefore(form, addProjectBtnCont)

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

// createProjectAppUI()
projectAppContainer.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('#add-project-btn')) {
    createForm(target)
  }
})
function createForm(target) {
  form.setAttribute('style', 'display:flex;')
  target.parentNode.setAttribute('style', 'display:none;')
  titleInput.setAttribute('placeholder', 'Add Title')
  submitBtn.textContent = 'New Project'
  submitBtn.addEventListener('click', e => {
    form.setAttribute('style', 'display:none;')
    target.parentNode.setAttribute('style', 'display:flex;')
    e.preventDefault()
  })
}

PubSub.subscribe('getProjectData', (msg, projectData) => {
  console.log(msg)
  Project.createProjectUI(projectAppContainer, projectData);
})

projectAppContainer.addEventListener('click', e => {
  const target = e.target;
  Project.EditTitle(target)
})
