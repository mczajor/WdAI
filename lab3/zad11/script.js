function sortNumbersByKey(array, key, order){
  array.sort((a,b) => {
    if(a[key] < b[key]) return 1*order;
    if(a[key] > b[key]) return -1*order;
    return 0;
  });
}

function sortWordsByKey(array, key, order){
  array.sort((a,b) => {
    return a[key].localeCompare(b[key])*order;
  });
}


function sortByKey(array, key, order){
  if(key == 'name' || key == 'capital'){
    sortWordsByKey(array, key, order);
  } else{
    sortNumbersByKey(array, key, order);
  }
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

function updateSubregions(population, area){
  subregions.forEach(subregion => {
    var population = subregionContainer.querySelector("#population");
    var area = subregionContainer.querySelector("#area");
    population.textContent = subregion.population;
    area.textContent = subregion.area;
  });
}

function addSubs2Doc(subregions){
  document.querySelectorAll(".subregion-container").forEach(container => container.remove());
  subregions.forEach(subregion => {
    //console.log(subregion);
    var container = document.createElement("div");
    container.className = "subregion-container";
    container.id = subregion.name;

    var collapsible = document.createElement("button");
    collapsible.className = "collapsible";
    collapsible.type = "button";

    var contentElem = document.createElement("div");
    contentElem.className = "content";

    var subregionElem = document.createElement("div");
    subregionElem.id = "subregion";

    var name = document.createElement("div");
    name.id = "name";
    name.textContent = subregion.name;

    var population = document.createElement("div");
    population.id = "population";
    population.textContent = subregion.population;

    var area = document.createElement("div");
    area.id = "area";
    area.textContent = subregion["area"];

    subregionElem.appendChild(name);
    subregionElem.appendChild(population);
    subregionElem.appendChild(area);
    collapsible.appendChild(subregionElem);

    container.appendChild(collapsible);
    container.appendChild(contentElem);

    document.body.appendChild(container);

  });
}

function addCountryToSubregion(subregion, countries){
  var subregionContainer = document.getElementById(subregion);
  subregionContainer.querySelectorAll(".country").forEach(country => country.remove());
  countries.forEach(country => {
    
    var content = subregionContainer.querySelector(".content");
    var countryElem = document.createElement("div");
    countryElem.className = "country";

    var nameElem = document.createElement("div");
    nameElem.id = "name";
    nameElem.textContent = country.name;

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
    content.appendChild(document.createElement("hr"));
});
}


async function loadData() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  data.forEach(country => {
    if(country.subregion === undefined)
      return;


    if(!(subregions.some(subregion => subregion.name == country.subregion))){
      subregions.push({name: country.subregion,
                      population: 0, 
                      area: 0, 
                      Countries: []});
    }

    //console.log(subregions);
    var subregion = subregions.filter(element => element.name == country.subregion)[0];
    subregion.population += country.population;
    subregion.area += country.area;
    var capital;
    if(country.capital == undefined){
      capital = ""
    }
    else{ capital = country.capital[0]}
    subregion.Countries.push({name: country.name.common,
                              capital: capital,
                              population: country.population,
                              area: country.area});
  });
  loadPage(subregions, 'name', 1);
}

function loadPage(subregions, key, order){
  if(key === 'capital'){
    sortByKey(subregions, 'name' , order);
  } else{
    sortByKey(subregions, key, order);
  }
  addSubs2Doc(subregions);
  subregions.forEach(subregion => {
    sortByKey(subregion.Countries, key, order);
    addCountryToSubregion(subregion.name, subregion.Countries);
  });
  makeCollapsible();
  
  console.log(subregions);
}


const subregions = [];
var currKey = 'name';
loadData();
document.querySelector(".nameCategory").addEventListener("click", () => {
  currKey = 'name';
  loadPage(subregions, currKey, 1)
});

document.querySelector(".populationCategory").addEventListener("click", () => {
  currKey = 'population';
  loadPage(subregions, currKey, 1)
});

document.querySelector(".areaCategory").addEventListener("click", () => {
  currKey = 'area';
  loadPage(subregions, currKey, 1)
});

document.querySelector(".capitalCategory").addEventListener("click", () => {
  currKey = 'capital';
  loadPage(subregions, currKey, 1)
});


document.querySelector("#filter-button").addEventListener("click", () => {

  var filteredSubregions = [];
  var name = document.querySelector("#namefilter").value.toUpperCase();
  var capital = document.querySelector("#capitalfilter").value.toUpperCase();
  var population = document.querySelector("#populationfilter").value;
  var area = document.querySelector("#areafilter").value;

  subregions.forEach(subregion => {
  var filteredCountries = subregion.Countries.filter(country => (country.name.toUpperCase().startsWith(name) && 
                                                                country.capital.toUpperCase().startsWith(capital) &&
                                                                country.population >= population) &&
                                                                country.area >= area);
  var filteredArea = 0;
  var filteredPopulation = 0;
  filteredCountries.forEach(country => {
    filteredArea += country.area;
    filteredPopulation += country.population;
  });

  filteredSubregions.push({name: subregion.name,
                          population: filteredPopulation,
                          area: filteredArea,
                          Countries: filteredCountries})
  });
  filteredSubregions = filteredSubregions.filter(subregion => subregion.Countries.length > 0);

  loadPage(filteredSubregions, currKey, 1);


});


//console.log(subregions);



