const addProjectBtn = document.getElementById('add-project-btn');

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

  // pass in a user title input on the first argumet
  projectList.push(new Project('my First Project', `project-ID-${incrementProjID++}`))
  console.log(projectList)
}

addProjectBtn.addEventListener('click', e => {
  instantiateProject()
})
