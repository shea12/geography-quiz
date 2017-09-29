const db = require('../schemas.js')

const Water = db.water

module.exports = {
  getBodiesOfWater: (req, res) => {
    return Water.find()
      .then((bow) => {
        res.status(200).send({ places: bow })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send()
      })
  },
}
