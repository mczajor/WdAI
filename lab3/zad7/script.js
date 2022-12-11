async function loadData(){
    var response = await fetch('http://localhost:3000/cities');
    var data = await response.json();
    console.log("chuj");
    return data;
}


function answerA(data){
    var filteredData = data.filter(function(m){
        return m.province === "małopolskie";
    });
    var cities = "";
    filteredData.forEach(element => cities += element.name + ", ");
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("answerA").textContent = cities;
}


function atLeastTwoAs(name){
    var count = 0;
    for(var i = 0; i < name.length; i++){
        if(name[i] === "a" || name[i] === "A"){
            count++;
        }
        if (count == 2){
            return true;
        }
    }
    return false;
}

function answerB(data){
    var filteredData = data.filter(function(m){
        return atLeastTwoAs(m.name);
    });
    var cities = "";
    filteredData.forEach(element => cities += element.name + ", ");
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("answerB").textContent = cities;
}

function answerC(data){
    var populationDensity = new Array;
    data.forEach(city => populationDensity.push([city.name, city.people / city.area]));
    populationDensity.sort(function(a, b){
        return b[1] - a[1];
    });
    document.getElementById("answerC").textContent = populationDensity[4][0];
}

function answerD(data){
    var filteredData = data.filter(function(m){
        return m.people > 100000;
    });
    var cities = "";
    filteredData.forEach(element => cities += element.name + " city, ");
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("answerD").textContent = cities;

}

function answerE(data){
    var lessThan8000People = 0;
    var moreThan8000People = 0;
    data.forEach(element => {
        if(element.people < 8000){
            lessThan8000People++;
        } else {
            moreThan8000People++;
        }
    });
    if (lessThan8000People > moreThan8000People){
        document.getElementById("answerE").textContent = "Jest wiecej miast z mniej niz 8000 mieszkancow. A dokladnie: " + lessThan8000People + " miast.";
    } else {
        document.getElementById("answerE").textContent = "Jest wiecej miast z wiecej niz 8000 mieszkancow. A dokladnie: " + moreThan8000People + " miast.";
    }
}

function answerF(data){
    var filteredData = data.filter(function(m){
        return m.township[0] === "P";
    });
    var sum = 0;
    var count = 0;
    filteredData.forEach(element => {
        sum += element.people;
        count++;
    });
    document.getElementById("answerF").textContent = "Srednia liczba mieszkancow miast z powiatow zaczynajacych sie na P wynosi: " + sum / count;
}

function answerG(data){
    var filteredData = data.filter(function(m){
        return m.province === "pomorskie";
    });
    for(var city in filteredData){
        if(filteredData[city].people<5000){
            document.getElementById("answerG").textContent = "W wojewodztwie pomorskim jest conajmniej jedno miasto z mniej niz 5000 mieszkancow: " + filteredData[city].name + ".";
            return;
        }
    }
    document.getElementById("answerG").textContent = "W wojewodztwie pomorskim nie ma miasta z mniej niz 5000 mieszkancow.";
}


async function loadSite(){
    var data = await loadData();
    answerA(data);
    answerB(data);
    answerC(data);
    answerD(data);
    answerE(data);
    answerF(data);
    answerG(data);
}

loadSite();

document.querySelector("#buttonA").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerA");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});

document.querySelector("#buttonB").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerB");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});
document.querySelector("#buttonC").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerC");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});
document.querySelector("#buttonD").addEventListener("click",() =>{
    var text = document.querySelector("#answerD");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});
document.querySelector("#buttonE").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerE");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});
document.querySelector("#buttonF").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerF");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});
document.querySelector("#buttonG").addEventListener("click",() =>{ 
    var text = document.querySelector("#answerG");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    
});