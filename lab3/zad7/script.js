async function loadData(){
    var response = await fetch('http://localhost:3000/cities');
    var data = await response.json();
    return data;
}


function answerA(data){
    var filteredData = data.filter(function(m){
        return m.province === "małopolskie";
    });
    var cities = "";
    for(var city in filteredData){
        cities += filteredData[city].name + ", ";
    }
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
    for(var city in filteredData){
        cities += filteredData[city].name + ", ";
    }
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("answerB").textContent = cities;
}

function answerC(data){
    var populationDensity = new Array;
    for(var city in data){
        populationDensity.push([data[city].name, data[city].people / data[city].area]);
    }
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
    for(var city in filteredData){
        cities += filteredData[city].name + " city, ";
    }
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("answerD").textContent = cities;

}

function answerE(data){
    var lessThan8000People = 0;
    var moreThan8000People = 0;
    for(var city in data){
        if(data[city].people < 8000){
            lessThan8000People++;
        } else {
            moreThan8000People++;
        }
    }
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
    for(var city in filteredData){
        sum += filteredData[city].people;
        count++;
    }
    document.getElementById("answerF").textContent = "Srednia liczba mieszkancow miast z powiatow zaczynajacych sie na P wynosi: " + sum / count;
}

function answerG(data){
    var filteredData = data.filter(function(m){
        return m.province === "pomorskie";
    });
    for(var city in filteredData){
        if(filteredData[city].people<5000){
            document.getElementById("answerG").textContent = "W wojewodztwie pomorskim jest miasto z mniej niz 5000 mieszkancow: " + filteredData[city].name + ".";
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