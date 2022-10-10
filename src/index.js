import PubSub from "pubsub-js"
import { createTdTaskUI } from './todayUI'
import { createProjectAppUI } from "./projectApp";
import './styles.css';
import './projectStyles.css'
import { format } from 'date-fns'
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
headerDateDisplay.textContent = headerDate;
headerTextDateContainer.appendChild(headerDateDisplay)
headerTextDateContainer.setAttribute('style', 'display:flex; flex-direction:column; gap:10px; margin-right:5em;')
headerDateDisplay.setAttribute('style', 'white-space:nowrap; font-family:"Montserrat-Reg"; color: var(--text)')
import img from './resources/menu-2.png'
const myImage = new Image()
myImage.src = img
console.log(img)
tabButtons.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.td-t')) {
    header.textContent = 'TODAY'
    sideBar.children[0].classList.add('active')
    sideBar.children[2].classList.remove('active')
    projectAppCont.setAttribute('style', 'display:none;')
    todayAppcont.setAttribute('style', 'display:flex;')
  }
  else if (target.closest('.prj')) {
    sideBar.children[0].classList.remove('active')
    sideBar.children[2].classList.add('active')
    header.textContent = 'PROJECTS'
    projectAppCont.setAttribute('style', 'display:flex;')
    todayAppcont.setAttribute('style', 'display:none;')
  }
})
function changeSidebar() {
  if (!sideBarContainer.classList.contains('sidebar-active')) {
    sideBarContainer.setAttribute('class', 'sidebar-active')
    sideBarContainer.appendChild(sideBar)
  } else {
    sideBarContainer.setAttribute('class', 'sidebar-inactive')
    sideBarContainer.removeChild(sideBar)
  }
}
menuButton.addEventListener('click', changeSidebar);
