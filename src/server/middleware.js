const bodyParser = require('body-parser')
const path = require('path')
// const db = require(`${__dirname}/schemas.js`)
// const mongoose = require('mongoose')

module.exports = function(app, express) {
  app.use(express.static(path.join(__dirname, '../../src/deploy')))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
