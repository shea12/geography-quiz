const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const continentSchema = new Schema({
  abbrv: String, // two letter continent abbreviation
  name: String, // continent name
  lonlatzoom: Array, // longitude latitude zoom level
  numCountries: Number, // number of countries in continent
})

const countrySchema = new Schema({
  abbrv: String, // two letter country abbreviation
  name: String, // country name
  continent: String, // continent name
  lonlatzoom: Array, // longitude latitude zoom level
  numStates: Number, // number of states in country
  cap: String, // capital of country
  leader: String, // leader of country
})

const stateSchema = new Schema({
  country: String, // country name
  abbrv: String, // two/three letter state abbreviation
  name: String, // state name
  cap: String, // capital of state
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
  states: mongoose.model('state', stateSchema),
  user: mongoose.model('user', userSchema),
}
