const porta = 3001

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// const saudacao = require('./saudacaoMid')
//vai entender que é uma função middleware
// app.use(saudacao("Andre"))




app.use('/opa', (req, res, next) => {
  console.log('Antes')
  next()
})


app.get('/opa', (req, res) => {
  console.log("next")
  res.json({
    data: [
      { id: 7, name: 'Ana', position: 1 },
      { id: 34, name: 'Bia', position: 2 },
      { id: 73, name: 'Carlos', position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
  })
})

app.get('/clientes/relatorio', (req, res) => {
  // http://localhost:3001/clientes/relatorio?completo=true&ano=2018
  res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
  // http://localhost:3001/clientes/2
  res.send(`Cliente {req.params.id} selecionado`)
})

// sem o bodyParser
app.post('/corpo', (req, res) => {
  let corpo = ''
  req.on('data', function (parte) {
    corpo += parte
  })
  res.on('end', function () {
    res.send(corpo)
  })
  // se tiver recebendo um JSON
  // res.on('end', function () {
  //   res.send(JSON.parse(corpo))
  // })
})

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const usuarioApi = require('./api/usuario')
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

require('./api/produto')(app, 'com param')
// ou
const produtoApi = require('./api/produto')
produtoApi(app, 'com param')

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})