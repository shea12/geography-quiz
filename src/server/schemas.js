const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const continentSchema = new Schema({
  abbrv: String, // two letter continent abbreviation
  name: String, // continent name
  lon: Number, // longitude
  lat: Number, // latitude
  zoom: Number, // zoom level
  numCountries: Number, // number of countries in continent
})

const countrySchema = new Schema({
  abbrv: String, // two letter country abbreviation
  name: String, // country name
  continent: String, // continent name
  lon: Number, // longitude
  lat: Number, // latitude
  zoom: Number, // zoom level
  numStates: Number, // number of states in country
  cap: String, // capital of country
  leader: String, // leader of country
})

const stateSchema = new Schema({
  abbrv: String, // two/three letter state abbreviation
  name: String, // state name
  country: String, // country name
  lon: Number, // longitude
  lat: Number, // latitude
  zoom: Number, // zoom level
  cap: String, // capital of state
  gov: String, // name of governor
})

// haven't created this functionality yet, looking forward to it though
const userSchema = new Schema({
  username: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: String,
  gamesplayed: Number,
})


module.exports = {
  continents: mongoose.model('continents', continentSchema),
  country: mongoose.model('country', countrySchema),
  state: mongoose.model('state', stateSchema),
  user: mongoose.model('user', userSchema),
}
