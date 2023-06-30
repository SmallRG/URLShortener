const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const validUrl = require('valid-url');


require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`The server is running at localhost:${port}`)
})