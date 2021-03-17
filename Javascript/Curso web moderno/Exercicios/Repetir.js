function repete(item, quantidade) {
    let resultado = []

    for (let i = 0; i < quantidade; i++) {
        resultado.push(item)
    }
    return resultado
}

console.log(repete('Claudio', 9))

// Outra resolução 

function repetir(item, quantidade){
    return Array(quantidade).fill(item)
}

console.log(repetir('alo?', 5))