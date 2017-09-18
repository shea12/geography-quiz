const continents = require('./controllers/continentsController.js')

module.exports = function (app) {
  app.get('/:continent/get-number-countries', continents.getNumberOfCountries)
}
