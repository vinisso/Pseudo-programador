Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++ ) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
    '{ "nome": "Boneca inflável", "preco": 279.80} '
]

//retornar apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => 'R$ ' + produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)