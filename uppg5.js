
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"
    let num1= 5;
    let num2= 17;

    if (num1 > num2){
        console.log("The first number is greater than the second")
    }
    else if (num1 < num2){
        console.log("The second number is greater than the first")
    }

}

module.exports = { uppg5 };
