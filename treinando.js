//Uma String pode ser um número.

var x = 10
console.log("10"/2) //NaN ?
console.log(10/"2")
console.log("5" + 3) // Somar também é concatenar
console.log((0.1*10 + 0.2*10)/10)
console.log(1.0) // Float ?
console.log(Number.isInteger(x))


console.log(x.toString(2)) // Transforma em um String
var y = x.toString(2)
console.log(y)
console.log(typeof(y))

console.log(10e-2)
var numero = 4

//parseInt() parseFloat() number()

var ok = 1.333553
console.log(parseInt(ok))

console.log(parseFloat(x).toPrecision(2))