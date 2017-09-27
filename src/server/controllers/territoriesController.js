const db = require('../schemas.js')

const Territories = db.territories

module.exports = {
  getTerritories: (req, res) => {
    return Territories.find({
      country: req.params.country,
    })
      .then((territory) => {
        res.status(200).send({ places: territory })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
