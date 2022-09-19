const priorityButtonContainer = document.getElementById('form-priority-buttons');
const userDesc = document.getElementById('desc')
const userTitle = document.getElementById('title')
const inputContainer = document.querySelectorAll('.input-container')
const formAddTaskButton = document.getElementById('form-add-button');
// const prioritybuttons = document.getElementById()



let priority;
priorityButtonContainer.addEventListener('click', event => {
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
})



function clearInput() {
    userDesc.value = '';
    userTitle.value = '';
    // priority = '';
};

const userTasks = [{}]
function storeUserTask(obj) {
    userTasks.push(obj)
    console.log(userTasks)
};


function getUserData() {
    let descInput;
    let titleInput;
    let id;
    descInput = userDesc.value;
    titleInput = userTitle.value;
    for(let i = 0; i < userTasks.length; i++){
        id = i;
    }
    if (priority == ''){
        priority = 'var(--dark)';
    }
    return {
        titleInput,
        descInput,
        priority,
        id
    };
};

formAddTaskButton.addEventListener('click', e => {
    e.preventDefault();
    // use this logic to throw an error if input is empty
    if(userTitle.value == ''){
        console.log('need title');
        return;
    }else{
        PubSub.publish('getTaskData',getUserData())
        storeUserTask(getUserData());
        clearInput();
    }
});