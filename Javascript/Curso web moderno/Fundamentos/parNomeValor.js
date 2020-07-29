// par nome/valor

const saudacao = 'Opa' //Contexto léxico 1 

function exec() {
    const saudacao = 'CHAMAAA!' //Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de chaves(nomes)/valores

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90.0,
    endereço: {
        logadouro: 'Rua Muito Loucura Crazy',
        Numero: 89
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)