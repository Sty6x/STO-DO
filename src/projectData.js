const addProjectBtn = document.getElementById('add-project-btn');
let projectTitleInput = document.getElementById('project-title-input')
const submitInpBtn = document.getElementById('project-submit-input-btn')
const projectAppContainer = document.getElementById('project-app-container')
class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.taskList = [];
  }

  addTask(msg, task) {
    console.log(msg)
    this.taskList.push(task)
  }
  removeTask(taskIndex) {
    this.taskList.pop(taskIndex)
  }
  deleteProject() {
    for (let i = 0; i < this.taskList.length; i++) {
      this.taskList.pop(i)
    }
  }
}

const projectList = []
let incrementProjID = 0;


function instantiateProject() {
  let projectTitle = projectTitleInput.value
  projectList.push(new Project(projectTitle, `project-ID-${incrementProjID++}`))
  projectTitleInput.value = '';
  return projectList[projectList.length - 1]
}

submitInpBtn.addEventListener('click', () => {
  PubSub.publish('getProjectData', instantiateProject())
})

let target;
projectAppContainer.addEventListener('click', e => {
  target = e.target
  deleteProj(target)
  removeTask(target)
})

function deleteProj(target) {
  if (target.matches('.proj-del-btn')) {
    const projectPosition = target.id.slice(-1)
    projectList[projectPosition].deleteProject()
    projectList.pop(projectPosition)
  }
}

function removeTask(target) {
  if (target.matches('#remove-button')) {
    let removeTaskBtnParent = target.parentNode;
    let taskContainer = removeTaskBtnParent.parentNode
    let projectContainerChildren = taskContainer.parentNode.children
    let projectContainer = taskContainer.parentNode.id.slice(-1)
    let task = Array.from(projectContainerChildren).indexOf(taskContainer)
    projectList[projectContainer].removeTask(task)
  }
}

function addTaskToProjTaskList() {
  const buttonId = target.id.slice(-1)
  const project = projectList[buttonId]
  return project
}
PubSub.subscribe('getProjectTaskData', (msg, task) => {
  addTaskToProjTaskList().addTask(msg, task)
})

