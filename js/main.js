import { drawOriginalChart, drawComparativeChart } from "./tables.js";

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(loadFile);

let isComparativeChart = false;

function loadFile() {
  let url = "http://localhost:8000/data.json";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      drawOriginalChart(data);

      // Add event listener to the button
      document.getElementById('changeGraph').addEventListener('click', () => {
        if (isComparativeChart) {
          drawOriginalChart(data);
        } else {
          drawComparativeChart(data);
        }
        isComparativeChart = !isComparativeChart;
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}
