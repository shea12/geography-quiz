import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WelcomeModal from './components/popups/welcomemodal'
import Title from './components/header/headtitle/title'
import HeaderCard from './components/header/headtitle/headercard'
import Maps from './components/basemap/map'
import Header from './components/header/Header'
import QuizDescription from './components/header/QuizDescription'
import InputScoreTime from './components/header/InputScoreTime'
import QuizModal from './components/popups/quizmodal'
import categories from './assets/quizcategories'
import quicklookup from './assets/quicklookup'

import {
  NTPgetRandomPlace,
  NTPhandleInput,
  NTPcheckUserInput,
  FFAhandleInput,
  FFAcheckUserInput
} from './components/helpers'

/*
Notes:
  9/22:
  PO_LABEL is not found, need to inc PO1, PO2
  AO_LABEL needs to reference AO1 and AO2
  9/23:
  HUGE refactor
  Buttons could be condensed into 1 or 2 components rather than 4
  9/24:
  Morning: fix water quiz, import helper functions
  Afternoon: spruce up styling (fix hover, add colors, buttons)
  need to make a skip button for NTP style quizzes
  add lonlatzoom for country close ups
  on give up, show all unnamed places in red before zooming back out
  incorporate custom mapbox style
*/

const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lonlatzoom: [0.2, 20.6, 2],
      options: categories,
      selectedQuiz: false,
      timing: false,
      // layer: '',
      placesArray: [],
      placesNumber: 0,
      modifier: 'name',
      namedPlace: '',
      placesRemaining: 0,

      quizTitle: '',
      showquizModal: false,
      gaveUp: false,
      finalTime: 0,
    }

    this.handleBack = this.handleBack.bind(this)
    this.resetState = this.resetState.bind(this)
    this.getQuizData = this.getQuizData.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.quickLookLonLatZoom = this.quickLookLonLatZoom.bind(this)
  }

  quickLookLonLatZoom(selPlace, callback) {
    callback(quicklookup[selPlace].lonlatzoom)
  }

  getQuizData(path, selection) {
    let lonlatzoo = ''
    let quiztype = ''
    if (selection !== 'BW') {
      const abbrv = selection.charAt(0) + selection.charAt(1)
      this.quickLookLonLatZoom(abbrv, function (llz) {
        lonlatzoo = llz
      })
      quiztype = 'FFA'
    } else {
      lonlatzoo = [0.2, 20.6, 2]
      quiztype = 'NTP'
    }
    axios.get(path)
      .then((d) => {
        this.setState({
          placesArray: d.data.places,
          placesNumber: d.data.places.length,
          placesRemaining: d.data.places.length,
          lonlatzoom: lonlatzoo,
          quizType: quiztype,
        })
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('axios error', error)
        /* eslint-enable */
      })
  }

  handleSelection(selection) {
    if (this.state.options[selection].quiz === true) {
      if (this.state.options[selection].cap) {
        this.setState({
          modifier: 'cap',
          selectedQuiz: true,
          layer: this.state.options[selection].layer,
          quizTitle: this.state.options[selection].title,
          quizDescription: this.state.options[selection].desc,
        })
      } else {
        this.setState({
          selectedQuiz: true,
          layer: this.state.options[selection].layer,
          quizTitle: this.state.options[selection].title,
          quizDescription: this.state.options[selection].desc,
        })
      }
      this.getQuizData(this.state.options[selection].path, selection)
    } else {
      this.setState({
        options: this.state.options[selection].categories,
      })
    }
  }
  
  getFinalTime(time) {
    this.setState({ finalTime: time })
  }

  handleStart() {
    this.setState({
      timing: true,
    })
    if (this.state.quizType === 'NTP') {
      NTPgetRandomPlace.call(this)
    }
  }

  handleNamedPlace(place) {
    const remaining = this.state.placesRemaining - 1
    this.setState({ namedPlace: place, placesRemaining: remaining })
  }

  handleInput(value) {
    if (this.state.quizType === 'FFA') {
      return FFAhandleInput.call(this, value)
    } else if (this.state.quizType === 'NTP') {
      return NTPhandleInput.call(this, value)
    }
  }

  resetState(showModal, gaveUp) {
    this.setState({
      selectedQuiz: false,
      timing: false,
      lonlatzoom: [0.2, 20.6, 2],
      clearLabels: true,
      options: categories,
      showquizModal: showModal,
      gaveUp: gaveUp,
    })
  }

  handleBack() {
    this.resetState(false)
  }

  handleTimer(startStop, complete) {
    if (startStop && !complete) {
      this.setState({ timing: true })
    } else if (!startStop && complete) {
      this.resetState(true, false)
    }
  }

  handleGiveUp() {
    this.resetState(true, true)
  }

  render() {
    let header = <div />
    let quizmodal = <div />

    if (!this.state.selectedQuiz) {
      header = <Header
        options={this.state.options}
        handler={this.handleSelection}
        handleBack={this.handleBack}
      />
    } else if (this.state.selectedQuiz && !this.state.timing) {
      header = <QuizDescription
        quizTitle={this.state.quizTitle}
        quizDescription={this.state.quizDescription}
        handleBack={this.handleBack}
        handleStart={this.handleStart}
      />
    } else if (this.state.selectedQuiz && this.state.timing) {
      header = <InputScoreTime 
        timing={this.state.timing}
        remaining={this.state.placesRemaining}
        handleTimer={this.handleTimer}
        handleInput={this.handleInput}
        handleBack={this.handleBack}
        getFinalTime={this.getFinalTime}
        handleGiveUp={this.handleGiveUp}
      />
    }
    
    if (!this.state.timing && this.state.showquizModal) {
      quizmodal = (<QuizModal
        onClose={this.handleBack}
        time={this.state.finalTime}
        quizTitle={this.state.quizTitle}
        gaveUp={this.state.gaveUp}
        placesNumber={this.state.placesNumber}
        placesRemaining={this.state.placesRemaining}
      />)
    } else {
      quizmodal = <div />
    }

    return (
      <MuiThemeProvider>
        <div style={{ margin: 0, padding: 0 }}>
          <Title />
          <HeaderCard />
          <WelcomeModal />
          
          {header}
          
          <Maps
            lonlatzoom={this.state.lonlatzoom}
            namedPlace={this.state.namedPlace}
            layer={this.state.layer}
            clearLabels={this.state.clearLabels}
            quizType={this.state.quizType}
          />

          {quizmodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
