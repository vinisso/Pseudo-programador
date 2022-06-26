// Arrow Function
const soma = (a, b) => a + b
console.log(soma(5, 12)) // -> Funcões Arrows são anonônimas, isso significa que são somente acessíveis quando referenciadas por uma declaração de uma variaável.
 
// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // o Bind muda o escopo da funcão. Nesse caso, tentamos o mudar para um objeto vazio. Porém, a função arrow não permite isso.

lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() // Caso nada seja passado, o parâmetro padrão será chamado, no caso, "Texto"
log('Sou mais forte')
log(undefined)
log(null)

// Operador rest
function total(...numeros) {  // Quando em uma função, o 'rest' significa "Agrupar". Em Array ou objetos, seria o spread.
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
