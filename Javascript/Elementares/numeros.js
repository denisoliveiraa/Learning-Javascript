/* 
const peso1 = 1.0
const peso2 = Number('2.0')

// Se passar 1.0 ele considera inteiro. Se for 1.1 é float

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2*peso2
const media = total / (peso1 + peso2)
console.log(media)
//Sequindo o padrao IEE 753 o JS considera todos os numeros como double de float. 64 bits de armazenadmento são alocados para
//cada ponto flutuante
console.log(media.toFixed())
// ToFixed Coloca apenas duas casas decimas depois da virgula. E CONVERTE PARA STRING
var ola = media.toFixed()
console.log(typeof(ola))



console.log(media.toString())
// Transform em String
console.log(media.toString(2))
// Transforma o valor em binario

console.log(123e2) // e2 acrescenta dois zeros depois do numero

console.log(123e-5) // Acrescenta o numero com 5 casas depois do 0



// Alguns cuidados

console.log(7/0.1) // Quando mais proximo de 0 maior o numero
console.log(7/0) // retorna Infinity
//Tipo de infinity é infinity

console.log("10"/ 2) // Mesmo sendo string ele tenta converter e faz a divisão

console.log("show" * 2) // Não funciona

console.log(0.1 + 0.7) // Não retorna 0.8 por causa da especificação IEE


//console.log(10.toString()) // toString pode ser em um Number porem não no literal
console.log((29.3).toString()) //Retorna o valor adequado

console.log(9999999999999999) // The interger precision are accurate up to 15

console.log(0.2 + 0.1) // it haven't 100% precision.
// To solve that
console.log(0.2*10 + 0.1*10)/10


console.log(10 + 5) // output: 5
console.log("ola" + " mundo") // output: ola mundo ( contatenação)

console.log("ola" + 10 ) // String + number = concatenação

console.log(10 + 30 + "40") // leitura da esquerda para direita. 

// JS sempre vai tentar converter String para número em todas as operações aritméticas exceto soma.
// pois soma também é concatenar. 


//NaN - Not a number

console.log(x = 100 / "apple") //output: NaN

console.log(isNaN(media)) // isNan() retorna false se for um numero e true se não for um numero


//Javascript interpreta Hexadecimal se for precedid de 0x
console.log(0xFF)

//ToSting() usado em numero retornar numeros das bases 2 até a 36 .

var numero = 32;
console.log(numero.toString(2))
console.log(numero.toString(32))
console.log(numero.toString(16))
console.log(numero.toString(8))
console.log(numero.toString(2))

// Pode tranformar números em objetos

var x = 123
var y = new Number(123);
console.log(typeof(x))
console.log(typeof(y))


//Topicos.

 
    1) Se um número ou String de número for .0 -> retorna apenas o numero como Inteiro e não floar
    2) isInteger()
    3) toFixed() - casas decimais
    4) ToString() - Transforma numero em String como base de 2 até 32
    5) e2 - Acrescenta dois zeros depois do numero
    5) e-2 Acrescenta dois zeros antes do numero
    6) 7/0 retorna infinity
    7) infinty é um tipo
    8) typeOf retorna o tipo
    9) Soma de dois numeros
    10) soma de numero e String
    11)toString() - Numero, string com numero e nao numero, 
    12)parseInt() - Se tiver .0, string com numero, string com numero e nao numero
    13)parseFloat() - Se tiver .0, string com numero, string com numero e nao numero
    14)Number() - Se tiver .0, string com numero, string com numero e nao numero
    15)operações numero e String - String converte para numero se possivel(exceto soma)
    16)isNaN(x) - Saber se é numero ou nao
    17) Valueof() - Numero como numero diferente do toString
    18) toPrecision() - Retorna o numero com numero de casas desejadas
    19) toExponential() - 
    20) MAX_INFINITY
    21) MIN_INFINITY
    22)POSITIVO_INFINITY
    23)NEGATIVE_INFINITY
*/
