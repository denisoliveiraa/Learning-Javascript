// A diferença está na forma como passa os parâmetros.

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 5893,
    desc: 0.15,
    getPreco
}

//This.preco e this.desc são variaveis globais. Logo o this não os encontra. Para isso:
global.preco = 20
global.desc = 0.1
//setamos eles como variaveis globais.

//console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco: 4990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Formas diferentes de usar o call e apply
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.1, '$']))