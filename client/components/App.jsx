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
      countryArray: [],
      // abbrevs: [],
      timing: false,
      namedCountry: '',
      showModal: false,
    }

    this.handleLocation = this.handleLocation.bind(this)
    this.handleNamedCountry = this.handleNamedCountry.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
  }

  handleLocation(selectedContin) {
    // access selected continent info from 'WORLD', make copy
    const countryArrayCopy = WORLD[selectedContin].countries.slice()
    this.setState({
      lonlat: WORLD[selectedContin].lonlat,
      zoom: WORLD[selectedContin].zoom,
      selectedContinent: selectedContin,
      showLabels: true,
      countryArray: countryArrayCopy,
      // abbrevs: WORLD[selectedContin].abbrevs,
    })
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

  handleNamedCountry(country) {
    this.setState({ namedCountry: country })
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
        countryArray={this.state.countryArray}
        namedCountry={this.handleNamedCountry}
        handleTimer={this.handleTimer}
      />)
      scorekeeper = (<ScoreKeeper
        countryArray={this.state.countryArray}
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
            namedCountry={this.state.namedCountry}
            selectedContinent={this.state.selectedContinent}
            showLabels={this.state.showLabels}
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
