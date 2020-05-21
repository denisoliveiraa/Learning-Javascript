// São First-class object (Citizens)
// Higher-order function

function fun1(){ }

const fun2 = function() { }

const array = [function(a,b){ return a + b}] // armazenar dentro de um array
console.log(array[0](2,3))


//Como passar fução como parâmetro para outra função
function run(fun){
    fun()
}


run(function() { console.log("executando ...")})

//Uma função pode conter outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

// OUUU

const somaMais = soma(3,4)
somaMais(4)
