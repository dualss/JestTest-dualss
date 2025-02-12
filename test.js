const {sum, fromEuroToDollar} = require('./app.js');
test('adds 14+9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test('un euro vale 1.07 dolares, 2 euros son 2.14 dolartes', () => {
    let dollars = fromEuroToDollar(2);
    let expectedResult = 2*1.07;
    expect(dollars).toBe(expectedResult);
})

//Como no sabia que hacer en esta practica hice una mentoria con un profesor y 
//realizamos estos dos test simples para entender sobre todo el funcionamiento cde jest