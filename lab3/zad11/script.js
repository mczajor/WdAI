function sortByName(data){
  data.sort(function(a, b){
    if(a.name.common < b.name.common) { return -1; }
    if(a.name.common > b.name.common) { return 1; }
    return 0;
  });
  return data;
}

function sortByPopulation(data){
  data.sort(function(a, b){
    if(a.population < b.population) { return -1; }
    if(a.population > b.population) { return 1; }
    return 0;
  });
  return data;
}

function sortByArea(data){
  data.sort(function(a, b){
    if(a.area < b.area) { return -1; }
    if(a.area > b.area) { return 1; }
    return 0;
  });
  return data;
}

function sortByCapitalName(data){
  data.sort(function(a, b){
    if(a.capital < b.capital) { return -1; }
    if(a.capital > b.capital) { return 1; }
    return 0;
  });
  return data;
}

function makeCollapsible(){
  var coll = document.getElementsByClassName("collapsible");

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function addSubs2Doc(subregions){
  
  var container = document.createElement("div");
  container.className = "subregion-container";
  container.id = subregion;

  var collapsible = document.createElement("button");
  collapsible.className = "collapsible";
  collapsible.type = "button";

  var contentElem = document.createElement("div");
  contentElem.className = "content";

  var subregionElem = document.createElement("div");
  subregionElem.id = "subregion";

  var name = document.createElement("div");
  name.id = "name";
  name.textContent = subregion;

  var population = document.createElement("div");
  population.id = "population";
  population.textContent = "0";

  var area = document.createElement("div");
  area.id = "area";
  area.textContent = "0";

  subregionElem.appendChild(name);
  subregionElem.appendChild(population);
  subregionElem.appendChild(area);
  collapsible.appendChild(subregionElem);

  container.appendChild(collapsible);
  container.appendChild(contentElem);

  document.body.appendChild(container);
}



function addCountryToSubregion(data){
  data.forEach(country => {
    var subregionContainer = document.getElementById(country.subregion);
    var subregionCollapsible = subregionContainer.querySelector("#subregion");
    subregionCollapsible.querySelector("#population").textContent = parseInt(subregionCollapsible.querySelector("#population").textContent) + country.population;
    subregionCollapsible.querySelector("#area").textContent = parseInt(subregionCollapsible.querySelector("#area").textContent) + country.area;
    var content = subregionContainer.querySelector(".content");
    var countryElem = document.createElement("div");
    countryElem.className = "country";

    var nameElem = document.createElement("div");
    nameElem.id = "name";
    nameElem.textContent = country.name.common;

    var capitalElem = document.createElement("div");
    capitalElem.id = "capital";
    capitalElem.textContent = country.capital;

    var populationElem = document.createElement("div");
    populationElem.id = "population";
    populationElem.textContent = country.population;

    var areaElem = document.createElement("div");
    areaElem.id = "area";
    areaElem.textContent = country.area;

    countryElem.appendChild(nameElem);
    countryElem.appendChild(capitalElem);
    countryElem.appendChild(populationElem);
    countryElem.appendChild(areaElem);

    content.appendChild(countryElem);
});
}


async function loadJSON() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
}

async function loadPage(data){
  data = await loadJSON();
  //console.log(data);
  data.forEach(country => {
    if(!(country.subregion in subregions)){
      subregions[country.subregion] = {TotalPopulation: 0, 
        TotalArea: 0, 
        Countries: []};
    }
    subregions[country.subregion]["TotalPopulation"] += country.population;
    subregions[country.subregion]["TotalArea"] += country.area;
    subregions[country.subregion]["Countries"].push({name: country.name.common, 
      capital: country.capital, 
      population: country.population, 
      area: country.area});

  });
}


var subregions = {};
loadPage();
console.log(subregions);
addSubs2Doc(subregions)
makeCollapsible();


