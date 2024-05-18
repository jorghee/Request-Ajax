// Por el momento es la misma lógica del mostrar todas las regiones sin Lima y Callao, es 
// decir, estamos repitiendo código con pequeños cambios.

export function compareRegions(data) {
  const chartData = new google.visualization.DataTable();
  chartData.addColumn("string", "Fecha");

  // Añadir columnas para cada región seleccionada
  data.forEach(region => chartData.addColumn('number', region.region));

  // Suponemos que todas las regiones tienen las mismas fechas
  const dates = data[0].confirmed.map(day => day.date);

  // Añadir filas de datos
  dates.forEach((date, index) => {
    const row = [date];
    data.forEach(region => {
      const value = region.confirmed[index] ? parseInt(region.confirmed[index].value) : 0;
      row.push(value);
    });
    chartData.addRow(row);
  });

  const options = {
    title: "Comparación entre Regiones",
    width: 1200,
    height: 800,
    hAxis: {
      title: "Fecha",
      slantedText: true,
      slantedTextAngle: 45
    },
    vAxis: {
      title: "Número de Infectados",
      viewWindow: {
        min: 0,
        max: 1000  
      }
    },
    legend: {
      position: "right"
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById("result"));
  chart.draw(chartData, options);
}
