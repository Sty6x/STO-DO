import PubSub from "pubsub-js"
import './style.css';
import { format } from 'date-fns'
const menuButton = document.getElementById('hamburger-menu')
const sideBarContainer = document.getElementById('sidebar-container')
const sideBar = document.querySelector('.sidebar')
let headerDate = format(new Date(), 'E MMM dd')
const headerTextDateContainer = document.getElementById('header-text-date-container')
const headerDateDisplay = document.createElement('small')
headerDateDisplay.textContent = headerDate;
headerTextDateContainer.appendChild(headerDateDisplay)
headerTextDateContainer.setAttribute('style', 'display:flex; gap:10px;')
headerDateDisplay.setAttribute('style', 'align-self:end; font-family:"Montserrat-Reg"; color: var(--text)')
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
