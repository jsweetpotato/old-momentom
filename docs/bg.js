const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber){
    const image = new Image();
    image.src = `/bg/${imgNumber+1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){

    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNum = genRandom();
    paintImg(randomNum)
}
init();