const bodyParser = require('body-parser')
const path = require('path')

// const db = require(`${__dirname}/schemas.js`)

module.exports = function(app, express) {
  // console.log('middleware!')
  app.use(express.static(path.join(__dirname, '../../src/deploy')))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
