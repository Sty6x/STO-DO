const body = document.querySelector('body')
const sbMainContainer = document.getElementById('sb-main-container')
const mainContentContainer = document.getElementById('main-content-container')


const headerContainer = document.createElement('div')
const todayHeader = document.createElement('h1') //style
const headerOptionContainer = document.createElement('ul')


const tdMainContainer = document.createElement('div')
const tdTasksContainer = document.createElement('div')
const addTaskbutton = document.createElement('button')

const optionArr = [] //style
for (let i = 0; i < 2; i++) {
    let option = document.createElement('li')
    optionArr.push(option)
    // optionArr[i].textContent = `${i}`
    headerOptionContainer.append(optionArr[i]) //style
    optionArr[i].setAttribute('class',`option-${i}`)
    optionArr[i].classList.add('option-icons')
}


function createTdTask() {
    mainContentContainer.appendChild(headerContainer)
    headerContainer.setAttribute('id','header-container')
    mainContentContainer.appendChild(tdMainContainer)
    tdMainContainer.setAttribute('id','td-main-task-container')
    tdMainContainer.appendChild(tdTasksContainer)
    tdTasksContainer.setAttribute('id','td-task-container')
    headerContainer.append(todayHeader)
    todayHeader.setAttribute('id','today-header') //style
    headerContainer.appendChild(headerOptionContainer)
    headerOptionContainer.setAttribute('id','header-option-container')
    todayHeader.textContent = "TODAY"
}
createTdTask()