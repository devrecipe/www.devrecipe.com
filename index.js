var bodyParser = require('body-parser')
var express = require('express')

var port = process.env.PORT || 1338
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('static'))

app.set('view engine', 'pug')

app.all('/', (req, res) => {
    res.render('index')
})

app.all('/privacy-policy', (req, res) => {
    res.render('privacy')
})

app.all('/terms-of-services', (req, res) => {
    res.render('terms-services')
})

app.all('/*', (req, res) => {
    res.render('not-found')
})

app.listen(port)