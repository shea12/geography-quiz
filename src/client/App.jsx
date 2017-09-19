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

  // should move this to a helper function file
  // lint says "expected 'this' to be used by class method"
  getLonLatZoom(selPlace, func, callback) {
    axios.get(`/${selPlace}/${func}`)
      .then((d) => {
        callback(d.data.lonlatzoom)
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('axios error', error)
        /* eslint-enable */
      })
  }

  handleCountryQuiz(selCountry, capitals) {
    let quizDesc = ''
    let lonlatzoo = []

    // lint says "unexpected unnamed function, unnamed function"
    this.getLonLatZoom(selCountry, 'get-country-location', function (llz) {
      lonlatzoo = llz
    })

    axios.get(`/${selCountry}/get-states`)
      .then((d) => {
        this.setState({
          placesArray: d.data.states,
          states: true,
          placesNumber: d.data.states.length,
          placesRemaining: d.data.states.length,
          lonlatzoom: lonlatzoo,
        })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('axios error', error)
        /* eslint-enable */
      })

    if (capitals) {
      // user selected a state capitals quiz
      quizDesc = `capitals of ${selCountry}`
      this.setState({ capitals: true, quizTitle: quizDesc })
    } else {
      // user selected states quiz
      quizDesc = `states of ${selCountry}`
      this.setState({ capitals: false, quizTitle: quizDesc })
    }
  }

  handleContinentQuiz(selContinent, capitals) {
    let quizDesc = ''
    let lonlatzoo = []
    this.getLonLatZoom(selContinent, 'get-location', function (llz) {
      lonlatzoo = llz
    })

    axios.get(`/${selContinent}/get-countries`)
      .then((d) => {
        // console.log('countries: ', countries)
        this.setState({
          placesArray: d.data.countries,
          states: false,
          placesNumber: d.data.countries.length,
          placesRemaining: d.data.countries.length,
          lonlatzoom: lonlatzoo,
        })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('axios error: ', error)
        /* eslint-enable */
      })

    if (capitals) {
      // user selected countries capitals quiz
      quizDesc = `country capitals of ${selContinent}`
      this.setState({ capitals: true, quizTitle: quizDesc })
    } else {
      // user selected countries quiz
      quizDesc = `countries of ${selContinent}`
      this.setState({ capitals: false, quizTitle: quizDesc })
    }
  }

  handleQuizChoice(selContinent, selCountry, capitals) {
    this.setState({ selectedContinent: selContinent })
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
