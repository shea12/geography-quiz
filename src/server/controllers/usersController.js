const db = require('../schemas.js')

const Users = db.users

module.exports = {
  getNumberOfUsers: (req, res) => {
    return Users.find()
      .then((users) => {
        const numberUsers = users.length
        res.status(200).send({ numUsers: numberUsers })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('ERROR: ', error)
        /* eslint-enable */
        res.status(200).send([])
      })
  }
}
