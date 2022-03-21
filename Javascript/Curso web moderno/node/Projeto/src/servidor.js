const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // O método send() fará esse objeto ser convertido para JSON automaticamente.
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})


// Se usar app.use() ao invés de app.get(), ele atenderá a requisição independente do nome do arquivo... Teste abaixo

// =========== DESCOMENTE ABAIXO PARA TESTAR ============

/*
app.use((req, res, next) => {
    console.log('Middleware 1...')
    next()
*/



