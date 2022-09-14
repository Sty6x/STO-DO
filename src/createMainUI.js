const body = document.querySelector('body')
const sbMainContainer = document.getElementById('sb-main-container')
const mainContentContainer = document.getElementById('main-content-container')




const headerContainer = document.getElementById('header-container')
const todayHeader = document.getElementById('header-text') //style
const headerOptionContainer = document.getElementById('header-option-container')
const options = headerOptionContainer.children;
console.log(options)
//get header options children

for(let i = 0;i < options.length;i++){
    options[i].setAttribute('id',`option-${i}`)
    options[i].classList.add('option-icons')    
}

const tdMainContainer = document.createElement('div')
const tdTasksContainer = document.createElement('div')
const addTaskbutton = document.createElement('button')

function createTdTask() {
    mainContentContainer.appendChild(tdMainContainer)
    tdMainContainer.setAttribute('id', 'td-up-main-task-container')
    todayHeader.textContent = "TODAY"
    addTaskbutton.setAttribute('id','add-task-button')
    tdMainContainer.appendChild(addTaskbutton)
    addTaskbutton.textContent = 'Add Task'
}

addTaskbutton.addEventListener('click',()=> {
    console.log('here')
})
createTdTask()