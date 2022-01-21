const toDoForm = document.querySelector(".jsToDo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".jsToDoList");

const TODO_LS = 'toDos';


let toDos = [];

function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function showToDo(text){
    const li = document.createElement("li");
    const delBtn  = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delBtn.innerText = "✖"; 
    delBtn.addEventListener("click", delToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}

function loadTodos(){
    const loadToDos = localStorage.getItem(TODO_LS);
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos); 
        parsedToDos.forEach(function(toDo){
            showToDo(toDo.text);
        })
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();