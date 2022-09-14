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


createTdTaskUI()


// creates task from user input
function createTasks(tdContainer,title,description){
    let task = document.createElement('div');
    // container => |     |title:      |                |    |
    //              |     |Description:|                |o o o| <= container
    task.setAttribute('class','tasks');
    // let checkBox = document.createElement('')
    let taskTitle = document.createElement('h3');
    let taskDesc = document.createElement('p')
    let titleAndDescContainer = document.createElement('div')
    let taskSettings = document.createElement('button')
    let taskSettingContainer = document.createElement('div')
    task.append(titleAndDescContainer,taskSettingContainer)
    taskSettingContainer.setAttribute('id',('task-setting-container'))
    taskSettingContainer.appendChild(taskSettings)
    titleAndDescContainer.setAttribute('class','title-desc-container')
    tdContainer.appendChild(task)
    titleAndDescContainer.append(taskTitle,taskDesc)
    taskTitle.setAttribute('id','task-title')
    taskDesc.setAttribute('id','task-desc')
    taskSettings.setAttribute('id','task-setting')
    taskTitle.textContent=title
    taskDesc.textContent=description
    taskSettings.textContent = '...'
}

createTasks(tdMainContainer,'Do Something','Description of something you want to do')

addTaskbutton.addEventListener('click',()=> {
    createTasks(tdMainContainer,'Title Here','Make it do something, i dont care')
    console.log('here')
})