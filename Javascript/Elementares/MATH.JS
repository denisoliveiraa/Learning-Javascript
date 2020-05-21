const raio = 9
const area = Math.PI * Math.pow(raio, 2) //raio elevado a dois

console.log(area)
console.log(typeof Math)

console.log(Math.round(raio)) // retorna o valor mais proximo. Se for meio retorna o maior

console.log(Math.sqrt(raio)) // Retorna raiz quadrada do numero

var y = -54
console.log(Math.abs(y)) // retorna o absoluto positivo

var z = 5.1
console.log(Math.ceil(z)) // retorna o proximo maior valor inteiro

console.log(Math.floor(z)) // Retorna o proximo menor valor inteiro

console.log(Math.sin(90 * Math.PI / 180)) // retorna o seno ( valor entre -1 e 1). Tem que usar radianos

console.log(Math.cos(90 * Math.PI / 180)) // retorna o cosseno (). Tem que usar radianus

console.log(Math.min(0, 150, 30, 20, -8, -200)) // menor valor em uma lista de argumentos

console.log(Math.max(0, 150, 30, 20, -8, -200)) // maior valor em uma lista de argumentos

console.log(Math.random()) // retorna um numero aleatrio entre 0 e 1

