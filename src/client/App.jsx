import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WelcomeModal from './components/popups/welcomemodal'
import Menu from './components/header/headtitle/menu'
import HeaderCard from './components/header/headtitle/headercard'
import Maps from './components/basemap/map'
import Header from './components/header/Header'
import QuizDescription from './components/header/QuizDescription'
import InputScoreTime from './components/header/InputScoreTime'
import NextButton from './components/header/buttons/nextbutton'
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
  *** TODO *** PO_LABEL AO_LABEL -> PO1, PO2, AO1, AO2

  9/23:
  /// done /// HUGE refactor
  *** TODO *** Buttons to be condensed into 1 or 2 components

  9/24:
  /// done /// fix water quiz, import helper functions
  /// done /// spruce up styling (fix hover, add colors, buttons)
  /// done /// need to make a next button for NTP style quizzes
  *** TODO *** add lonlatzoom for country close ups
  *** TODO *** incorporate custom mapbox style

  9/25:
  /// done /// add landmark layers to map, add 5 US territories layers, buttons
  /// done /// add landmark schema, route, controller to server, landmarks to db
  /// done /// NTP need to pause for a moment after correct answer is entered

  /// done /// add clear map button
  /// done /// add show unnamed places button

  9/26:
  /// done /// security basics, validation on input box XSS
  /// done /// smooth out show/hide/giveup
  *** TODO *** make clearMap button only appear if map is not clear
  /// done /// make water labels darker / more easily visible
  /// done /// shade in coutries of capitals

  9/27: 
  /// done /// make hamburger menu top right corner
  /// done /// clearmap function bug fixes
  /// done /// fix pacific and atlantic labels
  /// done /// add G20 countries to db, quizcat, server
  /// done /// move countryCodes to mongodb, set up req routes
  
  *** TODO *** fix buggy layerCodes, consolidate mlab collection
  *** TODO *** move quizcategories to mongodb, set up req routes
  *** TODO *** remove keys from repo
  *** TODO *** special exceptions for leaders, 
                allow user to enter last name or full name
                on "show unnamed places" figure out way to show leaders names,
                  either on the map or in a list?

  *** TODO *** custom mapbox style
  *** TODO *** city (remember: need to hide movement from user)
  *** TODO *** add progress widget for loading
  *** TODO *** linting

*/

