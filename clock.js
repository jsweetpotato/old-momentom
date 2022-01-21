const clockContainer = document.querySelector(".jsClock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    var meridiem = "AM"
    if (hours > 12) {
        meridiem = "PM"
    };

    if (hours > 12) {
        hours = hours - 12
    }; 
    
    if(10 > hours > 0){
        hours = `0${hours}`
        };

    if(hours == 0){
        hours=12;
    };
    clockTitle.innerText = `${meridiem} ${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${10 > seconds ? `0${seconds}` : seconds}`;
}

function init(){
    setInterval(getTime, 1000);
}

init();