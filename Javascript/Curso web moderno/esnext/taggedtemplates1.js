// tagged Template - processa o template string dentro de uma função.

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string.'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag `O aluno ${aluno} está ${situacao}.`)