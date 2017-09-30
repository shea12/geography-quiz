const users = require('./controllers/usersController.js')
const water = require('./controllers/waterController.js')
const states = require('./controllers/statesController.js')
const leaders = require('./controllers/leadersController.js')
const countries = require('./controllers/countriesController.js')
const landmarks = require('./controllers/landmarksController.js')
const continents = require('./controllers/continentsController.js')
const layerCodes = require('./controllers/layerCodesController.js')
const territories = require('./controllers/territoriesController.js')

module.exports = function (app) {
  // Continents
  app.get('/:continent/get-number-countries', continents.getNumberOfCountries)
  app.get('/:continent/get-location', continents.getLocation)

  // Countries
  app.get('/:continent/get-countries', countries.getCountriesOfContinent)
  app.get('/:country/get-country-location', countries.getLocation)
  // app.get('/:country/get-number-states', countries.getNumberOfStates)

  // States
  app.get('/:country/get-states', states.getStates)
  // app.get('/:continent/:country/:state/get-capital', states.getStateCapitals)

  // Territories
  app.get('/:country/get-territories', territories.getTerritories)

  // Water
  app.get('/get-bodies-of-water', water.getBodiesOfWater)

  // Landmarks
  app.get('/get-landmarks', landmarks.getLandmarks)

  // Leaders
  app.get('/get-g20-leaders', leaders.getLeaders)

  // layerCodes
  app.get('/get-all-layer-codes', layerCodes.getAllLayerCodes)
  app.get('/:layer/get-layer-codes', layerCodes.getLayerCodes)

  // Users
  app.get('/get-number-users', users.getNumberOfUsers)
}
