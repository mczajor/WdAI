var prev = document.getElementById("left");
var next = document.getElementById("right");
var container = document.querySelector(".slide-container");
var random = document.getElementById("random");
var currId = 0;

prev.addEventListener('click', function(){
    currId--;
    changeSlide();
});
next.addEventListener('click', function(){
    currId++;
    changeSlide();
});

random.addEventListener('click', function(){
    currId = Math.floor(Math.random() * container.children.length-1);
    changeSlide();
});

function changeSlide(){
    if(currId < 0){
        currId = container.children.length-1;
    } else if(currId > container.children.length-1){
        currId = 0;
    }
    var transformValue = 300 - (currId * 1700);
    container.style.transform = "translate3d(" + transformValue + "px, 0, 0)";
}
