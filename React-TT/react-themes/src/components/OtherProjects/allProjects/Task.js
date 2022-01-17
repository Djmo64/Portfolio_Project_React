var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-btn');
var todoList = document.querySelector('.todo-list');

// document.addEventListener('DOMContentLoaded',getsave);
if(!todoButton){
    
}else{
    todoButton.addEventListener('click', addTodo);
    
}
if(!todoList){
    
}else{
   todoList.addEventListener('click', listAction); 
}



function addTodo(e){
    e.preventDefault()
    
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoItem.appendChild(newTodo);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoItem.appendChild(checkButton);

    // autoSave(todoInput.value);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-btn");
    todoItem.appendChild(removeButton);

    todoList.appendChild(todoItem);
    todoInput.value = "";
}

function listAction(e){
    const className = e.target;

    if(className.classList[0] === 'remove-btn'){
        const parent = className.parentElement;
        parent.classList.add('vanish');
        // removeSave(parent);
        parent.addEventListener('transitionend', ()=>{
        parent.remove();
        });
        
    }
    if(className.classList[0] === 'check-btn'){
        const parent = className.parentElement;
        parent.classList.toggle("completed");
    } 

}

// function autoSave(todo){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// function getsave(){
   
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach((todo)=>{
//         const todoItem = document.createElement('div');
//         todoItem.classList.add('todo');
    
//         const newTodo = document.createElement('li');
//         newTodo.innerText = todo;
//         newTodo.classList.add('todo-item');
//         todoItem.appendChild(newTodo);
    
//         const checkButton = document.createElement('button');
//         checkButton.innerHTML = '<i class="fas fa-check"></i>';
//         checkButton.classList.add("check-btn");
//         todoItem.appendChild(checkButton);
    
    
//         const removeButton = document.createElement('button');
//         removeButton.innerHTML = '<i class="fas fa-trash"></i>';
//         removeButton.classList.add("remove-btn");
//         todoItem.appendChild(removeButton);
//         todoList.appendChild(todoItem);
        
//     })
// }
// function removeSave(todo){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }