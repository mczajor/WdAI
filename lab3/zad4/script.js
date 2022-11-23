var counter = 0;

function count(){
    var counterElement = document.getElementById("counter");
    if(counterElement.classList.contains("disabled"))
        return;
    counter++;
    counterElement.textContent = "" + counter;
}
function disable(){
    counter = 0;
    var counterElement = document.getElementById("counter");
    counterElement.classList.add("disabled");
    counterElement.textContent = "" + counter
}

function enable(){
    var counterElement = document.getElementById("counter");
    if(counterElement.classList.contains("disabled"))
        counterElement.classList.remove("disabled");
}


document.getElementById("add").onclick = count;
document.getElementById("disable").onclick = disable;
document.getElementById("enable").onclick = enable;
