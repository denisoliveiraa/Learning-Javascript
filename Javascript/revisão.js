///Foreach é uma function que retornar uma nova lista de elementos.


let numeros = [12,20 ,30,40,70]
function comparacao(item, indice){
    let atualizado = item/2
    console.log(`O item na posição: ${indice} é ${atualizado}`)
}



var soma = [function (a,b){return a + b}, numeros.forEach(comparacao)]
console.log(soma[0](2,3))