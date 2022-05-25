const express = require('express')
var cors = require('cors')
const app = express()

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

app.options('*', cors())
app.use(cors())

app.use('/', [
  require('./restaurant'),
])

module.exports = app