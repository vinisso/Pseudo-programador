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

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)