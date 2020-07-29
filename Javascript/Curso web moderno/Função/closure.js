// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função a acessar e manipular variáveis externas a função

//contexto lexico em ação:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())