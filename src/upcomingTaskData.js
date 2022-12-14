export const upComing = 'upcoming task init'
import * as Task from './taskUI'
import { format, subDays } from 'date-fns'
const mainContainer = document.getElementById('main-content-container')
export const upContainer = document.createElement('div')
upContainer.setAttribute('id', 'up-container')
const dateInput = document.getElementById('date-input')
dateInput.setAttribute('min', `${format(new Date(), 'yyyy-MM-d')}`)
mainContainer.appendChild(upContainer)
import isFuture from 'date-fns/isFuture'
import parseISO from 'date-fns/parseISO'
const taskArr = []
export function checkTaskDate(msg, userData) {
  if (isFuture(userData.taskDate)) {
    console.log('yes')
    storeTaskData(userData)
  }
}
export function storeTaskData(data) {
  taskArr.push(data)
  Task.createTaskUI(upContainer, data)
}
PubSub.subscribe('getTaskData', checkTaskDate)

