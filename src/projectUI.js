import * as Task from './taskUI'
const formAddTaskButton = document.getElementById('form-add-button');
const mainContentContainer = document.getElementById('main-content-container')
export function createProjectUI(container, projectData) {
  const projectContainer = document.createElement('div');
  const projectTitleCont = document.createElement('div')
  const delProjButton = document.createElement('button');
  const projectTitle = document.createElement('h3');
  const projTaskCont = document.createElement('div')
  const projAddTaskBtn = document.createElement('button')
  projectContainer.setAttribute('class', `proj-container`)
  projectTitleCont.setAttribute('class', 'proj-title-container')
  projectTitle.setAttribute('class', 'proj-title')
  projTaskCont.setAttribute('class', `proj-task-cont`)
  projAddTaskBtn.setAttribute('class', `proj-add-task-btn`)
  delProjButton.setAttribute('class', 'proj-del-btn')
  projAddTaskBtn.textContent = 'ADD TASK'
  delProjButton.textContent = 'DELETE PROJECT'
  projectTitle.textContent = `${projectData.title}`
  projectTitleCont.append(projectTitle, delProjButton)
  projectContainer.append(projectTitleCont, projAddTaskBtn, projTaskCont)
  container.appendChild(projectContainer);
  setProjectElemID()
}
// add an eventlistener on the add taskbutton container
function setProjectElemID() {
  const projectUIList = document.querySelectorAll('.proj-container')
  const projectTaskList = document.querySelectorAll('.proj-task-cont')
  const projectAddTaskBtnList = document.querySelectorAll('.proj-add-task-btn')
  const projectDeleteBtnList = document.querySelectorAll('.proj-del-btn');
  const projectDeleteBtnListArr = Array.from(projectDeleteBtnList)
  const projectUIListArr = Array.from(projectUIList)
  const projectTaskListArr = Array.from(projectTaskList)
  const projectAddTaskBtnListArr = Array.from(projectAddTaskBtnList)
  for (let i = 0; i < projectUIListArr.length; i++) {
    projectUIListArr[i].setAttribute('id', `project-ID-${i}`)
    projectTaskListArr[i].setAttribute('id', `project-task-cont-ID-${i}`)
    projectAddTaskBtnListArr[i].setAttribute('id', `project-add-task-btn-ID-${i}`)
    projectDeleteBtnListArr[i].setAttribute('id', `project-delete-btn-ID-${i}`)
  }
}

export function EditTitle(target) {
  const titleProjectContainer = target.parentNode;
  let title = document.createElement('input');
  let titleInput = document.getElementById('edit-project-title-input');
  let newTitle = document.createElement('h3');
  newTitle.setAttribute('id', 'project-title');

  if (target.matches('.proj-title')) {
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
    titleProjectContainer.insertBefore(title, titleProjectContainer.children[0]);
    title.value = target.textContent;
  }
}

export function deleteProject(target) {
  let removeButtonParent = target.parentNode;
  let project = removeButtonParent.parentNode;
  if (target.matches('.proj-del-btn')) {
    project.remove()
  }
}

let target;
mainContentContainer.addEventListener('click', e => {
  target = e.target;
  if (target.matches('.proj-add-task-btn')) {
    Task.createFormUI(mainContentContainer)
  }
})
function addTaskToProject() {
  const buttonId = target.id.slice(-1)
  const projectTaskCont = document.getElementById(`project-task-cont-ID-${buttonId}`)
  return projectTaskCont
}

formAddTaskButton.addEventListener('click', () => {
  Task.removeForm(mainContentContainer)
})

mainContentContainer.addEventListener('click', e => {
  const target = e.target
  Task.removeTask(target)
  Task.EditTask(target)
})

PubSub.subscribe('getProjectTaskData', (msg, userTask) => {
  console.log(msg)
  Task.createTaskUI(addTaskToProject(target), userTask)
})

