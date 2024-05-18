export function listRegions(data){
  document.getElementById('result').innerHTML = '';
  data.forEach(element => {
    console.log(element.region);
    document.getElementById('result').appendChild(document.createElement('li')).textContent = element.region;
  });
}