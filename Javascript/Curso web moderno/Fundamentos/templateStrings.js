const nome = 'Renata'

const concatenacao = 'Olá ' + nome + '!'

/* Template strings trabalham com quebras de linha e caracteres eem branco
sem retornar nenhum tipo de erro. Exemplo:
*/

const template = ` 
    Olá
    ${nome}!`

const template2 = `Olá ${nome}!`

/* Isso se chama interpolação tecnicamente falando.
Ele percebe os tipos de variavel e converte para ser mais legivel
e mais agradavel esteticamente. Essa é a função do template string.
*/

// Lembre-se de usar a CRASE(back tick(`)), não é apóstrofo(´´)

console.log(concatenacao, template, template2)

//Expressões...

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // <- Isso é uma função

console.log(`Ei, ${up('Cuidado')}!`)

/* Template strings funciona quase igual ao fstrings do python.
*/