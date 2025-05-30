

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

  const people= [
    { name: "Callum", age: 32},
    { name: "Caroline", age: 22},
    { name: "Milo", age: 7},
    { name: "Merlin", age: 17},
    { name: "Jimmy", age: 42},
    ];

  function over30(peopleArray) {
    for (let p of peopleArray) {
      if (p.age > 30) {
        console.log(p.name);
      }
    }
  }
  
    over30(people);
}

module.exports = { uppg8 };
