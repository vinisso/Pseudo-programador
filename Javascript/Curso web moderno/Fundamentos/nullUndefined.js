
let valor // Não inicializada
console.log(valor)

valor = null
console.log(valor)
 /*
 null significa que a variavel que você se refere não está apontando nenhum
 endereço de memória. Ou seja, não tem valor.
 */
// console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined. Deixe o js fazer isso.
console.log(!!produto.preco) //undefined para boolean é um valor falso. (não não undefined = true)
//delete produto.preco //para deletar algum parâmentro do objeto (no caso aqui foi o preco)
console.log(produto)
produto.preco = null // sem preço.
//Sempre opte pelo null à undefined
console.log(!!produto.preco)
console.log(produto)