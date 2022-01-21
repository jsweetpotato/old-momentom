const form = document.querySelector(".jsForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".jsGreet");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem (USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentUser = input.value;
    showName(currentUser);
    saveName(currentUser);
    // ask userName
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function showName(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    
    if (currentUser === null) {
        //userName is not
            askForName();
    } else {
        //userName is 
        showName(currentUser);
    }
}
 
function init(){
    loadName();
}
init();