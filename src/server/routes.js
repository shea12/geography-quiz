const continents = require('./controllers/continentsController.js')
const countries = require('./controllers/countriesController.js')
const states = require('./controllers/statesController.js')

module.exports = function (app, express) {
  // Continents
  app.get('/:continent/get-number-countries', continents.getNumberOfCountries)

  // Countries
  app.get('/:continent/get-countries', countries.getCountriesOfContinent)
  app.get('/:continent/:country/get-number-states', countries.getNumberOfStates)

  // States
  app.get('/:continent/:country/:state/get-capital', states.getStateCapitals)
}
