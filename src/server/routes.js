const continents = require('./controllers/continentsController.js')
const countries = require('./controllers/countriesController.js')
const states = require('./controllers/statesController.js')
const territories = require('./controllers/territoriesController.js')
const users = require('./controllers/usersController.js')
const water = require('./controllers/waterController.js')
const landmarks = require('./controllers/landmarksController.js')

module.exports = function (app) {
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

  // Territories
  app.get('/:country/get-territories', territories.getTerritories)

  // Water
  app.get('/get-bodies-of-water', water.getBodiesOfWater)

  // Landmarks
  app.get('/get-landmarks', landmarks.getLandmarks)

  // Users
  app.get('/get-number-users', users.getNumberOfUsers)
}
