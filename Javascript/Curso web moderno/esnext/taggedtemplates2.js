const produto = function(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 28.99
const parcelado = 11

console.log(produto `1x de ${preco} ou 3x de ${parcelado}.`)