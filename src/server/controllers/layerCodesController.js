const db = require('../schemas.js')

const LayerCodes = db.layerCodes

module.exports = {
  getAllLayerCodes: (req, res) => {
    return LayerCodes.find()
      .then((code) => {
        res.status(200).send({ codes: code })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
  getLayerCodes: (req, res) => {
    return LayerCodes.find({
      layer: req.params.layer,
    })
      .then((code) => {
        res.status(200).send({ codes: code })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
