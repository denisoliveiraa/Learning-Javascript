let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'olá'
ola = _ =>'ola' //Underline é um parâmetro


//This + bind
let comparaComThis = function(param){
    console.log(this === param)
}

//Quando passa um parâmetro para a função ele modificará o escopo global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThis = param => console.log(this === param)

/*
This em um função normal aponta para o objeto global. Já em uma arrowFunction ele
aponta para o contexto da função.
Mesmo com bind, para forçar uma mudança de contexto, no ArrowFunction ele continua forte no próprio contexto.
*/

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow(param)
comparaComThisArrow(obj)
comparaComThisArrow(modulo.exports)