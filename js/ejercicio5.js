export function comparativeLineChart(data) {
  // Filtrar datos para obtener todas las regiones
  const newData = data.filter(region => region.region);

  // Crear nueva tabla de datos de Google Visualization
  const chartData = new google.visualization.DataTable();
  chartData.addColumn('string', 'Fecha'); // Agregar columna para las fechas
  newData.forEach(region => chartData.addColumn('number', region.region)); // Agregar columnas para cada región

  // Obtener fechas del primer objeto de región en newData
  const dates = newData[0].confirmed.map(day => day.date);

  // Iterar sobre las fechas
  dates.forEach((date, index) => {
    const row = [date]; // Crear una nueva fila para cada fecha
    newData.forEach(region => {
      // Obtener el valor de confirmados para la región actual en la fecha actual
      const value = region.confirmed[index] ? parseInt(region.confirmed[index].value) : 0;
      row.push(value); // Agregar el valor a la fila
    });
    chartData.addRow(row); // Agregar la fila completa a la tabla de datos
  });

  // Opciones de configuración del gráfico
  const options = {
    title: 'Crecimiento en todas las regiones', // Título del gráfico
    width: 1200, // Ancho del gráfico
    height: 800, // Alto del gráfico
    hAxis: {
      title: 'Fecha', // Título del eje x
      slantedText: true, // Texto inclinado en el eje x
      slantedTextAngle: 45 // Ángulo de inclinación del texto en el eje x
    },
    vAxis: {
      title: 'Número de Infectados', // Título del eje y
      viewWindow: {
        min: 0, // Valor mínimo del eje y
        max: 2500 // Valor máximo del eje y (ajustar según el rango de tus datos)
      }
    },
    legend: {
      position: 'right' // Posición de la leyenda
    }
  };

  // Crear instancia del gráfico de líneas de Google Visualization y dibujarlo en el elemento HTML con el ID "result"
  const chart = new google.visualization.LineChart(document.getElementById("result"));
  chart.draw(chartData, options);
}