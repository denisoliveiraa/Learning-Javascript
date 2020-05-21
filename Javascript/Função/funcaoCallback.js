//Passar uma função e essa função será chamada quando um evento acontecer.
//Para cada elemento ele passa um elemento e vai chamando repetidamento com um loop. Ou seja, callBack.

let compras = ['arroz' , 'feijao', 'macarrao', 'pepino', 'couve-flor']
let produtos = ['limpeza' , 'macacao', 'vassoura', 'pepino', 'couve-flor']

function comprar(item, indice){
    console.log(`Item número ${indice} é: ${item}`)
}

compras.forEach(function (item, indice){
    console.log(`Item número ${indice} é: ${item}`)
})

//produtos.forEach(comprar)


//Sem callback

const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callBack
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 
})

console.log(notasBaixas2)

//OU

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)