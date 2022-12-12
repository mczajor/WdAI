//Game constants
const SPAWNCHANCE = 20;
const SHOTPENALTY = 6;
const ZOOMBIEKILLREWARD = 12;

const zoombieRunTime = {};

const jsonurl = "https://jsonblob.com/api/jsonBlob/1048618922164895744";
const board = document.querySelector("#board");
const scoreElement = document.querySelector("#score");
const healthElement = document.querySelector("#health");
const menuElement = document.querySelector("#usernameprompt-container");
const hsBoxElement = document.querySelector("#hs-container");
const mouseCursor = document.querySelector("#customcursor");



function moveZoombie(zoombieElement, interval){
    const offset = 200; //start position for the image slicer
    var currBackgroundPos = 200;
    var currPosition = 0;
    zoombieRunTime[zoombieElement.id] = setInterval ( () => {
        zoombieElement.style.backgroundPosition = currBackgroundPos +"px 0px";
        zoombieElement.style.left = 101 - currPosition + "vw";
        currBackgroundPos -= offset
        currPosition++;
        if(currPosition==110){
            zoombieElement.remove();
            health -= 1;
            updateHealth();
            clearInterval(zoombieRunTime[zoombieElement.id]);
        }
    } , interval );
}

function spawnZoombie(){
    const interval = ((Math.round(Math.random()*4))+1)*10;
    const bottom = Math.round(Math.random()*15);
    const size = Math.round((((Math.random()*7+7))/10)*100)/100;
    const zoombieElement = document.createElement("div");

    zoombieElement.classList.add("zoombie");
    zoombieElement.setAttribute("id", zId);
    zoombieElement.addEventListener("click", zoombieShot);
    zoombieElement.style.bottom = bottom + "vh";
    zoombieElement.style.left = 101 + "vw";
    zoombieElement.style.transform = "scale(" + size + ")";

    board.appendChild(zoombieElement);
    zId++;
    moveZoombie(zoombieElement, interval);
}



function updateScore(){
    scoreElement.textContent="Score:" + score;
}

function updateHealth(){
    healthElement.textContent = "Lives: " + health;
    if(health <= 0)
        endGame();
}


function boardShot(){
    score -= SHOTPENALTY;
    updateScore();
}

function zoombieShot(){
    score += (ZOOMBIEKILLREWARD + SHOTPENALTY);
    updateScore();
    clearInterval(zoombieRunTime[this.id]);
    this.remove();
}

function restartGame(){
    health = 3;
    score = 0;
    zId = 0;
    hsBoxElement.style.transform = "translateY(-1000%)";
    board.replaceChildren();
    startGame();
}

function followCursor(e){
    mouseCursor.style.top = e.clientY + "px";
    mouseCursor.style.left = e.clientX + "px";
}



function endGame(){
    clearInterval(gameRunning);
    Object.keys(zoombieRunTime).forEach(function(key) {
        clearInterval(zoombieRunTime[key]);
    });
    board.removeEventListener("click", boardShot);
    highscoresPrompt();
}


function startGame(){
    document.body.style.cursor="none";
    updateHealth();
    updateScore();
    board.addEventListener("click", boardShot);
    window.addEventListener("mousemove", followCursor);
    gameRunning = setInterval ( () => {
        const rand = Math.round(Math.random()*100);
        if(rand < SPAWNCHANCE)
            spawnZoombie();
    } , 200);
}


function loadPage(){
    menuElement.style.transform = "translateY(0%)";
    document.getElementById("startgame").addEventListener("click",function(){
        var form = document.getElementById("username");
        if(!form.checkValidity()){
            document.getElementById("username-warning").textContent = "Please enter a username";
            return;
        }
        menuElement.style.transform = "translateY(-1000%)";
        userName = form.value;
        startGame();
        });
}


function cmpFn(a,b){
    return b["score"] - a["score"];
}


async function highscoresPrompt(){
    window.removeEventListener("mousemove", followCursor);
    document.body.style.cursor="auto";
    hsBoxElement.style.transform = "translateY(0%)";
    document.getElementById("restart").addEventListener("click",restartGame);
    var data = await fetch(jsonurl);
    var json = await data.json();
    updateHighscores(json);
}
async function updateHighscores(json){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    data = json["highscores"];
    data.push({"name": userName,"score":score, "date":today});
    data = data.sort(cmpFn);
    var entries = document.querySelectorAll("#hs-list>li");
    for (var i = 0; i < entries.length; i++) {
        entries[i].remove();
    }
    var hsList = document.querySelector("#hs-list");
    for (let i = 0; i < data.length; i++){
        if (i==7)
            break;
        var entry = document.createElement("li");
        entry.textContent = data[i]["name"]+ " pkt: " + data[i]["score"] + '     ' + data[i]["date"];
        hsList.appendChild(entry);
    }
    await sendScore(json);
}

async function sendScore(json = {}) {
    const response = await fetch(url, {
      method: 'PUT', 
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });
    return response.json(url);
}

var zId = 0;
var userName = "";
var score = 0;
var health = 3;
var gameRunning;


loadPage();