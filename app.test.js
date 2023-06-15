// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.2); 
});

//Test fromDollarToYen
test("1.206 dollars should be 131.892 yens", () => {   
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1.2)).toBe(131.892); 
});

//Test fromYenToPound
test("131.892 yen should be 0.862242 pounds", () => {
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(131.892)).toBe(0.8572979999999999); 
});

