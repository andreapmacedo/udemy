// const porta = 3001

// const express = require('express')
// const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(cors())
}