const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finalTime: 0,
      timing: false,
      gaveUp: false,
      quizTitle: '',
      namedPlace: '',
      placesArray: [],
      placesNumber: 0,
      modifier: 'name',
      mapIsClear: true,
      placesRemaining: 0,
      selectedQuiz: false,
      options: categories,
      showquizModal: false,
      lonlatzoom: [0.2, 20.6, 2],
    }

    this.resetState = this.resetState.bind(this)
    this.getQuizData = this.getQuizData.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.resetClearMap = this.resetClearMap.bind(this)
    this.handleClearMap = this.handleClearMap.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleNextButton= this.handleNextButton.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)
    this.quickLookLonLatZoom = this.quickLookLonLatZoom.bind(this)
    this.handleShowUnnamedPlaces = this.handleShowUnnamedPlaces.bind(this)
  }

  quickLookLonLatZoom(selPlace, callback) {
    callback(quicklookup[selPlace].lonlatzoom)
  }

  getQuizData(path, selection) {
    let lonlatzoo = ''
    let quiztype = ''
    if (selection !== 'BW' && selection !== 'LF' && selection !== 'LR') {
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
          quizType: quiztype,
          lonlatzoom: lonlatzoo,
          placesArray: d.data.places,
          placesNumber: d.data.places.length,
          placesRemaining: d.data.places.length,
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

  getLayerCodes(path, layer, callback) {
    axios.get(path)
      .then((d) => {
        console.log('d.codes: ', d.codes)
        callback(d)
      })
      .catch((error) => {
        /* eslint-disable */
        console.log('axios error', error)
        /* eslint-enable */
      })
  }

  handleStart() {
    // if map is clear, start quiz
    if (this.state.mapIsClear === true) {
      this.setState({
        timing: true,
      })
    // if map is not clear, get layercodes, clear map, start quiz
    } else if (this.state.mapIsClear === false) {
      let path = '/get-all-layer-codes'
      let layer = ''
      this.getLayerCodes(path, layer, (layercodes) => {
        this.setState({
          CODES: layercodes,
          clearLabels: true,
          showUnnamedPlaces: false,
          timing: true,
        })
      })
    }

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

  handleNextButton() {
    NTPgetRandomPlace.call(this)
  }

  resetState(loc) {
    loc ? loc : [0.2, 20.6, 2]
    this.setState({
      quizType: '',
      quizTitle: '',
      finalTime: '',
      timing: false,
      gaveUp: false,
      lonlatzoom: loc,
      placesArray: [],
      placesNumber: 0,
      clearLabels: false,
      placesRemaining: 0,
      quizDescription: '',
      options: categories,
      selectedQuiz: false,
      showquizModal: false,
      showUnnamedPlaces: false,
    })
  }

  handleBackButton(loc) {
    this.resetState(loc)
  }

  handleGiveUp() {
    this.setState({
      gaveUp: true,
      timing: false,
      mapIsClear: false,
      showquizModal: true,
    })
  }

  handleShowUnnamedPlaces() {
    console.log('handling show unnamed places')
    // zoom to original quiz llz OR world view
    this.setState({
      mapIsClear: false,
      showUnnamedPlaces: true,
      lonlatzoom: this.state.lonlatzoom,
    })
  }

  handleClearMap() {
    console.log('clearing map')
    // call for all layer codes
    let path = '/get-all-layer-codes'
    let layer = ''
    this.getLayerCodes(path, layer, (layercodes) => {
      this.setState({
        CODES: layercodes,
        clearLabels: true,
        showUnnamedPlaces: false,
      })
    })
  }

  resetClearMap() {
    console.log('resetting clear Labels')
    // start ? let startTimer = true : let startTimer = false
    this.setState({
      mapIsClear: true,
      clearLabels: false,
    })
  }

  handleTimer(startStop, complete) {
    if (startStop && !complete) {
      // quiz is neither complete nor given up, continuing
      this.setState({ timing: true })
    } else if (!startStop && complete) {
      // user completed quiz 100%
      this.setState({
        timing: false,
        gaveUp: false,
        mapIsClear: false,
        showquizModal: true,
      })
      // when user clicks outside modal, resetState is called
    }
  }

  render() {
    let header = <div />
    let quizmodal = <div />
    let nextbutton = <div />
    if (this.state.quizType === 'NTP') {
      nextbutton = <NextButton handleNextButton={this.handleNextButton} />
    } else {
      nextbutton = <div />
    }

    if (!this.state.selectedQuiz) {
      header = <Header
        options={this.state.options}
        handler={this.handleSelection}
        handleClearMap={this.handleClearMap}
        handleBackButton={this.handleBackButton}
      />
    } else if (this.state.selectedQuiz && !this.state.timing) {
      header = <QuizDescription
        handleStart={this.handleStart}
        quizTitle={this.state.quizTitle}
        handleClearMap={this.handleClearMap}
        handleBackButton={this.handleBackButton}
        quizDescription={this.state.quizDescription}
      />
    } else if (this.state.selectedQuiz && this.state.timing) {
      header = (
        <div>
          <InputScoreTime 
          timing={this.state.timing}
          handleTimer={this.handleTimer}
          handleInput={this.handleInput}
          getFinalTime={this.getFinalTime}
          handleGiveUp={this.handleGiveUp}
          remaining={this.state.placesRemaining}
          handleBackButton={this.handleBackButton}
          />
          {nextbutton}
        </div>
      )
    }
    
    if (!this.state.timing && this.state.showquizModal) {
      quizmodal = (<QuizModal
        gaveUp={this.state.gaveUp}
        time={this.state.finalTime}
        quizTitle={this.state.quizTitle}
        placesNumber={this.state.placesNumber}
        handleBackButton={this.handleBackButton}
        placesRemaining={this.state.placesRemaining}
        handleShowUnnamedPlaces={this.handleShowUnnamedPlaces}
      />)
    } else {
      quizmodal = <div />
    }

    return (
      <MuiThemeProvider>
        <div style={{ margin: 0, padding: 0 }}>
          <Menu 
            handleClearMap={this.handleClearMap}
            handleBackButton={this.handleBackButton}
          />
          <HeaderCard />
          <WelcomeModal />
          
          {header}
          <Maps
            layer={this.state.layer}
            CODES={this.state.CODES}
            quizType={this.state.quizType}
            lonlatzoom={this.state.lonlatzoom}
            resetClearMap={this.resetClearMap}
            namedPlace={this.state.namedPlace}
            clearLabels={this.state.clearLabels}
            placesArray={this.state.placesArray}
            showUnnamedPlaces={this.state.showUnnamedPlaces}
          />

          {quizmodal}
          
        </div>
      </MuiThemeProvider>
    )
  }
}
