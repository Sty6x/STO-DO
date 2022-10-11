import PubSub from "pubsub-js"
import { createTdTaskUI } from './todayUI'
import { createProjectAppUI } from "./projectApp";
import './styles.css';
import './projectStyles.css'
import './upcomingStyles.css'
import { format } from 'date-fns'
import { upContainer } from "./upcomingTaskData";
import * as Project from './projectUI'
import * as Task from './taskUI'
const mainContentContainer = document.getElementById('main-content-container')
const projectAppCont = document.getElementById('project-app-container')
const todayAppcont = document.getElementById(('td-up-main-task-container'))
const menuButton = document.getElementById('hamburger-menu')
const sideBarContainer = document.getElementById('sidebar-container')
const sideBar = document.querySelector('.sidebar')
const headerDate = format(new Date(), 'E MMM dd')
const headerTextDateContainer = document.getElementById('header-text-date-container')
const headerDateDisplay = document.createElement('small')
const tabButtons = document.querySelector('.sidebar');
const header = document.getElementById("header-text"); //style
const tdUpMainContainer = document.getElementById("td-up-main-task-container");
headerDateDisplay.textContent = headerDate;
headerTextDateContainer.appendChild(headerDateDisplay)
headerTextDateContainer.setAttribute('style', 'display:flex; flex-direction:column; gap:10px; margin-right:5em;')
headerDateDisplay.setAttribute('style', 'white-space:nowrap; font-family:"Montserrat-Reg"; color: var(--text)')

function changeSidebar() {
  if (!sideBarContainer.classList.contains('sidebar-active')) {
    sideBarContainer.setAttribute('class', 'sidebar-active')
    mainContentContainer.classList.remove('no-sb-main-content-container')
    sideBarContainer.appendChild(sideBar)
  } else {
    sideBarContainer.setAttribute('class', 'sidebar-inactive')
    mainContentContainer.setAttribute('class', 'no-sb-main-content-container')
    sideBarContainer.removeChild(sideBar)
  }
}

function defaultTasks(count) {
  for (let i = 0; i < count; i++) {
    if (i > 0) {
      Task.createTaskUI(upContainer, { titleInput: `My Task-${i}`, dueDate: i, descInput: `My Task Desription`, priority: '#a3be8c' })
    } else {
      Task.createTaskUI(tdUpMainContainer, { titleInput: `My Task-${i}`, dueDate: i, descInput: `My Task Desription`, priority: '#a3be8c' })
    }
  }
}
function defaultProjects() {
  Project.createProjectUI(projectAppCont, { title: 'My Project' })
  let projectTaskCont = document.getElementById(`project-task-cont-ID-0`)
  Task.createTaskUI(projectTaskCont, { titleInput: `My Task-1`, dueDate: 0, descInput: `My Task Desription`, priority: '#a3be8c' })
}

if (localStorage.length === 0) {
  defaultTasks(3)
  defaultProjects()
}

tabButtons.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.td-t')) {
    header.textContent = 'TODAY'
    sideBar.children[0].classList.add('active')
    sideBar.children[1].classList.remove('active')
    sideBar.children[2].classList.remove('active')
    todayAppcont.setAttribute('style', 'display:flex;')
    projectAppCont.setAttribute('style', 'display:none;')
    upContainer.setAttribute('style', 'display:none')
  }
  else if (target.closest('.prj')) {
    sideBar.children[0].classList.remove('active')
    sideBar.children[1].classList.add('active')
    sideBar.children[2].classList.remove('active')
    header.textContent = 'PROJECTS'
    projectAppCont.setAttribute('style', 'display:flex;')
    todayAppcont.setAttribute('style', 'display:none;')
    upContainer.setAttribute('style', 'display:none')
  }
  else if (target.closest('.up-t')) {
    sideBar.children[0].classList.remove('active')
    sideBar.children[1].classList.remove('active')
    sideBar.children[2].classList.add('active')
    header.textContent = 'UPCOMING TASKS'
    upContainer.setAttribute('style', 'display:flex;')
    projectAppCont.setAttribute('style', 'display:none;')
    todayAppcont.setAttribute('style', 'display:none;')
  }
})
menuButton.addEventListener('click', changeSidebar);
