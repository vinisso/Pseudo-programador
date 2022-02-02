require('./global')

console.log(minhaApp.saudacao()) //ou console.log(global.minhaApp.saudacao())

// 1 - Um problema desse método de usar o global ao invés do module.exports, é que os atributos dentro de 'global'
// são alterávei, como por exemplo:

console.log('\n', minhaApp.nome)

minhaApp.nome = 'Mudei de nome, hihi'

console.log('\n', minhaApp.nome)

// Continua no arquivo global...