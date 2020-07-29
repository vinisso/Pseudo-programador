// Armazenando uma função em uma variável
const imprimirSoma = function (a, b)/*Função anônima é uma função comum, porém sem nome*/{ 
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável.

const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 6))
/* Forma mais simples e curta de fazer uma função. Substituindo a palavra
'function' por uma seta '=>' (igual =, maior que >)
*/

//Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // Quando 1 parâmetro só, pode tirar os parentêses
imprimir2('legal')

