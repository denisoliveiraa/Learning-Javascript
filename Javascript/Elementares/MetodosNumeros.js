           //toString()
//Converter numero em base de 2 até 32
//Numero se transforma em Sting



        //toExponential()
//Retorna um número escrito na notação de expoente
var x = 3.345
console.log(x.toExponential(2))
console.log(x.toExponential(3))

        //toFixed()
//Corrige as cadas decimais do numero

console.log(x.toFixed(2))
console.log(x.toFixed())
console.log(x.toFixed(20))

        //toPrecision()
//Retorna um STRING com o numero descrito sobre uma length especifica
console.log(x.toPrecision())
console.log(x.toPrecision(1))


           //ValueOf()
//retorna um numer como um numero
//diferente do ToString que retorna como String mesmo sendo numero

x.valueOf(); 
x.valueOf(); 
(100 + 23).valueOf();

        //Converter Variaveis para numeros
//Number()
//parseInt()
//parseFloat()

//Number() retorna números ou NaN. Se for boolean retorna 0 ou 1.

// ParseInt() retorna inteiro. Se tiver ponto ou espaço retorna o primeiro numero.
//Se for um número com string tipo "10 anos" ele retorna o 10
// Mas se o ano vier primeiro "ano 10" ele retorna NaN


//parseFloat() retorna o primeiro numero. Se tiver ponto retorn o float , se tiver espaço retorna o primeiro numero
//Se tiver String com primeiro não sendo numero retorna NaN


//MAX_VALUE
var x = Number.MAX_VALUE // retorna o maior numero possível em JS
var x = Number.MIN_VALUE // Retorna o menor numero possivel em JS
var x = Number.POSITIVE_INFINITY // retorna overflow
var x = Number.NEGATIVE_INFINITY // retorna em overflow