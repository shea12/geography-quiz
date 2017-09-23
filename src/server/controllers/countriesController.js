const db = require('../schemas.js')

const Countries = db.countries

module.exports = {
  // description: Returns the number of states in a country
  // params: { country: abbrv of country ex: 'US' }
  getNumberOfStates: (req, res) => {
    return Countries.findOne({
      abbrv: req.params.country,
    })
      .then((country) => {
        res.status(200).send({ numStates: country.numStates })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },

  getCountriesOfContinent: (req, res) => {
    return Countries.find({
      continent: req.params.continent,
    })
      .then((country) => {
        console.log('countries: ', country)
        res.status(200).send({ countries: country })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },

  getLocation: (req, res) => {
    return Countries.find({
      abbrv: req.params.country,
    })
      .then((country) => {
        res.status(200).send({ lonlatzoom: country[0].lonlatzoom })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
