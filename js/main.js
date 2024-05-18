import { growthWithoutLimaCallao } from "./growthWithoutLimaCallao.js";

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

function showGrowthWithoutLimaCallao() {
  if (!data) return;
  growthWithoutLimaCallao(data);
}

function initialize() {
  loadFile().then(() => {
    // document.getElementById('listRegions').addEventListener('click', listRegions);
    // document.getElementById('totalConfirmed').addEventListener('click', totalConfirmed);
    // document.getElementById('top10Regions').addEventListener('click', top10Regions);
    // document.getElementById('arequipaInfected').addEventListener('click', arequipaInfected);
    // document.getElementById('comparativeLineChart').addEventListener('click', comparativeLineChart);
    document.getElementById('growthWithoutLimaCallao').addEventListener('click', showGrowthWithoutLimaCallao);
    // document.getElementById('choiceToCompareRegions').addEventListener('click', choiceToCompareRegions);
    // document.getElementById('compareRegions').addEventListener('click', compareRegions);
    // document.getElementById('dailyGrowthWithoutLimaCallao').addEventListener('click', dailyGrowthWithoutLimaCallao);
  });
}

initialize();

