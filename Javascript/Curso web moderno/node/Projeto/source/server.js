const porta = 3003
// porta em redes nada mais é, que, uma forma de atribuir um número a um processo que está utilizando de comunicação de redes no computador
// nota interessante: uma requisição HTTP, caso não seja atribuida uma porta, sempre usuará a porta padrão 80.

const express = require('express')
const app = express()
const bodyParser = require('body-Parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded( { extended: true } ))

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
*/


app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos()) // send() automaticamente transforma o Obj em JSON.
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = dataBase.salvarProduto( {
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// Alterando os registros:

app.put('/produtos/:id', (req,res,next) => {
    const produto = dataBase.salvarProduto( {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// Apagando registro

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})