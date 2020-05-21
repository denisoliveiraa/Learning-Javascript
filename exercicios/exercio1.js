function operacao(a,b){
    var soma = a + b
    var subtracao = a - b
    var multi = a * b

    return `${soma} ${subtracao} ${multi}`
}

//console.log(operacao(2,3))

function triangulo(a,b,c){
    if( a == b && b == c){
        return `Triangulo Equilatero`
    }else if(a == b || b == c || a == c){
        return `triangulo Isoceles`
    }else{
        return `triangulo escalento`
    }
}

//console.log(triangulo(3,1,2))

function expoente(a,b){
    return Math.pow(a,b)
}

//console.log(expoente(3,2))

function divisao(a,b){
    var divisao = a/b
    var resto = a%b
    return `${divisao} ${resto}`
}

//console.log(divisao(5,2))

function corrigindo(a){
    
    return  a.toPrecision(2)
}

//console.log(corrigindo(0.30000000000000004))

function simples(a,b,c){
    var montante = a*b*c
    return `${montante}`
}

//console.log(simples(10,0.02,1))

composto = (a,b,c) =>  { a * Math.pow(b,c) }

//function composto(a,b,c){
  //  return a*Math.pow(b,c)
//}

//console.log(composto(10,1.02,10))

function baskara(a, b, c){
   let delta = Math.pow(b,2) - (4 * a * c)
   
   if(delta < 0){
       console.log('Delta negativo')
   }else if(delta == 0){
        console.log('Duas raizes iguais')
        let valorPositivo = (-b + Math.pow(delta, 1/2)) / 2 * a
        console.log(valorPositivo)

   }else{
       console.log(valorPositivo)
       console.log(-1*valorPositivo)
   }
    
}

//baskara(3, -5, 12)

function RelatórioDePontuacao(a){
    let record = 0;
    let contagemPositiva = 0;
    let contagemNegativa = 0;
    console.log(a.length)
    for(var i = 1; i <= a.length; i++){
        if(a[i] > a[i -1] && a[i] > record){
            record = a[i]
            contagemPositiva += 1
        }else{
            contagemNegativa += 1
        }
    } 
    console.log(contagemNegativa, contagemPositiva)
}
let pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1]
//RelatórioDePontuacao(pontuacao)

soma1 = () =>
{
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    console.log(soma);
        
}

function soma2() {
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    console.log(soma);
 
}
//console.log(soma1(2,3,4))
//console.log(soma2(2,3,5));

lista = [1,2,4]

//function somaMaisUm(num){
  //  return num + 1
//}


let seiLa = lista.map(somaMaisUm = (sum) => { sum + 1})

//console.log(seiLa)


function mensagem(nome){
    alert('seu nome é: ' + nome)
}


function colentando(callback){
    let nome = prompt('Digite sue nome')
    callback(nome)
}

//colentando(mensagem)

let dados = ['arroz', 'feijao', 'beterraba', 'pepino', 'iame']

//console.log(dados.map(dadinhos => dadinhos.length))


var numeros = [4, 9 , 16 ]

var dobrar = numeros.map(function(num){
    return num*2
})

//console.log(dobrar)

dobrar = numeros.map(Math.sqrt)

//console.log(dobrar);

var visao = dados.map((objetos)=> objetos.length)

//console.log(visao);


console.log(Math.abs(4-6))

console 12.000.000.000