function mais(quantia){
    let resultado = ''

    for (let i = 0; i < quantia; i++){
        resultado += '+'
    }
    return resultado
}

console.log(mais(8))

// Outro método

function omaiszinho(quantidade) {
    return Array(quantidade).fill('+').join('')
}

console.log(omaiszinho(5))

// Mais um método

function simbolomais(quantia){
    return '+'.repeat(quantia)
}

console.log(simbolomais(12))