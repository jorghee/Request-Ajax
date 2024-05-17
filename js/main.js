import { drawChart } from "./tables.js";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(loadFile);

function loadFile() {
  let url = "http://localhost:8000/data.json";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    drawChart(data);
  })
  .catch(error => console.log(error));
}
