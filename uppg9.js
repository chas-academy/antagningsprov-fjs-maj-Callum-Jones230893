

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(numArray) {
        for (let n of numArray) {
            if (n % 2 === 0) {
                console.log(n + " even");
            } 
            else {
                console.log(n + " odd");
            }
        }
    }
        sort([7, 12, 8, 3, 1, 10, 37, 14]);
  
}

module.exports = { uppg9 };
