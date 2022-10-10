export const upComing = 'upComing task'
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
}

PubSub.subscribe('getTaskData', checkTaskDate)

