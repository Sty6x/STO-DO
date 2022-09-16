const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const addTaskButton = document.getElementById('form-add-button');




priorityButtonContainer.addEventListener('click', getPriority)

function getPriority(event) {
    let priority;
    console.log(event.target)
    if (event.target.matches('#very-important')) {
        console.log('very important')
        priority = '#bf616a';
    } else if (event.target.matches('#important')) {
        console.log('important')
        priority = '#ebcb8b';
    } else if (event.target.matches('#less-important')) {
        console.log('less important')
        priority = '#a3be8c';
    }
    return priority
}
function GetUserInput() {
    let descInput;
    let titleInput;
    descInput = userDesc.value;
    titleInput = userTitle.value;
    return {
        titleInput,
        descInput,
        
    }
}

function clearInput() {
    userDesc.value = '';
    userTitle.value = '';

}

const userTasks = []
function storeUserTask(obj) {
    userTasks.push(obj)
    console.log(userTasks)
}

addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(GetUserInput())
    storeUserTask(GetUserInput())
})