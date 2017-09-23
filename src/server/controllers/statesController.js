const db = require('../schemas.js')

const States = db.states

module.exports = {
  // description: Returns the capital of a state
  // params: { state: abbrv of state ex: 'FL' }
  getStates: (req, res) => {
    return States.find({
      country: req.params.country,
    })
      .then((state) => {
        res.status(200).send({ places: state })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
