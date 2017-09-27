const db = require('../schemas.js')

const Landmarks = db.landmarks

module.exports = {
  getLandmarks: (req, res) => {
    return Landmarks.find()
      .then((landmark) => {
        res.status(200).send({ places: landmark })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
