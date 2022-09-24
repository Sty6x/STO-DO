import PubSub from "pubsub-js"
import './style.css';

const menuButton = document.getElementById('hamburger-menu')
const sideBarContainer = document.getElementById('sidebar-container')
const sideBar = document.querySelector('.sidebar')
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

menuButton.addEventListener('click', changeSidebar)
