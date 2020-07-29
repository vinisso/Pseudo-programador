        const peso1 = 1.0
/*        /\    /\
      Tipo de  Identificador
        dado      da  variável
*/


const peso2 = Number('2.0')
const peso3 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.465
const avaliacao2 = 5.675

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))

/* Caso seu resultado seja uma dizima periodica,
use: 
"sua_variavel.toFixed(?) <- quantidade de algarismos que você quer
que seja printado. Por exemplo 2)"
*/

console.log(media.toString())
//Retorna o valor orinal da variável que nunca pode mudar.

console.log(media.toString(2))
//Retorna o valor da string em números binários.

console.log(typeof media)
console.log(typeof Number) 
/* 'Number' com 'N' maiúsculo é uma função. Já o 'number' com o 'n' minusculo
se refere a um dado com conteúdo númerico. Como inteiro, flutuante, e outros...
*/

