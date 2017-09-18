let db = require(`${__dirname}/../schemas.js`)

let Continents = db.continents

module.exports = {
  // description: Returns the number of countries on a continent
  // params: { continent: abbrv of continent ex: 'NA' }
  getNumberOfCountries: (req ,res) => {
    return Continents.findOne({
      abbrv: req.params.continent
    }).then(continent => {
      res.status(200).send({numCountries: continent.numCountries})
    }).catch(error => {
      console.log('ERROR: ', error)
      res.status(200).send([])
    })
  },
}