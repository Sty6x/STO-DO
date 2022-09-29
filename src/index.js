import PubSub from "pubsub-js"
import { createTdTaskUI } from './todayUI'
import './styles.css';
import './projectStyles.css'
import { createProjectAppUI } from "./projectApp";
import { format } from 'date-fns'
const mainContentContainer = document.getElementById('main-content-container')
const menuButton = document.getElementById('hamburger-menu')
const sideBarContainer = document.getElementById('sidebar-container')
const sideBar = document.querySelector('.sidebar')
const headerDate = format(new Date(), 'E MMM dd')
const headerTextDateContainer = document.getElementById('header-text-date-container')
const headerDateDisplay = document.createElement('small')
const tabButtons = document.querySelector('.sidebar');
headerDateDisplay.textContent = headerDate;
headerTextDateContainer.appendChild(headerDateDisplay)
headerTextDateContainer.setAttribute('style', 'display:flex; gap:10px; margin-right:5em;')
headerDateDisplay.setAttribute('style', 'white-space:nowrap;align-self:end; font-family:"Montserrat-Reg"; color: var(--text)')
console.log(tabButtons)

tabButtons.addEventListener('click', e => {
  const target = e.target;
  // console.log(target)
  if (target.closest('.td-t')) {
    console.log('todays section')
    if (mainContentContainer.children[1].id !== 'td-up-main-task-container') {
      mainContentContainer.removeChild(mainContentContainer.children[1])
      createTdTaskUI()
    }
  }
  if (target.closest('.up-t')) {
    console.log('upcoming section')
    if (mainContentContainer.children[1].id !== 'project-app-container') {
      mainContentContainer.removeChild(mainContentContainer.children[1])
      createProjectAppUI();
    }
  }

  if (target.closest('.prj')) {
    console.log('project section')
  }
})
function changeSidebar() {
  if (!sideBarContainer.classList.contains('sidebar-active')) {
    console.log('has')
    sideBarContainer.setAttribute('class', 'sidebar-active')
    sideBarContainer.appendChild(sideBar)
  } else {
    sideBarContainer.setAttribute('class', 'sidebar-inactive')
    sideBarContainer.removeChild(sideBar)
  }
}
menuButton.addEventListener('click', changeSidebar);
