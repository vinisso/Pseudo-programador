function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        }
}

console.log(criarProduto('Frigobar', 154.99))
console.log(criarProduto('Notebook', 2290.99))
console.log(criarProduto('Bola', 14.00))
console.log(criarProduto('Ketchup', 7.00))