const express = require('express')
const mongoose = require('mongoose')

const mongoURI = require(`${__dirname}/dbkey.js`)
const dbServer = process.env.DB_ENV || 'primary'

mongoose.connect(mongoURI, {
  useMongoClient: true,
})

mongoose.connection.on('connected', function () {
  /* eslint-disable */
  console.log('Connected to DB: ' + dbServer)
  /* eslint-enable */
  const app = express()
  const port = process.env.PORT || 8081
  require('./middleware.js')(app, express)
  require('./routes.js')(app, express)

  app.listen(port, function () {
    /* eslint-disable */
    console.log('Listening on port: ', port)
    /* eslint-enable */
  })
})

mongoose.connection.on('error', function (error) {
  /* eslint-disable */
  console.error('Error connecting to DB: ' + dbServer + '. Error: ', error)
  /* eslint-enable */
})

mongoose.connection.on('disconnected', function () {
  /* eslint-disable */
  console.log('Disconnected DB: ' + dbServer)
  /* eslint-enable */
})

const gracefulExit = function () {
  mongoose.connection.close(function () {
    /* eslint-disable */
    console.log('Node process ended, closed DB: ' + dbServer)
    /* eslint-enable */
    process.exit(0)
  })
}
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit)

/*
deployment process:
  remember! <script> window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {} </script>
  git push heroku master
  heroku open
  heroku logs --tail

CL mLab: 
  mongo ds139984.mlab.com:39984/geo-quiz -u {username} -p {password}
*/
