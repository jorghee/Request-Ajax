export function drawOriginalChart(info) {
  // Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Region');
  data.addColumn('number', 'Infectados');

  let regions = info.map(region => [region.region, parseInt(region.confirmed[region.confirmed.length - 1].value)]);
  console.log(regions);

  data.addRows(regions);

  // Set chart options
  let options = {
    title: "Infectados en el Perú",
    width: 800,
    height: 600,
    hAxis: {
      title: "Número de Infectados",
    },
    vAxis: {
      title: "Región"
    }
  };

  // Instantiate and draw our chart, passing in some options.
  let chart = new google.visualization.BarChart(document.getElementById("result"));
  chart.draw(data, options);
}

export function drawComparativeChart(info) {
  // Filter out Lima and Callao
  let filteredInfo = info.filter(region => region.region !== 'Lima' && region.region !== 'Callao');

  // Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Fecha');

  // Extract the unique dates
  let dates = filteredInfo[0].confirmed.map(entry => entry.date);

  // Add a column for each region
  filteredInfo.forEach(region => {
    data.addColumn('number', region.region);
  });

  // Prepare rows for the data table
  let rows = dates.map((date, index) => {
    let row = [date];
    filteredInfo.forEach(region => {
      row.push(parseInt(region.confirmed[index].value));
    });
    return row;
  });

  data.addRows(rows);

  // Set chart options
  let options = {
    title: "Crecimiento de Infectados en Perú (excepto Lima y Callao)",
    width: 1200,
    height: 800,
    hAxis: {
      title: "Fecha",
      slantedText: true,
      slantedTextAngle: 45,
    },
    vAxis: {
      title: "Número de Infectados"
    },
    chartArea: {
      width: '70%',
      height: '70%'
    }
  };

  // Instantiate and draw our chart, passing in some options.
  let chart = new google.visualization.LineChart(document.getElementById("result"));
  chart.draw(data, options);
}
