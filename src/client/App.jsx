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
  NTPhandleInput,
  NTPskipCurrentPlace,
  FFAhandleInput,
} from './components/helpers'

/*
Notes:
  9/27: 
  /// done /// make hamburger menu top right corner
  /// done /// clearmap function bug fixes
  /// done /// fix pacific and atlantic labels
  /// done /// add G20 countries to db, quizcat, server
  /// done /// move countryCodes to mongodb, set up req routes
  /// done /// fix buggy layerCodes, consolidate mlab collection

  9/28:
  /// done /// add BR & JP layers, db
  /// done /// globe emoji for tab icon (not working but is there?)
  /// done /// update welcome modal, add call to email 
  /// done /// special exceptions for leaders, last name OR full name
  /// done /// on "show unnamed places" show leaders names

  9/29:
  /// done /// close mongoose connection
  /// done /// create express app after db successfully connected
  /// done /// rewrite get random place function
  *** TODO *** linting!
  *** TODO *** fix input regex to allow '-' for south korea leader Moon Jae-in
  *** TODO *** remove keys from repo
  *** TODO *** add lonlatzoom for country close ups (esp small countries)
  *** TODO *** change button colors

  backlog:
  *** TODO *** make upper right menu prettier
  *** TODO *** city category (remember: need to hide movement from user)
  *** TODO *** set up back end testing
  *** TODO *** custom mapbox style
  *** TODO *** add progress widget for loading?
  *** TODO *** Buttons to be condensed into 1 or 2 components
  *** TODO *** move quizcategories to mongodb, set up schema, routes, etc

*/

const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codes: [],
      finalTime: 0,
      timing: false,
      gaveUp: false,
      quizTitle: '',
      placesArray: [],
      placesNumber: 0,
      modifier: 'name',
      mapIsClear: true,
      placesRemaining: 0,
      namedPlaceTitle: '',
      namedPlaceAbbrv: '',
      selectedQuiz: false,
      options: categories,
      showquizModal: false,
      lonlatzoom: [0.2, 20.6, 2],
    }

    this.handleTimer = this.handleTimer.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    this.resetClearMap = this.resetClearMap.bind(this)
    this.handleClearMap = this.handleClearMap.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleNextButton= this.handleNextButton.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)
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
          selection: selection,
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

  getLayerCodes(layer, callback) {
    let path = ''
    if (layer === '') {
      path = '/get-all-layer-codes'
    } else {
      path = `${layer}:/get-layer-codes`
    }

    axios.get(path)
      .then((d) => {
        callback(d.data.codes)
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
      const layer = ''
      this.getLayerCodes(layer, function (layercodes) {
        this.setState({
          codes: layercodes,
          showUnnamedPlaces: false,
          timing: true,
          clearLabels: true,
        })
      }.bind(this))
    }

    if (this.state.quizType === 'NTP') {
      // this is the Fisher-Yates shuffle algorithm!
      function shuffle(array, callback) {
        let currentIndex = array.length
        let temporaryValue = 0
        let randomIndex = 0
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
        callback(array)
      }

      shuffle(this.state.placesArray, function (shuffledArray) {
        this.setState({
          placesArray: shuffledArray,
          lonlatzoom: this.state.placesArray[0].lonlatzoom,
        })
      }.bind(this))
    }
  }

  handleNamedPlace(place, title) {
    const remaining = this.state.placesRemaining - 1
    this.setState({
      namedPlaceAbbrv: place,
      namedPlaceTitle: title,
      placesRemaining: remaining,
    })
  }

  handleInput(value) {
    if (this.state.quizType === 'FFA') {
      return FFAhandleInput.call(this, value)
    }
    return NTPhandleInput.call(this, value)
  }

  handleNextButton() {
    NTPskipCurrentPlace.call(this)
  }

  resetState(loc) {
    loc ? loc : [0.2, 20.6, 2]
    this.setState({
      codes: [],
      quizType: '',
      quizTitle: '',
      finalTime: '',
      selection: '',
      timing: false,
      gaveUp: false,
      lonlatzoom: loc,
      placesArray: [],
      placesNumber: 0,
      clearLabels: false,
      placesRemaining: 0,
      quizDescription: '',
      // namedPlaceTitle: '',
      // namedPlaceAbbrv: '',
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
    // zoom to original quiz llz OR world view
    this.setState({
      mapIsClear: false,
      showUnnamedPlaces: true,
      lonlatzoom: this.state.lonlatzoom,
    })
  }

  handleClearMap() {
    // call for all layer codes
    const layer = ''
    this.getLayerCodes(layer, function (layercodes) {
      this.setState({
        codes: layercodes,
        clearLabels: true,
        showUnnamedPlaces: false,
      })
    }.bind(this))
  }

  resetClearMap() {
    // start ? let startTimer = true : let startTimer = false
    this.setState({
      codes: [],
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
      header = (<Header
        options={this.state.options}
        handler={this.handleSelection}
        handleClearMap={this.handleClearMap}
        handleBackButton={this.handleBackButton}
      />)
    } else if (this.state.selectedQuiz && !this.state.timing) {
      header = (<QuizDescription
        handleStart={this.handleStart}
        quizTitle={this.state.quizTitle}
        handleClearMap={this.handleClearMap}
        handleBackButton={this.handleBackButton}
        quizDescription={this.state.quizDescription}
      />)
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
            codes={this.state.codes}
            quizType={this.state.quizType}
            selection={this.state.selection}
            lonlatzoom={this.state.lonlatzoom}
            resetClearMap={this.resetClearMap}
            clearLabels={this.state.clearLabels}
            placesArray={this.state.placesArray}
            namedPlaceAbbrv={this.state.namedPlaceAbbrv}
            namedPlaceTitle={this.state.namedPlaceTitle}
            showUnnamedPlaces={this.state.showUnnamedPlaces}
          />
          {quizmodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
