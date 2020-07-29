const prod1 = {} // o par de colchetes '{}' simboliza um objeto. Se fossem parentêses '()', seria um array

// Objeto é uma coleção/grupos de pares, chavese valor.

prod1.nome = 'Celular ultra mega power UUUUUH'
/* Aqui o js é muito dinâmico. Mesmo sem antes ter criado o parâmetro 'nome'
o js já o 'cria' e armazena o valor dado nele mesmo
*/
prod1.preco = 4998.90
prod1['Descontasso, o patrão ta maluuuuuco'] = 0.50 // Evitar usar atributos com espaçamentos.
console.log(prod1)

/* o js trabalha internamente com objetos do mesmo jeito que python funciona
com dicionários, usando os pares do nome e do valor. Ex: (key: value).
Dentro de cada objeto só é possivel haver 1 identificiador único (não pode usar o mesmo nome para atribuir a outra key).
*/

// Criação convencional de um objeto

const prod2 = {
    nome: 'Camisa polo', //Não esquecer da virgula.
    preco: 79.90,
    //podemos ter outro objeto dentro de outro objeto
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)

// Formato JSON (JSON é uma string)
// As atribuições de JSON são denominados por aspas duplas(" ")
//JSON é um formato textual de objeto
'{"nome": "Camisa polo", "preco": 79.90}'