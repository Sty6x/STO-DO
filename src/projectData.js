const addProjectBtn = document.getElementById('add-project-btn');
console.log(addProjectBtn)

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
    for (let i = 1; i < this.taskList.length; i++) {
      this.taskList.pop(i)
    }
  }
}

const projectList = []
