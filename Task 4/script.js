

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą,, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius.
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */


const ENDPOINT = 'cars.json';

addEventListener('load', getJson);  //pritaikiau iventa load, kur jis naksciau buvo
function getJson() {
  fetch("cars.json")
    .then(response => response.json())
    .then(data => outputData(data))
    .catch(error => console.log(error))
}
function outputData(data) {
  let output = "";
    data.forEach(car => {
    output += `<li>${car.brand} </li><ul> ${car.models} </ul>`; //cia savim didziuojuosi:D ul modeliams, per js nekoreguosiu stiliaus
      });
  document.querySelector('#output').innerHTML = output;
}
//ready for github