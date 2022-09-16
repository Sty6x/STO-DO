const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')


function getUserInput(){    
let descInput;
let titleInput;
inputContainer.forEach(input => {
    input.addEventListener('keypress',()=>{
        descInput = userDesc.value;
        console.log(descInput)
        titleInput = userTitle.value;
        console.log(titleInput)
    })
});
return{
    descInput,
    titleInput
}

}

function getPriority(e) {
    let priorityColor;
    if (e.target.matches('#very-important')) {
        console.log('very important')
        priorityColor = '#bf616a';
    }
    else if (e.target.matches('#important')) {
        console.log('important')
        priorityColor = '#ebcb8b';
    }
    else if (e.target.matches('#less-important')) {
        console.log('less important')
        priorityColor = '#a3be8c';
    }
    return priorityColor
}

priorityButtonContainer.addEventListener('click', e => {
    console.log(e.target)
    console.log(getPriority(e))

})