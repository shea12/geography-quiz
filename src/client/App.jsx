import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/* eslint-disable */
import WelcomeModal from './components/popups/welcomemodal.jsx'
import Maps from './components/basemap/map.jsx'
import Header from './components/header/Header.jsx'
import WinnerModal from './components/popups/winnermodal.jsx'
import WORLD from '../../assets/continentContents'
/* eslint-enable */

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
      selectedContinent: '',
      placesArray: [],
      timing: false,
      namedPlace: '',
      showWinnerModal: false,
      capitals: false,
      states: false,
      quizTitle: null,
    }

    this.handleLocation = this.handleLocation.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.handlePause = this.handlePause.bind(this)
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

    const countryArrayCopy = WORLD[selContinent].countries.slice()

    if (selCountry) {
      for (let i = 0; i < countryArrayCopy.length; i += 1) {
        if (countryArrayCopy[i].abbrv === selCountry) {
          const statesArrayCopy = countryArrayCopy[i].states.slice()
          this.setState({
            placesArray: statesArrayCopy,
            states: true,
            lonlat: countryArrayCopy[i].lonlat,
            zoom: countryArrayCopy[i].zoom,
          })
        }
      }
      if (capitals) {
        // user selected a state capitals quiz
        this.setState({ capitals: true, quizTitle: 'State Capitals' })
      } else {
        // user selected states quiz
        this.setState({ capitals: false, quizTitle: 'States' })
      }
    } else if (!selCountry) {
      this.setState({
        placesArray: countryArrayCopy,
        states: false,
        lonlat: WORLD[selContinent].lonlat,
        zoom: WORLD[selContinent].zoom,
      })
      if (capitals) {
        // user selected countries capitals quiz
        this.setState({ capitals: true, quizTitle: 'Country Capitals' })
      } else {
        // user selected countries quiz
        this.setState({ capitals: false, quizTitle: 'Countries' })
      }
    }
  }

  handleStart() {
    this.setState({
      timing: true,
    })
  }

  handleBack() {
    this.setState({
      selectedContinent: '',
      timing: false,
      lonlat: [0.2, 20.6],
      zoom: 2,
      showWinnerModal: false,
    })
  }

  handleNamedPlace(place) {
    this.setState({ namedPlace: place })
  }

  handleTimer(startStop, complete) {
    if (startStop && !complete) {
      // setState of timer to true
      this.setState({ timing: true })
    } else if (!startStop && complete) {
      // user entered all contries setState of timer to false
      // show winnermodal, turn off timer, reset selection
      // need to record total countries, continent name, and final time
      this.setState({ timing: false, selectedContinent: '', showWinnerModal: true })
    }
  }

  handleGiveUp() {
    this.setState({
      timing: false,
    })
  }

  handlePause() {
    this.setState({
      timing: false,
    })
  }

  render() {
    let winnermodal = <div />

    if (!this.state.timing && this.state.showWinnerModal) {
      winnermodal = <WinnerModal onClose={this.handleBack} />
    } else {
      winnermodal = <div />
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
            handleLocation={this.handleLocation}
            handleNamedPlace={this.handleNamedPlace}
            handleBack={this.handleBack}
            handleStart={this.handleStart}
            handleTimer={this.handleTimer}
            handleGiveUp={this.handleGiveUp}
            handlePause={this.handlePause}
          />
          <Maps
            lonlat={this.state.lonlat}
            zoom={this.state.zoom}
            namedPlace={this.state.namedPlace}
            selectedContinent={this.state.selectedContinent}
            capitals={this.state.capitals}
            states={this.state.states}
          />
          {winnermodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
