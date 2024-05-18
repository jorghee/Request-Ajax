// Esta función visualiza los datos de infectados en la región de Arequipa en el tiempo de los valores 
export function arequipaInfected(data){
  // Filtrar los datos para obtener solo la información relacionada con la región de Arequipa
  const newData = data.filter(region => region.region == 'Arequipa'); 
  // Crear una nueva tabla de datos de Google Visualization
  const chartData = new google.visualization.DataTable();
  // Agregar una columna para las fechas
  chartData.addColumn('string', 'Fecha'); 
  // Agregar columnas para cada región en Arequipa
  newData.forEach(region => chartData.addColumn('number', region.region));

  // Extraer las fechas del primer objeto de región en newData
  const dates = newData[0].confirmed.map(day => day.date);
  // Iterar sobre las fechas
  dates.forEach((date, index) => {
    // Crear una nueva fila para cada fecha
    const row = [date];
    // Iterar sobre cada región en newData
    newData.forEach(region => {
      // Obtener el valor de infectados para la región actual en la fecha actual
      const value = region.confirmed[index] ? parseInt(region.confirmed[index].value) : 0;
      // Agregar el valor a la fila
      row.push(value);
    });
    // Agregar la fila completa a la tabla de datos
    chartData.addRow(row);
  });
  
  const options = {
    title: 'Infectados en Arequipa',
    width: 1200, // Ancho del gráfico
    height: 800, // Alto del gráfico 
    hAxis: {
      title: 'Fecha', // Título del eje x
      slantedText: true, 
      slantedTextAngle: 45 
    },
    vAxis: {
      title: 'Número de Infectados', // Título del eje y
      viewWindow: { //Min y Max para los numeros de infectados
        min: 0, 
        max: 1200  
      }
    },
    legend: {
      position: 'right' 
    }
  };

  // Crear una instancia del gráfico de líneas de Google Visualization y dibujarlo en el elemento HTML con el ID "result"
  const chart = new google.visualization.LineChart(document.getElementById("result"));
  chart.draw(chartData, options);
}
