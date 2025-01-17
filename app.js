// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * 109.91;
    //return the dollar value
    return valueInYen;
}
// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to punds
    let valueInPound = valueInYen * 0.0065;
    //return the dollar value
    return valueInPound;
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};