const porta = 3000

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})


// app.use((req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
// })

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })


// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
// })




app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})