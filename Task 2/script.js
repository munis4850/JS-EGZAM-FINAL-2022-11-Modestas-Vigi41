/* -------------------------------- TASK 2 
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let CountButton = 0;
const state = document.querySelector("#btn__state");
document.querySelector("#btn__element").addEventListener('click', () => {
  state.innerHTML = CountButton += 1;
  })

//ready for github