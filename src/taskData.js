const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const addTaskButton = document.getElementById('form-add-button');

function GetUserInput(getPriority) {
    let descInput;
    let titleInput;
    descInput = userDesc.value;
    console.log(descInput)
    titleInput = userTitle.value;
    console.log(titleInput)
    return {
        titleInput,
        descInput,
        getPriority
        
    }

}
// this is not running, it will only run after we press add task
// find a way for this to be independent
priorityButtonContainer.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.matches('#very-important')) {
        console.log('very important')
        getPriority = '#bf616a';
    } else if (e.target.matches('#important')) {
        console.log('important')
        getPriority = '#ebcb8b';
    } else if (e.target.matches('#less-important')) {
        console.log('less important')
        getPriority = '#a3be8c';
    }

})

addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target)
    console.log(GetUserInput())
})