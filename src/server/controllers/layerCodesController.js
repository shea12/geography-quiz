const db = require('../schemas.js')

const LayerCodes = db.layerCodes

module.exports = {
  getAllLayerCodes: (req, res) => {
    return LayerCodes.find()
      .then((layer) => {
        console.log('in server, layer: ', layer)
        res.status(200).send({ codes: layer })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
