/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(audi) {
  return Object.keys(audi);
}
console.log(showObjectKeys(audi));
console.log(Object.values(audi));   //man atrodo uzduotis bloga gal values reikejo grazinti