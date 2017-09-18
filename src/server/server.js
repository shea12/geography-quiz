const express = require('express')
const mongoose = require('mongoose')

const mongoURI = require('./dbkey.js')

const app = express()

mongoose.connect(mongoURI, {
  useMongoClient: true,
})

const port = process.env.PORT || 8081

require('./routes.js')(app, express)

app.listen(port, function () {
  /* eslint-disable */
  console.log('Running on port: ', port)
  /* eslint-enable */
})

