var box = document.querySelector("#box");
var circle = document.querySelector("#circle");
var body = document.querySelector("body");
var clicked = false;

box.addEventListener("click", changePosition, false);
body.addEventListener("click", displayMessage, false);

function changePosition(e) {
    clicked = true;
    var boxPosition = getPosition(box);
    var yPosition = e.clientY - (circle.offsetHeight/2) - boxPosition.y;
    var xPosition = e.clientX - (circle.offsetWidth/2) - boxPosition.x;
    circle.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
}


function getPosition(element){
    var xPosition = 0;
    var yPosition = 0;
    while (element){
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {x: xPosition, y: yPosition};
}

function displayMessage(){
    var message = document.querySelector("#message");
    if(clicked){
        message.textContent = "";
        clicked = false;
        return;
    } else {
        message.textContent = "Naciśnij wewnątrz pudełka";
    }
}