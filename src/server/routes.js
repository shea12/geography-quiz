const continents = require('./controllers/continentsController.js')

module.exports = function (app, express) {
  app.get('/:continent/get-number-countries', continents.getNumberOfCountries)
}
