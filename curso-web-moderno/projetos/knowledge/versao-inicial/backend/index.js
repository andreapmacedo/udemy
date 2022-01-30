const porta = 3000

const app = require('express')()
const consign = require('consign')
consign()
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(porta, () => {
  console.log('Backend executando...')
})

