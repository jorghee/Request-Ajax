import { growthWithoutLimaCallao } from "./ejercicio6.js";
import { compareRegions } from "./ejercicio7.js";
import { arequipaInfected } from "./ejercicio4.js";
import { comparativeLineChart } from "./ejercicio5.js";
import { listRegions } from "./ejercicio1.js";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);

let data;

function loadFile() {
  let url = "http://localhost:8000/data.json";

  return fetch(url)
    .then(response => response.json())
    .then(jsonData => data = jsonData)
    .catch(error => console.log(error));
}

function initialize() {
  loadFile().then(() => {
    document.getElementById('listRegions').addEventListener('click', listRegions);
    // document.getElementById('totalConfirmed').addEventListener('click', totalConfirmed);
    // document.getElementById('top10Regions').addEventListener('click', top10Regions);
    document.getElementById('arequipaInfected').addEventListener('click', showarequipaInfected);
    document.getElementById('comparativeLineChart').addEventListener('click', showcomparativeLineChart);
    document.getElementById('growthWithoutLimaCallao').addEventListener('click', showGrowthWithoutLimaCallao);
    document.getElementById('choiceToCompareRegions').addEventListener('click', choiceToCompareRegions);
    document.getElementById('compareRegions').addEventListener('click', showCompareRegions);
    // document.getElementById('dailyGrowthWithoutLimaCallao').addEventListener('click', dailyGrowthWithoutLimaCallao);
  });
}

function showlistRegions(){
  if(data){
    listRegions(data);
  }
  return;
}

function showarequipaInfected(){
  if(data){
    arequipaInfected(data);
  }
  return;
}

function showcomparativeLineChart(){
  if(data){
    comparativeLineChart(data);
  }
  return;
}

function showGrowthWithoutLimaCallao() {
  if (!data) return;
  growthWithoutLimaCallao(data);
}

function showCompareRegions() {
  const regionSelect = document.getElementById('regionSelect');
  const regions = Array.from(regionSelect.selectedOptions).map(option => option.value);

  if (regions.length === 0) {
    alert("Selecciona al menos una región.");
    return;
  }

  // Filtrar los datos para incluir solo las regiones seleccionadas
  const newData = data.filter(region => regions.includes(region.region));

  compareRegions(newData);
}

function choiceToCompareRegions() {
  // Mostramos el div oculto
  document.querySelector('.choiceRegions').style.display = 'block';
  
  // Rellenamos el select con las regiones
  let options = "";
  data.forEach(region => options += `<option value="${region.region}">${region.region}</option>`);
  document.getElementById('regionSelect').innerHTML = options;
}

initialize();

