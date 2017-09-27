const express = require('express')
const mongoose = require('mongoose')

const mongoURI = require(`${__dirname}/dbkey.js`)

const app = express()

mongoose.connect(mongoURI, {
  useMongoClient: true,
})

const port = process.env.PORT || 8081
require('./middleware.js')(app, express)
require('./routes.js')(app, express)

app.listen(port, function () {
  /* eslint-disable */
  console.log('App running on port: ', port)
  /* eslint-enable */
})

/*
deployment process:
  remember! <script> window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {} </script>
  git push heroku master
  heroku open
  heroku logs --tail

*/
