const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./src/routes')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/', routes)

module.exports = app