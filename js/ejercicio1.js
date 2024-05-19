// Autor: Sebastian Zuñiga
export function listRegions(data) {
  const result = document.getElementById('result');
  result.innerHTML = '';

  const ul = document.createElement('ul');
  data.forEach(element => {
    console.log(element.region);
    const li = document.createElement('li');
    li.textContent = element.region;
    ul.appendChild(li);
  });

  result.appendChild(ul);
}