// função sem nome

const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){ // Operação é uma nova função que recebe a função soma
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})

imprimirResultado(3,4 , (x,y) => x * y)