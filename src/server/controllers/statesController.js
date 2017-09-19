const db = require('../schemas.js')

const States = db.states

module.exports = {
  // description: Returns the capital of a state
  // params: { state: abbrv of state ex: 'FL' }
  getNumberOfCountries: (req, res) => {
    return States.findOne({
      abbrv: req.params.state,
    })
      .then(state => {
        res.status(200).send({ cap: state.cap })
      })
      .catch(error => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  },
}
