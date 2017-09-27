const db = require('../schemas.js')

const Leaders = db.leaders

module.exports = {
  getLeaders: (req, res) => {
    return Leaders.find()
      .then((leader) => {
        res.status(200).send({ places: leader })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
