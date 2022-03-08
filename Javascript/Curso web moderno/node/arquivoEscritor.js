const fs = require('fs')

const produto = {
    nome : 'Celular',
    preco : 1259.90,
    desconto : 0.15
}

fs.writeFile(__dirname + '/ArquivoGerado.JSON', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})