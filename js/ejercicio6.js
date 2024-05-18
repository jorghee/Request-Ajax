export function growthWithoutLimaCallao(data) {
  const newData = data.filter(region => region.region !== 'Lima' && region.region !== 'Callao');

  const chartData = new google.visualization.DataTable();
  chartData.addColumn('string', 'Fecha');
  newData.forEach(region => chartData.addColumn('number', region.region));

  const dates = newData[0].confirmed.map(day => day.date);
  dates.forEach((date, index) => {
    const row = [date];
    newData.forEach(region => {
      const value = region.confirmed[index] ? parseInt(region.confirmed[index].value) : 0;
      row.push(value);
    });
    chartData.addRow(row);
  });

  const options = {
    title: 'Crecimiento sin Lima y Callao',
    width: 1200,
    height: 800,
    hAxis: {
      title: 'Fecha',
      slantedText: true,
      slantedTextAngle: 45
    },
    vAxis: {
      title: 'Número de Infectados',
      viewWindow: {
        min: 0,
        max: 1000  // Ajustar según el rango de tus datos
      }
    },
    legend: {
      position: 'right'
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById("result"));
  chart.draw(chartData, options);
}
