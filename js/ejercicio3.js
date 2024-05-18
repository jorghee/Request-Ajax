export function top10Regions(data) {
  // Obtener el elemento donde se mostrarán los resultados
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Limpiar cualquier contenido existente

  // Calcular el total de casos confirmados por región
  const regionTotals = data.reduce((acc, regionData) => {
    const totalConfirmed = regionData.confirmed.reduce((sum, dayData) => {
      return sum + parseInt(dayData.value, 10); // Sumar los valores confirmados por día
    }, 0);
    acc[regionData.region] = totalConfirmed; // Almacenar el total en el objeto acumulador
    return acc;
  }, {});

  // Ordenar las regiones por número total de casos confirmados en orden descendente y obtener las 10 primeras
  const sortedRegions = Object.entries(regionTotals).sort((a, b) => b[1] - a[1]).slice(0, 10);

  // Crear una lista no ordenada para mostrar los resultados
  const ul = document.createElement('ul');
  for (const [region, confirmed] of sortedRegions) {
    const li = document.createElement('li'); // Crear un elemento de lista para cada región
    li.textContent = `${region}: ${confirmed}`; // Establecer el texto del elemento de lista
    ul.appendChild(li); // Agregar el elemento de lista a la lista no ordenada
  }

  // Agregar la lista no ordenada al elemento de resultados
  resultDiv.appendChild(ul);
}