export function drawChart(info) {
  // Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Region');
  data.addColumn('number', 'Infectados');

  let regions = info.map(region => [region.region, parseInt(region.confirmed[64].value)]);
  console.log(regions);

  data.addRows(regions);

  // Set chart options
  let options = {
    "title": "Infectados en el Perú",
    "width": 800,
    "height": 600,
    "hAxis": {
      "title": "Número de Infectados",
    },
    "vAxis": {
      "title": "Región"
    }
  };

  // Instantiate and draw our chart, passing in some options.
  let chart = new google.visualization.BarChart(document.getElementById("result"));
  chart.draw(data, options);
}
