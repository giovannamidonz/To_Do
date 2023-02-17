// seleção de elementos
const todoForm = document.querySelector("#to-do-form");
const todoInput = document.querySelector("#to-do-input");
const todoList = document.querySelector("#to-do-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// funções 
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();


};


const toggleForm = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};


// Eventos 

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue)
    }
});


document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parantEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();
    

    editInput.value = todoTitle
    oldInputValue.value = todoTitle
    
    }


});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})
