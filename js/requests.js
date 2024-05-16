function loadFile() {
  let url = "http://localhost:8000/data.json";

  fetch(url)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => console.log(error));
}

// Para probar si recupera el archivo
loadFile();
