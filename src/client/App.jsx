import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WelcomeModal from './components/popups/welcomemodal'
import Maps from './components/basemap/map'
import Header from './components/header/Header'
import QuizModal from './components/popups/quizmodal'

const axios = require('axios')

const style = {
  container: {
    margin: 0,
    padding: 0,
  },
}

const quicklookup = {
  NA: {name: 'North America', lonlatzoom: [-68.56, 35.7,3.16]},
  SA: {name: 'South America', lonlatzoom: [-53.74, -22.99,2.66]},
  AF: {name: 'Africa', lonlatzoom: [32.54, 1.52,2.79]},
  EU: {name: 'Europe', lonlatzoom: [23.57, 53.38,3.36]},
  AS: {name: 'Asia', lonlatzoom: [90.93, 28.19,2.87]},
  OC: {name: 'Oceania', lonlatzoom: [169.21, -19.58,3.07]},
  US: {name: 'the United States', lonlatzoom: [-95.784,39.01,4]},
  MX: {name: 'Mexico', lonlatzoom: [-100.13, 25.061,4.68]},
  CA: {name: 'Canada', lonlatzoom: [-93.84,56.75,3.61]},
  UK: {name: 'United Kingdom', lonlatzoom: [-2.698,55.115,5.05]},
  BR: {name: 'Brazil', lonlatzoom: [-51.46,-12.9,3.74]},
  ZA: {name: 'South Africa', lonlatzoom: [25.612,-27.794, 5.05]},
  IN: {name: 'India', lonlatzoom: [81.29,24.074,4.04]},
  AU: {name: 'Australia', lonlatzoom: [136.33,-27.06,3.76]},
}

// TODO: change from lonlat: [0,0], zoom: 0, to lonlatzoom: [0,0,0]
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lonlatzoom: [0.2, 20.6, 2],
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
    this.handleQuizChoice = this.handleQuizChoice.bind(this)
    this.handleCountryQuiz = this.handleCountryQuiz.bind(this)
    this.handleContinentQuiz = this.handleContinentQuiz.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.getLonLatZoom = this.getLonLatZoom.bind(this)
  }

  getFinalTime(time) {
    this.setState({ finalTime: time })
  }
  
  getLonLatZoom(selPlace, func, callback) {
    // axios.get(`/${selPlace}/${func}`)
    // .then((d) => {
    //   callback(d.data.lonlatzoom)
    // })
    // .catch((error) =>{
    //   console.log('axios error', error)
    // })

    // 
    callback(quicklookup[selPlace].lonlatzoom)
  }

  handleCountryQuiz(selCountry, capitals) {
    let quizDesc = ''
    let lonlatzoom = []
    this.getLonLatZoom(selCountry, 'get-country-location', function(llz) {
      lonlatzoom = llz
    })
    
    axios.get(`/${selCountry}/get-states`)
    .then((d) => {
      this.setState({
        placesArray: d.data.states,
        states: true,
        placesNumber: d.data.states.length,
        placesRemaining: d.data.states.length,
        lonlatzoom: lonlatzoom,
      })
    })
    .catch((error) =>{
      console.log('axios error', error)
    })

    if (capitals) {
      // user selected a state capitals quiz
      quizDesc = `capitals of ${quicklookup[selCountry].name}`
      this.setState({ capitals: true, quizTitle: quizDesc })
    } else {
      // user selected states quiz
      quizDesc = `states of ${quicklookup[selCountry].name}`
      this.setState({ capitals: false, quizTitle: quizDesc })
    }
  }

  handleContinentQuiz(selContinent, capitals) {
    let quizDesc = ''
    let lonlatzoom = []
    this.getLonLatZoom(selContinent, 'get-location', function(llz) {
      lonlatzoom = llz
    })

    axios.get(`/${selContinent}/get-countries`)
    .then((d) => {
      // console.log('countries: ', countries)
      this.setState({
        placesArray: d.data.countries,
        states: false,
        placesNumber: d.data.countries.length,
        placesRemaining: d.data.countries.length,
        lonlatzoom: lonlatzoom,
      })
    })
    .catch((error) => {
      console.log('axios error: ', error)
    })

    if (capitals) {
      // user selected countries capitals quiz
      quizDesc = `country capitals of ${quicklookup[selContinent].name}`
      this.setState({ capitals: true, quizTitle: quizDesc })
    } else {
      // user selected countries quiz
      quizDesc = `countries of ${quicklookup[selContinent].name}`
      this.setState({ capitals: false, quizTitle: quizDesc })
    }
  }

  handleQuizChoice(selContinent, selCountry, capitals) {
    this.setState({ selectedContinent: selContinent, })
    // user selected specific country quiz
    if (selCountry) {
      this.handleCountryQuiz(selCountry, capitals)
    // user selected continent quiz
    } else if (!selCountry) {
      this.handleContinentQuiz(selContinent, capitals)
    }
  }

  handleStart() {
    this.setState({
      timing: true,
    })
  }

  handleBack() {
    this.setState({
      selectedCategory: '',
      selectedContinent: '',
      timing: false,
      lonlatzoom: [0.2, 20.6, 2],
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

            handleQuizChoice={this.handleQuizChoice}
            handleNamedPlace={this.handleNamedPlace}
            handleBack={this.handleBack}
            handleStart={this.handleStart}
            handleTimer={this.handleTimer}
            getFinalTime={this.getFinalTime}
            handleGiveUp={this.handleGiveUp}
          />
          <Maps
            lonlatzoom={this.state.lonlatzoom}
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
