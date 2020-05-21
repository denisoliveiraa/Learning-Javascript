//Função que retorna um objeto
//Retorna objetos que estão repetindo muito

const prod1 = {
    nome: '...',
    preço: 45
}
const prod2 = {
    nome: '...',
    preço: 1245
}

function criarPessoa(){
    return{
        
    nome: 'Ana',
    sobrenome: 'Silva',    
    }

}

//console.log(criarPessoa())

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

//console.log(criarProduto('Notebook', 2199.99))
//console.log(criarProduto('Ipad', 1199.99))

//Factory, assim como um arrowFunction, tem o this dependendo apenas do contexto