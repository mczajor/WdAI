async function getData(){
    var res = await fetch("employees.json");
    var json = await res.json();
    return json;
}

function loadCard(id, data){
    var elName = document.getElementById("name");
    var elPos = document.getElementById("position");
    var elDesc = document.getElementById("info");
    var elImg = document.getElementById("photo");

    var name = data[id].name;
    var pos = data[id].jobTitle;
    var desc = data[id].description;
    var img = data[id].img;

    elName.textContent = name;
    elPos.textContent = pos;
    elDesc.textContent = desc;
    elImg.srcset = "photos/" + img;


}
var data;
var id = 0;

async function loadData(){
    var data = await getData();
    data = data.employees;
    loadCard(0,data);
    document.getElementById("left").addEventListener('click', function() {
        id--;
        if(id<0) 
            id = data.length-1;

        loadCard(id%data.length, data);
    } )
    
    document.getElementById("right").addEventListener('click', function() {
        id++;
        loadCard(id%data.length, data);
    } )

    document.getElementById("random").addEventListener('click', function() {
        id = Math.round(Math.random()*data.length);
        loadCard(id%data.length,data);
    })
}

loadData();