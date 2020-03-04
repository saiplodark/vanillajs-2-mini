function addToDo(event){
    event.preventDefault();
    
    const todo = document.createElement('li')
    todo.innerText = document.querySelector('#item').value;
    todo.addEventListener("click", completeToDo)

    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener("click", removeToDo);
    todo.appendChild(button);
    
    const list = document.querySelector('ul');
    list.appendChild(todo)

    document.querySelector('#item').value='';
}

document.querySelector('form').addEventListener("submit", addToDo)

function removeToDo(event){
    event.target.parentNode.remove();
}

function completeToDo(){
    const value = event.target.getAttribute("aria-checked")
    if (value !== 'true'){
        event.target.setAttribute("aria-checked", "true")
    }else{
        event.target.setAttribute("aria-checked", "false")
    }

}