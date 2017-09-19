import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WelcomeModal from './components/popups/welcomemodal'
import Maps from './components/basemap/map'
import Header from './components/header/Header'
import QuizModal from './components/popups/quizmodal'
import WORLD from './assets/continentContents'

// Axios 
const axios = require('axios')
// var instance = axios.create()

const style = {
  container: {
    margin: 0,
    padding: 0,
  },
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lonlat: [0.2, 20.6],
      zoom: 2,
      selectedCategory: '',
      selectedContinent: '',
      placesArray: [],
      placesNumber: 0,
      placesRemaining: 0,
      quizTitle: null,
      capitals: false,
      states: false,
      timing: false,
      namedPlace: '',
      showquizModal: false,
      gaveUp: false,
      finalTime: 0,
    }

    this.handleCategorySelection = this.handleCategorySelection.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
  }

  getFinalTime(time) {
    this.setState({ finalTime: time })
  }
  
  /* PARAMS: 
      selContinent: string: 2 Letter Continent Abbreviation,
      selCountry: string: 2 Letter Country Abbreviation
      capitals: boolean: capitals quiz
  */
  handleLocation(selContinent, selCountry, capitals) {
    this.setState({
      selectedContinent: selContinent,
    })
    let quizDesc = ''
    let placeName = ''
    const countryArrayCopy = WORLD[selContinent].countries.slice()

    if (selCountry) {
      for (let i = 0; i < countryArrayCopy.length; i += 1) {
        if (countryArrayCopy[i].abbrv === selCountry) {
          const statesArrayCopy = countryArrayCopy[i].states.slice()
          placeName = countryArrayCopy[i].name
          this.setState({
            placesArray: statesArrayCopy,
            states: true,
            lonlat: countryArrayCopy[i].lonlat,
            zoom: countryArrayCopy[i].zoom,
            placesNumber: statesArrayCopy.length,
            placesRemaining: statesArrayCopy.length,
          })
        }
      }
      if (capitals) {
        // user selected a state capitals quiz
        quizDesc = `capitals of ${placeName}`
        this.setState({ capitals: true, quizTitle: quizDesc })
      } else {
        // user selected states quiz
        quizDesc = `states of ${placeName}`
        this.setState({ capitals: false, quizTitle: quizDesc })
      }
    } else if (!selCountry) {
      this.setState({
        placesArray: countryArrayCopy,
        states: false,
        lonlat: WORLD[selContinent].lonlat,
        zoom: WORLD[selContinent].zoom,
        placesNumber: WORLD[selContinent].length,
        placesRemaining: WORLD[selContinent].length,
      })
      placeName = WORLD[selContinent].name
      if (capitals) {
        // user selected countries capitals quiz
        quizDesc = `country capitals of ${placeName}`
        this.setState({ capitals: true, quizTitle: quizDesc })
      } else {
        // user selected countries quiz
        quizDesc = `countries of ${placeName}`
        this.setState({ capitals: false, quizTitle: quizDesc })
      }
    }
  }

  handleStart() {
    this.setState({
      timing: true,
    })
    console.log('calling axios at: ', axios.baseURL)
    const continent = 'NA'

    axios.get(`/${continent}/get-number-countries`)
    .then((result) => {
      console.log('result: ', result)
    })
    .catch((error) =>{
      console.log('assxios error bruh')
    })
  }

  handleBack() {
    this.setState({
      selectedCategory: '',
      selectedContinent: '',
      timing: false,
      lonlat: [0.2, 20.6],
      zoom: 2,
      showquizModal: false,
    })
  }

  handleNamedPlace(place) {
    const remaining = this.state.placesRemaining - 1
    this.setState({ namedPlace: place, placesRemaining: remaining })
  }

  handleTimer(startStop, complete) {
    if (startStop && !complete) {
      // setState of timer to true
      this.setState({ timing: true })
    } else if (!startStop && complete) {
      // user entered all contries setState of timer to false
      // show quizmodal, turn off timer, reset selection
      // need to record total countries, continent name, and final time
      this.setState({
        timing: false,
        selectedCategory: '',
        selectedContinent: '',
        showquizModal: true,
        gaveUp: false,
      })
    }
  }

  handleCategorySelection(selCategory) {
    this.setState({ selectedCategory: selCategory })
  }

  handleGiveUp() {
    this.setState({
      timing: false,
      showquizModal: true,
      gaveUp: true,
    })
  }

  render() {
    let quizmodal = <div />

    if (!this.state.timing && this.state.showquizModal) {
      quizmodal = (<QuizModal
        onClose={this.handleBack}
        time={this.state.finalTime}
        selectedContinent={this.state.selectedContinent}
        quizTitle={this.state.quizTitle}
        capital={this.state.capitals}
        states={this.state.states}
        gaveUp={this.state.gaveUp}
        placesNumber={this.state.placesNumber}
        placesRemaining={this.state.placesRemaining}
      />)
    } else {
      quizmodal = <div />
    }

    return (
      <MuiThemeProvider>
        <div style={style.container}>
          <WelcomeModal />
          <Header
            placesArray={this.state.placesArray}
            selectedContinent={this.state.selectedContinent}
            timing={this.state.timing}
            capitals={this.state.capitals}
            quizTitle={this.state.quizTitle}
            selectedCategory={this.state.selectedCategory}
            handleCategorySelection={this.handleCategorySelection}

            handleLocation={this.handleLocation}
            handleNamedPlace={this.handleNamedPlace}
            handleBack={this.handleBack}
            handleStart={this.handleStart}
            handleTimer={this.handleTimer}
            getFinalTime={this.getFinalTime}
            handleGiveUp={this.handleGiveUp}
          />
          <Maps
            lonlat={this.state.lonlat}
            zoom={this.state.zoom}
            namedPlace={this.state.namedPlace}
            selectedContinent={this.state.selectedContinent}
            capitals={this.state.capitals}
            states={this.state.states}
          />
          {quizmodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
