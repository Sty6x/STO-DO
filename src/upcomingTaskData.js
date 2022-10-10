export const upComing = 'upcoming task init'
import * as Task from './taskUI'
const mainContainer = document.getElementById('main-content-container')
export const upContainer = document.createElement('div')
upContainer.setAttribute('id', 'up-container')

mainContainer.appendChild(upContainer)
import isFuture from 'date-fns/isFuture'
import parseISO from 'date-fns/parseISO'
const taskArr = []
export function checkTaskDate(msg, userData) {
  console.log(msg)
  if (isFuture(parseISO(userData.taskDate))) {
    storeTaskData(userData)
  } else {
    console.log('nada')
  }
}
export function storeTaskData(data) {
  taskArr.push(data)
  console.table(taskArr)
  Task.createTaskUI(upContainer, data)
}
PubSub.subscribe('getTaskData', checkTaskDate)

