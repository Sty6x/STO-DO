const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const addTaskButton = document.getElementById('form-add-button');

function GetUserInput() {
    let descInput;
    let titleInput;
    descInput = userDesc.value;
    console.log(descInput)
    titleInput = userTitle.value;
    console.log(titleInput)
    let getPriority;

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
    return {
        descInput,
        titleInput,
        getPriority
    }

}

addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target)
    console.log(GetUserInput())
})