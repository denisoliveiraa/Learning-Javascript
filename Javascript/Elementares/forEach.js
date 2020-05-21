let compras = ['arroz' , 'feijao', 'macarrao', 'pepino', 'couve-flor']
let produtos = ['limpeza' , 'macacao', 'vassoura', 'pepino', 'couve-flor']

function comprar(item, indice){
    console.log(`Item número ${indice} é: ${item}`)
}

compras.forEach(function (item, indice){
    console.log(`Item número ${indice} é: ${item}`)
})

produtos.forEach(comprar)