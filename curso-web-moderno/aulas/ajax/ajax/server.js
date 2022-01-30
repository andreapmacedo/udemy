








const bodyParser = require('body-parser')
const expres = require('express')
const app = expres()


app.use(expres.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get('/test', (req, res) => res.send('ok'))

app.listen(8080, () => console.log('Executando...'))