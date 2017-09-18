let express = require('express')
let app = express();
let mongoose = require('mongoose')
let mongo_uri = require(`${__dirname}/dbkey.js`)

mongoose.connect(mongo_uri, {
  useMongoClient: true,
})

let port = process.env.PORT || 8080

require('./routes.js')(app, express)

app.listen(port, function() {
  console.log('Mongoose connection running on port: ', port)
})

