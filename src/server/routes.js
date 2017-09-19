const continents = require('./controllers/continentsController.js')
const countries = require('./controllers/countriesController.js')
const states = require('./controllers/statesController.js')

module.exports = function (app, express) {
  // Continents
  app.get('/:continent/get-number-countries', continents.getNumberOfCountries)
  app.get('/:continent/get-location', continents.getLocation)

  // Countries
  app.get('/:continent/get-countries', countries.getCountriesOfContinent)
  app.get('/:country/get-country-location', countries.getLocation)
  // app.get('/:country/get-number-states', countries.getNumberOfStates)

  // States
  // app.get('/:continent/:country/:state/get-capital', states.getStateCapitals)
  app.get('/:country/get-states', states.getStates)
}
