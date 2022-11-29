/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener('click', getExternal);
function getExternal() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => outputExternal(data))
    .catch(error => console.log(error))
}
function outputExternal(data) {
  let output = "";
  data.forEach(user => {
    output += `<li>Username: <strong>${user.login}</strong>,${user.avatar_url}`;
  });
  document.querySelector('#output').innerHTML = output;
}
ATENCIONE: jei netenkina sitoks sprendimas, apacioje kitaip, bet ten jau su pagalba, nes paskui susigriebiau gal uzduotis paveiksliuko NodeIterator, nors ten abstraktu. Apatine siektiek su pagalba tai nieko nebandysiu apgaudineti. 

//ready for github


// const output = document.querySelector('#output');
// document.querySelector('#btn').addEventListener('click', async () => {
//   const response = await fetch(ENDPOINT);
//   const users = await response.json();
//   const existingCards = document.querySelector('cards');
//   if (existingCards) {
//     output.removeChild(existingCards);
//   }
//   const message = document.querySelector('#message');
//   if (message) {
//     output.removeChild(message);
//   }
//   const cards = document.createElement('div');
//   cards.setAttribute('class', 'cards');
//   users.forEach((user) => {
//     const card = document.createElement('div');
//     card.setAttribute('class', 'card');
//     const p = document.createElement('p');
//     p.innerText = user.login;
//     card.appendChild(p);
//     const img = document.createElement('img');
//     img.setAttribute('src', user.avatar_url);
//     card.appendChild(img);
//     cards.appendChild(card);
//   })
//   output.appendChild(cards);

// });