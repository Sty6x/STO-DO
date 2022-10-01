const addProjectBtn = document.getElementById('add-project-btn');
const projectTitleInput = document.getElementById('project-title-input')
const submitInpBtn = document.getElementById('project-submit-input-btn')

class Project {
  taskList = [];
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  addTask(msg, task) {
    console.log(msg)
    taskList.push(task)
    console.log(taskList)
  }
  removeTask() {
    // something
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
  const projectTitle = projectTitleInput.value
  projectList.push(new Project(projectTitle, `project-ID-${incrementProjID++}`))
  console.log(projectList[projectList.length - 1])
  return projectList[projectList.length - 1]
}

submitInpBtn.addEventListener('click', e => {
  PubSub.publish('getProjectData', instantiateProject())
  // console.log(projectTitleInput.value)
})

let arr = []
function pushSomething(msg, task) {
  console.log(msg)
  arr.push(task)
  console.log(arr)
}
// cannot use the addTask method from project object 
// but does okay with normal function
// suspicion is that the instantiateProject is instantiate NOOO
// problem might be from taskList property from project object
// PubSub.subscribe('getTaskData', (msg, task) => {
//   console.log('from project')
//   instantiateProject().addTask(msg, task)
// })
PubSub.subscribe('getTaskData', instantiateProject().addTask)

