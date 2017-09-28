const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const continentSchema = new Schema({
  name: String, // continent name
  abbrv: String, // two letter continent abbreviation
  lonlatzoom: Array, // longitude latitude zoom level
  numCountries: Number, // number of countries in continent
}, { collection: 'continents' })

const countrySchema = new Schema({
  cap: String, // capital of country
  name: String, // country name
  abbrv: String, // two letter country abbreviation
  leader: String, // leader of country
  numStates: Number, // number of states in country
  continent: String, // continent name
  lonlatzoom: Array, // longitude latitude zoom level
}, { collection: 'countries' })

const stateSchema = new Schema({
  cap: String, // capital of state
  name: String, // state name
  abbrv: String, // two/three letter state abbreviation
  country: String, // country name
}, { collection: 'states' })

const territorySchema = new Schema({
  cap: String, // capital of state
  name: String, // state name
  abbrv: String, // two/three letter state abbreviation
  country: String, // country name
}, { collection: 'territories' })

const waterSchema = new Schema({
  name: String,
  abbrv: String,
  lonlatzoom: Array,
}, { collection: 'water' })

const landmarksSchema = new Schema({
  name: String,
  abbrv: String,
  continent: String,
  lonlatzoom: Array,
}, { collection: 'landmarks' })

const leadersSchema = new Schema({
  name: String,
  abbrv: String,
  title: String,
  country: String,
  continent: String,
  lonlatzoom: Array,
}, { collection: 'leaders' })

const layerCodesSchema = new Schema({
  layer: String,
  codes: Array,
}, { collection: 'layerCodes'})

// haven't created this functionality yet
const userSchema = new Schema({
  username: String,
  email: String,
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // token: String,
  // gamesplayed: Number,
}, { collection: 'users' })


module.exports = {
  users: mongoose.model('users', userSchema),
  water: mongoose.model('water', waterSchema),
  states: mongoose.model('state', stateSchema),
  leaders: mongoose.model('leaders', leadersSchema),
  countries: mongoose.model('country', countrySchema),
  landmarks: mongoose.model('landmarks', landmarksSchema),
  continents: mongoose.model('continents', continentSchema),
  layerCodes: mongoose.model('layerCodes', layerCodesSchema),
  territories: mongoose.model('territories', territorySchema),
}
