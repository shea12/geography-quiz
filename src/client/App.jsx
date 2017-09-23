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
/*
Notes:
  9/22:
  PO_LABEL is not found, need to inc PO1, PO2
  AO_LABEL needs to reference AO1 and AO2
  9/23:
  HUGE refactor
*/

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
      options: categories,
      selectedQuiz: false,

      timing: false,
      layer: '',
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

    this.handleSelection = this.handleSelection.bind(this)
    this.getQuizData = this.getQuizData.bind(this)

    this.handleStart = this.handleStart.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleBack = this.handleBack.bind(this)

    this.handleInput = this.handleInput.bind(this)
    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)

    this.resetState = this.resetState.bind(this)
    this.quickLookLonLatZoom = this.quickLookLonLatZoom.bind(this)
  }

  quickLookLonLatZoom(selPlace, callback) {
    callback(quicklookup[selPlace].lonlatzoom)
  }

  getQuizData(path, selection) {
    // lint says "unexpected unnamed function, unnamed function"
    let lonlatzoo = ''
    if (selection !== 'BW') {
      const abbrv = selection.charAt(0) + selection.charAt(1)
      this.quickLookLonLatZoom(abbrv, function (llz) {
        lonlatzoo = llz
      })
    } else {
      // handle water quiz
      console.log('special case water quiz')
    }

    axios.get(path)
      .then((d) => {
        this.setState({
          placesArray: d.data.places,
          placesNumber: d.data.places.length,
          placesRemaining: d.data.places.length,
          lonlatzoom: lonlatzoo,
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
        })
      } else {
        this.setState({
          selectedQuiz: true,
          layer: this.state.options[selection].layer,
          quizTitle: this.state.options[selection].title,
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
  }

  checkUserInput(value, modifier) {
    for (let p = 0; p < this.state.placesArray.length; p += 1) {
      if (value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
        return p
      }
    }
    return -1
  }

  handleNamedPlace(place) {
    const remaining = this.state.placesRemaining - 1
    this.setState({ namedPlace: place, placesRemaining: remaining })
  }

  handleInput(value) {
    const foundIndex = this.checkUserInput(value, this.state.modifier)
    // foundIndex will be the index in the array where the match was found
    // or false if not found
    if (foundIndex >= 0) {
      this.setState({ inputCheck: 'success', value: '' })
      // call handleNamedPlace function with place abbrv to shade in area
      this.handleNamedPlace(this.state.placesArray[foundIndex].abbrv)
      // remove named palce from list
      this.state.placesArray.splice(foundIndex, 1)
      this.setState({ placesArray: this.state.placesArray })
      
      // check if user has places left to name
      if (this.state.placesArray.length === 0) {
        // parameters (endtimer, gotallcountries?)
        this.handleTimer(false, true)
        return true
      }
      return true
    } else {
      // user input does not match any place
      return false
    }
  }

  resetState(showModal, gaveUp) {
    this.setState({
      selectedQuiz: false,
      options: categories,
      timing: false,
      lonlatzoom: [0.2, 20.6, 2],
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
        <div style={style.container}>
          <Title />
          <HeaderCard />
          <WelcomeModal />
          
          {header}
          
          <Maps
            lonlatzoom={this.state.lonlatzoom}
            namedPlace={this.state.namedPlace}
            layer={this.state.layer}
            clearLabels={this.state.clearLabels}
          />

          {quizmodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
