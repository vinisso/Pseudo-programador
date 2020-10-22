// Função em JS é First-Class Object (citizen)
//Higher-order Function

//Criar de formas literal
function fun1() { } 

//Armazenar dentro de uma variável
const fun2 = function() { }

//Armazenar dentro de um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

//Função pode retornar/conter uma outra função
function soma (a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)//A função soma recebe 2 valores. o retorno da função anônima recebe um.
//ou
const cincoMais = soma(2,3)
cincoMais(4)