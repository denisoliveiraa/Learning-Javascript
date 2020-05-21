// Quando chamado em um função normal como function soma() - ele varia dependendo do que está chamando
//Já se usar um ArrowFunction ele não varia. Ele depende do contexto que ele se encontra.

/*
    Ou seja, No arrowFucntion também tem a funcionalidade de ter o This no contexto lexico. Ou função global.
*/

const pessoa = {
    saudacao: "Bom Dia",
    falar() {
        console.log(this.saudacao)
        
    }
}

console.log(pessoa.falar())
/*
pessoa.falar()
const falar = pessoa.falar
falar() // COnflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // 
falarDePessoa()

//Sempre que quise indicar uma função dentro de um objeto como uma variavel ou constante necessita usar o bind
//Motivo: O bind, por si, referencia no atributo 'o this' daquele objeto. Ou seja, referencia o objeto em si.

/* function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
*/


//setInterval é um tipo de function que necessita do bind para referenciar o que quer.

/*
function Pessoa(){
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
pessoa()
*/