console.log(soma(3,2))
//O interpretador do JS primeiro carrega todas as funções e depois ler os comandos.
//Nesse estilo abaixo pode-se chama-la antes dela.
function soma(a,b){
    return a + b
}

//Não é igual a anteior. Como está em uma const ela não pode ser chamada antes.
const sub = function(x,y){
    return x - y
}