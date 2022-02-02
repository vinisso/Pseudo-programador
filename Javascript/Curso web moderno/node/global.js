//console.log(global)

// 2 - Usar o freeze pode ajudar com o caso do global ter seus atributos mutaveis.

/*
global.minhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema mutável :c'

}
*/

global.minhaApp = Object.freeze({
    saudacao() {
        return 'Eu sou onipresente.'
    },
    nome: 'Sistema imutável c:<'
})


// Descomente o código de cima para ver o que aconteceria caso não usasse o Object.freeze()