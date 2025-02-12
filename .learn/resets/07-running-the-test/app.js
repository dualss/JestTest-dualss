
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

console.log("de 2 euros a dolares: " + fromEuroToDollar(2));

module.exports = {sum, fromEuroToDollar};