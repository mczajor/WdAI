var propagation = true;
var points = 0;
var outer_text = "";
var middle_text = "";
var inner_text = "";


function click(box){
    if (box.classList.contains("disabled") || !box.classList.contains("clickable")){
        return;
    } else if(!propagation)
        markall();
    switch(box.id){
        case "outer-box":
            addPoints(1);
            outer_text += "nacisnąłeś niebieski o wartości 1";
            break;
        case "middle-box":
            addPoints(2);
            middle_text += "nacisnąłeś czerwony o wartości 2";
            break;
        case "inner-box":
            addPoints(5);
            inner_text += "nacisnąłeś żółty o wartości 5";
            break;
    }
    if (points > 30){
        document.getElementById("middle-box").classList.add("disabled");
    }
    if (points > 50){
        document.getElementById("inner-box").classList.add("disabled");
    }
}


function addPoints(add_points){
    points += add_points;
    document.getElementById("points").textContent = "Punkty:" + points;
}


function markall(){
    document.getElementById("inner-box").classList.remove("clickable");
    document.getElementById("middle-box").classList.remove("clickable");
    document.getElementById("outer-box").classList.remove("clickable");
}


function resetclicks(){
    document.getElementById("inner-box").classList.add("clickable");
    document.getElementById("middle-box").classList.add("clickable");
    document.getElementById("outer-box").classList.add("clickable");
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
    outer_text = "";
    middle_text = "";
    inner_text = ""
}


function displayinfo(){
    document.getElementById("info3").textContent = outer_text;
    document.getElementById("info2").textContent = middle_text;
    document.getElementById("info1").textContent = inner_text;
}

function reset(){
    points = 0;
    document.getElementById("points").textContent = "Punkty: " + points;
    document.getElementById("middle-box").classList.remove("disabled");
    document.getElementById("inner-box").classList.remove("disabled");
    if (propagation == false){
        propagationChange();
    }
    textreset();
    displayinfo();
}

document.getElementById("inner-box").onclick = function(){
    click(this);
}

document.getElementById("middle-box").onclick = function(){
    click(this);
}

document.getElementById("outer-box").onclick = function(){
    click(this);
    displayinfo();
    resetclicks();
    textreset();
}


document.getElementById("reset").onclick = reset;
document.getElementById("propagation").onclick = propagationChange;