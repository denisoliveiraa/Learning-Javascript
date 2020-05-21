/*
//Uma forma de determinar uma função sem precisar dizer quantos argumentos ela tem.
function soma(){
    var soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

//console.log(soma(1,2,3,4,5))
//Arguments tem similaridade com um array porém não funciona como um. NÂO È UM ARRAY
//Não pode usar pop. Mas pode usar length.
/*
Convertendo um arguments para array

var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
*/

/*

function igual(){
    var soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    if(soma/arguments.length != arguments[i]){
        return false
    }else{
        return true
    }
}

console.log(igual(1,1,1,1,1,1))

*/
function sum(){
    soma = 0;
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

function resultado(delta){
    let valor = x
}

function Delta(callback){
    let delta = Math.pow(b,2) - 4 * a * c
    callback(delta)
}

