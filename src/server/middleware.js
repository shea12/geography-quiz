const bodyParser = require('body-parser')
const path = require('path')

<<<<<<< HEAD
// const db = require(`${__dirname}/schemas.js`)

module.exports = function (app, express) {
  // console.log('middleware!')
=======
module.exports = function(app, express) {
  console.log('middleware!')
>>>>>>> b628b9b3e86095af18024323cd35657c3e220c0f
  app.use(express.static(path.join(__dirname, '../../src/deploy')))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
