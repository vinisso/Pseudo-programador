// let e const 

// o let tem escopo de bloco. Diferentemente do 'var' que tem um escopo global, um exemplo abaixo demonstra isso. 
{
    var a = 2
    let b = 3 
    console.log(b) 
}
console.log(a)
// console.log(b) // A variavel 'b' não está definida NESSE escopo da linha 7, porém está definida dentro daquele bloco acima. Sendo delimitado seu acesso pelo escopo do 'let'

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring (Tirar algo de dentro de uma estruta, seja ele Array, Obj, String... Literalemente desestruturar)
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)