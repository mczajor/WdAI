function click(box){
    if (box.classList.contains("disabled") || alreadyClicked){
        return;
    } else if(!propagation)
        alreadyClicked = true;
    switch(box.id){
        case "box-1":
            addPoints(1);
            text[0] = "nacisnąłeś niebieski o wartości 1";
            break;
        case "box-2":
            addPoints(2);
            text[1] = "nacisnąłeś czerwony o wartości 2";
            break;
        case "box-3":
            addPoints(5);
            text[2] = "nacisnąłeś żółty o wartości 5";
            break;
    }
    if (points > 30){
        document.getElementById("box-2").classList.add("disabled");
    }
    if (points > 50){
        document.getElementById("box-3").classList.add("disabled");
    }
}


function addPoints(add_points){
    points += add_points;
    document.getElementById("points").textContent = "Punkty:" + points;
}


function propagationChange(){
    var probutton = document.getElementById("propagation")
    switch(propagation){
        case true:
            probutton.textContent = "Wlacz propagacje";
            propagation = false;
            break;
        case false:
            probutton.textContent = "Wylacz propagacje";
            propagation = true;
            break;
    }
}


function textreset(){
    for(let i = 0; i < text.length; i++){
        text[i] = "";
    }
}


function displayinfo(){
    for(let i = 0; i < text.length; i++){
        document.querySelector("#info"+(i+1)).textContent = text[i];
    }
}


function reset(){
    points = 0;
    document.getElementById("points").textContent = "Punkty: " + points;
    document.getElementById("box-2").classList.remove("disabled");
    document.getElementById("box-3").classList.remove("disabled");
    if (propagation == false){
        propagationChange();
    }
    textreset();
    displayinfo();
}



document.getElementById("box-3").onclick = function(){
    click(this);
}

document.getElementById("box-2").onclick = function(){
    click(this);
}

document.getElementById("box-1").onclick = function(){
    click(this);
    displayinfo();
    alreadyClicked = false;
    textreset();
}

document.getElementById("reset").onclick = reset;
document.getElementById("propagation").onclick = propagationChange;
var alreadyClicked = false;
var propagation = true;
var points = 0;
const text = ["","",""];