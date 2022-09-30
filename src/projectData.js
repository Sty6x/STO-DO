const addProjectBtn = document.getElementById('add-project-btn');
const projectTitleInput = document.getElementById('project-title-input')
const submitInpBtn = document.getElementById('project-submit-input-btn')

class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task)
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
  // pass in a user title input on the first argumet
  projectList.push(new Project(projectTitle, `project-ID-${incrementProjID++}`))
  console.log(projectList)
}
if (!submitInpBtn) {
  return
} else if (submitInpBtn) {
  submitInpBtn.addEventListener('click', e => {
    instantiateProject()
  })
}
