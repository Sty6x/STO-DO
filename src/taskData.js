const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const addTaskButton = document.getElementById('form-add-button');
let color;

priorityButtonContainer.addEventListener('click', e => {
    console.log(e.target)
    color = getPriority(e)
    console.log(color)
})

function getPriority(event){
    let priority;
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
function GetUserInput(priority) {
    let descInput;
    let titleInput;
    descInput = userDesc.value;
    console.log(descInput)
    titleInput = userTitle.value;
    console.log(titleInput)
    return {
        titleInput,
        descInput,
        priority
    }

}

function clearInput(color){
    userDesc.value = '';
    userTitle.value= '';
    color = ''
}
addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(color)
    console.log(GetUserInput(color))
    clearInput(color)  
    console.log(GetUserInput(color))
})