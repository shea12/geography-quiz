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
      selectedCategory: '',
      selectedContinent: '',
      placesArray: [],
      quizTitle: null,
      capitals: false,
      states: false,
      timing: false,
      namedPlace: '',
      showWinnerModal: false,
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


  handleCategorySelection(selCategory) {
    this.setState({ selectedCategory: selCategory })
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
          })
        }
      }
      if (capitals) {
        // user selected a state capitals quiz
        quizDesc = 'capitals of ' + placeName
        this.setState({ capitals: true, quizTitle: quizDesc })
      } else {
        // user selected states quiz
        quizDesc = 'states of ' + placeName
        this.setState({ capitals: false, quizTitle: quizDesc })
        console.log('quizDesc: ', quizDesc)
      }
    } else if (!selCountry) {
      this.setState({
        placesArray: countryArrayCopy,
        states: false,
        lonlat: WORLD[selContinent].lonlat,
        zoom: WORLD[selContinent].zoom,
      })
      placeName = WORLD[selContinent].name
      if (capitals) {
        // user selected countries capitals quiz
        console.log('here')
        quizDesc = 'capitals of ' + placeName
        this.setState({ capitals: true, quizTitle: quizDesc })
      } else {
        // user selected countries quiz
        quizDesc = 'countries of ' + placeName
        this.setState({ capitals: false, quizTitle: quizDesc })
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
      selectedCategory: '',
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
      this.setState({ timing: false, selectedCategory: '', selectedContinent: '', showWinnerModal: true })
    }
  }

  getFinalTime(time) {
    this.setState({ finalTime: time })
  }

  handleGiveUp() {
    this.setState({
      timing: false,
    })
  }

  render() {
    let winnermodal = <div />

    if (!this.state.timing && this.state.showWinnerModal) {
      winnermodal = <WinnerModal
        onClose={this.handleBack}
        time={this.state.finalTime}
        selectedContinent={this.state.selectedContinent}
        quizTitle={this.state.quizTitle}
        capital={this.state.capitals}
        states={this.state.states}
      />
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
          {winnermodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
