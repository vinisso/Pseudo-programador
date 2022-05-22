const porta = 3003
// porta em redes nada mais é, que, uma forma de atribuir um número a um processo que está utilizando de comunicação de redes no computador
// nota interessante: uma requisição HTTP, caso não seja atribuida uma porta, sempre usuará a porta padrão 80.

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 1234.56 }) // send() automaticamente transforma o Obj em JSON.
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})