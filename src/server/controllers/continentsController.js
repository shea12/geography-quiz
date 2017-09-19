const db = require('../schemas.js')

const Continents = db.continents

module.exports = {
  // description: Returns the number of countries on a continent
  // params: { continent: abbrv of continent ex: 'NA' }
  getNumberOfCountries: (req, res) => {
    return Continents.findOne({
      abbrv: req.params.continent,
    })
    .then(continent => {
      res.status(200).send({ numCountries: continent.numCountries })
    })
    .catch(error => {
      /* eslint-disable */
      console.log('ERROR: ', error)
      /* eslint-enable */
      res.status(200).send([])
    })
  },

  getLocation: (req, res) => {
    return Continents.find({
      abbrv: req.params.continent,
    })
    .then(continent => {
      res.status(200).send({ lonlatzoom: continent[0].lonlatzoom })
    })
    .catch(error => {
      /* eslint-disable */
      console.log('ERROR: ', error)
      /* eslint-enable */
      res.status(200).send([])
    })
  },
}
