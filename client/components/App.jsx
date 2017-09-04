import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/* eslint-disable */
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'
import HeaderCard from './headercard.jsx'
import InputForm from './input.jsx'
import ScoreKeeper from './scorekeeper.jsx'
import StartButton from './startbutton.jsx'
import BackButton from './backbutton.jsx'
import Timer from './timer.jsx'
import FinishModal from './finishmodal.jsx'
import WORLD from '../../continentContents'
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
      showLabels: true,
      selectedContinent: '',
      placesArray: [],
      timing: false,
      namedPlace: '',
      showModal: false,
      capitals: false,
      states: false,
    }

    this.handleLocation = this.handleLocation.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
  }

  /* PARAMS: 
      selContinent: string: 2 Letter Continent Abbreviation,
      selCountry: string: 2 Letter Country Abbreviation
      capitals: boolean: capitals quiz
  */
  handleLocation(selContinent, selCountry, capitals) {
    this.setState({
      lonlat: WORLD[selContinent].lonlat,
      zoom: WORLD[selContinent].zoom,
      selectedContinent: selContinent,
      showLabels: true,
    })

    const countryArrayCopy = WORLD[selContinent].countries.slice()

    if (selCountry) {
      for (let i = 0; i < countryArrayCopy.length; i += 1) {
        if (countryArrayCopy[i].abbrv === selCountry) {
          const statesArrayCopy = countryArrayCopy[i].states.slice()
          this.setState({ placesArray: statesArrayCopy, states: true })
        }
      }
      if (capitals) {
        // user selected a state capitals quiz
        this.setState({ capitals: true })
      } else {
        // user selected states quiz
        this.setState({ capitals: false })
      }
    } else if (!selCountry) {
      this.setState({ placesArray: countryArrayCopy, states: false })
      if (capitals) {
        // user selected countries capitals quiz
        this.setState({ capitals: true })
      } else {
        // user selected countries quiz
        this.setState({ capitals: false })
      }
    }
  }

  handleStart() {
    this.setState({ timing: true, showLabels: false })
  }

  handleBack() {
    this.setState({ 
      selectedContinent: '',
      timing: false,
      lonlat: [0.2, 20.6],
      zoom: 2,
      showLabels: true,
      showModal: false,
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
      // show modal, turn off timer, reset selection
      // need to record total countries, continent name, and final time
      this.setState({ timing: false, selectedContinent: '', showModal: true })
    }
  }

  render() {
    let inputform
    let scorekeeper
    let startbutton
    let backbutton
    let timer
    let continentbuttons
    let modal = <div />

    // elif block to control whether continent buttons
    // or start & back buttons are shown
    if (this.state.selectedContinent !== '') {
      // user selected continent, show start & back buttons, hide continents
      startbutton = <StartButton handleStart={this.handleStart} />
      backbutton = <BackButton handleBack={this.handleBack} />
      continentbuttons = <div />
    } else if (this.state.selectedContinent === '') {
      // hide all quiz components when no continent is selected
      inputform = <div />
      scorekeeper = <div />
      backbutton = <div />
      startbutton = <div />
      continentbuttons = <Continents move={this.handleLocation} />
    }

    if (this.state.timing) {
      // render timer, score, and input when start is clicked
      inputform = (<InputForm
        placesArray={this.state.placesArray}
        namedPlace={this.handleNamedPlace}
        handleTimer={this.handleTimer}
      />)
      scorekeeper = (<ScoreKeeper
        placesArray={this.state.placesArray}
        continent={this.state.selectedContinent}
      />)
      timer = (<Timer
        timing={this.state.timing}
      />)
      startbutton = <div />
    } else if (!this.state.timing && this.state.showModal) {
      // if all countries have been identified, modal pops up
      modal = <FinishModal onClose={this.handleBack} />
    } else {
      // need to make a pause button
    }

    return (
      <MuiThemeProvider>
        <div style={style.container}>
          <Title />
          <Maps
            lonlat={this.state.lonlat}
            zoom={this.state.zoom}
            namedPlace={this.state.namedPlace}
            selectedContinent={this.state.selectedContinent}
            showLabels={this.state.showLabels}
            capitals={this.state.capitals}
            states={this.state.states}
          />
          <HeaderCard />
          {continentbuttons}
          {inputform}
          {scorekeeper}
          {startbutton}
          {backbutton}
          {timer}
          {modal}
        </div>
      </MuiThemeProvider>
    )
  }
}
