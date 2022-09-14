const body = document.querySelector('body')
const sbMainContainer = document.getElementById('sb-main-container')
const mainContentContainer = document.getElementById('main-content-container')


const headerContainer = document.getElementById('header-container')
const todayHeader = document.getElementById('header-text') //style
const headerOptionContainer = document.getElementById('header-option-container')
const options = headerOptionContainer.children;


for(let i = 0;i < options.length;i++){
    options[i].setAttribute('id',`option-${i}`)
    options[i].classList.add('option-icons')    
}

const tdMainContainer = document.createElement('div')
const tdTasksContainer = document.createElement('div')
const addTaskbutton = document.createElement('button')
const addTaskContainer = document.createElement('div')

function createTdTaskUI() {
    mainContentContainer.appendChild(tdMainContainer)
    tdMainContainer.setAttribute('id', 'td-up-main-task-container')
    todayHeader.textContent = "TODAY"
    addTaskbutton.setAttribute('id','add-task-button')
    tdMainContainer.appendChild(addTaskContainer)
    addTaskContainer.setAttribute('id','add-task-container')
    addTaskContainer.appendChild(addTaskbutton)
    addTaskbutton.textContent = 'Add Task'
}

addTaskbutton.addEventListener('click',()=> {
    console.log('here')
})
createTdTaskUI()


// creates task from user input
function createTasks(tdContainer){
    let task = document.createElement('div');
    // container => |     |title:      |                |    |
    //              |     |Description:|                |o o o| <= container
    task.setAttribute('id','task');
    // let checkBox = document.createElement('')
    let taskTitle = document.createElement('h3');
    let taskDesc = document.createElement('p')
    let titleAndDescContainer = document.createElement('div')
    let taskSettings = document.createElement('div')
    task.appendChild(titleAndDescContainer)
    tdContainer.appendChild(task)
    titleAndDescContainer.append(taskTitle,taskDesc,taskSettings)
    taskTitle.textContent='Add Title Here'
    taskDesc.textContent='Make it do something, i dont care'
}


createTasks(tdMainContainer)

createTasks(tdMainContainer)