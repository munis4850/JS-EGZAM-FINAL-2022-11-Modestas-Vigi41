/* ------------------------------ TASK 9 ----------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
        }
    isMoreThan = function () {
      if (this.budget > 1000000) { console.log("true"); }
      else { console.log("false") }
    };
  }
  const wasExpensive = new Movie("Piktuju karta", "Velyvis", 1500000); //rekomenduoju paziureti jei nemates;)
  wasExpensive.isMoreThan();  
