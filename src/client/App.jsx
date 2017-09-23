import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WelcomeModal from './components/popups/welcomemodal'
import Maps from './components/basemap/map'
import Header from './components/header/Header'
import QuizModal from './components/popups/quizmodal'

/*
Notes:
  9/22:
  PO_LABEL is not found, need to inc PO1, PO2
  AO_LABEL needs to reference AO1 and AO2
  9/23:

*/

const axios = require('axios')

const style = {
  container: {
    margin: 0,
    padding: 0,
  },
}

const categories = {
  // first level: category
  // second level: subcategory
  // thrird level: quiz array
  CTN: {
    title: 'Countries & Capitals',
    categories: {
      NA: {
        title: 'N. America',
        categories: {
          NACO: {
            title: 'Countries of N. America',
            quiz: true,
          },
          NACA: {
            title: 'Capitals of N. America',
            quiz: true,
          },
          USST: {
            title: 'States of USA',
            quiz: true,
          },
          UCAP: {
            title: 'Capitals of USA',
            quiz: true,
          },
          MXST: {
            title: 'States of Mexico',
            quiz: true,
          },
          CAST: {
            title: 'Provinces of Canada',
            quiz: true,
          },
        },
      },
      SA: {
        title: 'S. America',
        categories: {
          SACO: {
            title: 'Countries of S. America',
            quiz: true,
          },
          SACA: {
            title: 'Capitals of S. America',
            quiz: true,
          },
        },
      },
      AF: {
        title: 'Africa',
        categories: {
          AFCO: {
            title: 'Countries of Africa',
            quiz: true,
          },
          AFCA: {
            title: 'Capitals of Africa',
            quiz: true,
          },
          ZAST: {
            title: 'States of South Africa',
            quiz: true,
          },
        },
      },
      EU: {
        title: 'Europe',
        categories: {
          EUCO: {
            title: 'Countries of Europe',
            quiz: true,
          },
          EUCA: {
            title: 'Capitals of Europe',
            quiz: true,
          },
          GBST: {
            title: 'States of Great Britain',
            quiz: true,
          },
        },
      },
      AS: {
        title: 'Asia',
        categories: {
          ASCO: {
            title: 'Countries of Asia',
            quiz: true,
          },
          ASCA: {
            title: 'Capitals of Asia',
            quiz: true,
          },
        },
      },
      OC: {
        title: 'Oceania',
        categories: {
          OCCO: {
            title: 'Countries of Oceania',
            quiz: true,
          },
          OCCA: {
            title: 'Capitals of Oceania',
            quiz: true,
          },
          AUST: {
            title: 'States of Australia',
            quiz: true,
          },
        },
      },
    },
  },
  BOW: {
    title: 'Bodies of Water',
    categories: {
      MW: {
        title: '29 Major Bodies of Water',
        quiz: true,
      },
    },
  },
  GTC: {
    title: 'Guess the City',
    categories: {
      GC: {
        title: 'City Guesser', 
        quiz: true,
      },
    },
  },
  LDF: {
    title: 'Landforms',
    categories: {
      LF: {
        title: 'Major Landforms',
        quiz: true,
      },
    },
  },
  LRS: {
    title: 'World Leaders',
    categories: {
      LS: {
        title: 'Leaders of the World',
        quiz: true,
      },
    },
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

      options: categories,
      selectedCategory: '',

      placesArray: [],
      placesNumber: 0,
      namedPlace: '',
      placesRemaining: 0,

      quizTitle: null,
      timing: false,
      showquizModal: false,
      gaveUp: false,
      finalTime: 0,
    }

    this.handleSelection = this.handleSelection.bind(this)

    this.handleCountryQuiz = this.handleCountryQuiz.bind(this)
    this.handleContinentQuiz = this.handleContinentQuiz.bind(this)

    this.handleStart = this.handleStart.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleBack = this.handleBack.bind(this)

    this.handleNamedPlace = this.handleNamedPlace.bind(this)
    
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.getFinalTime = this.getFinalTime.bind(this)
    
    this.quickLookLonLatZoom = this.quickLookLonLatZoom.bind(this)
  }

  handleSelection(selection) {
    if (this.state.options[selection].quiz === true) {
      console.log('QUIZ ALERT')
      this.setState({
        selectedQuiz: selection,

      })
    } else {
      console.log('not quiz')
      this.setState({
        selectedCategory: selection,
        options: this.state.options[selection].categories,
      })
    }
  }

  handleQuizSelection(selQuiz) {
    this.setState({
      selectedQuiz: true,

    })
  }
  
  getFinalTime(time) {
    this.setState({ finalTime: time })
  }

  // should move this to a helper function file
  // lint says "expected 'this' to be used by class method"
  quickLookLonLatZoom(selPlace, callback) {
    callback(quicklookup[selPlace].lonlatzoom)
  }

  handleCountryQuiz(selCountry, capitals) {
    let quizDesc = ''
    let lonlatzoo = []

    // lint says "unexpected unnamed function, unnamed function"
    this.getLonLatZoom(selCountry, function (llz) {
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
    let lonlatzoo = []
    this.getLonLatZoom(selContinent, function (llz) {
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
      quizDesc = `country capitals of ${quicklookup[selContinent].name}`
      this.setState({ capitals: true, quizTitle: quizDesc })
    } else {
      // user selected countries quiz
      quizDesc = `countries of ${quicklookup[selContinent].name}`
      this.setState({ capitals: false, quizTitle: quizDesc })
    }
  }


  // handleQuizChoice(selContinent, selCountry, capitals) {
  //   this.setState({ selectedContinent: selContinent })
  //   // user selected specific country quiz
  //   if (selCountry) {
  //     this.handleCountryQuiz(selCountry, capitals)
  //   // user selected continent quiz
  //   } else if (!selCountry) {
  //     this.handleContinentQuiz(selContinent, capitals)
  //   }
  // }

  // handleWaterQuizChoice(waterquiz) {
  //   this.setState({ selectedQuiz: waterquiz })
  //   axios.get(`/get-bodies-of-water`)
  //     .then((d) => {
  //       console.log('d.data: ', d.data)
  //       this.setState({
  //         placesArray: d.data.water,
  //         placesNumber: d.data.water.length,
  //         placesRemaining: d.data.water.length,
  //       })
  //     })
  //     .catch((error) => {
  //       /* eslint-disable */
  //       console.log('axios error', error)
  //       /* eslint-enable */
  //     })
  // }

  handleStart() {
    this.setState({
      timing: true,
    })
  }

  handleBack() {
    this.setState({
      selectedCategory: '',
      selectedContinent: '',
      selectedQuiz: '',
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
        selectedSubcategory: '',
        showquizModal: true,
        gaveUp: false,
      })
    }
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
        selectedSubcategory={this.state.selectedSubcategory}
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
            options={this.state.options}
            handler={this.handleSelection}

            selectedQuiz={this.state.selectedQuiz}

            placesArray={this.state.placesArray}
            timing={this.state.timing}
            quizTitle={this.state.quizTitle}

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
          />
          {quizmodal}
        </div>
      </MuiThemeProvider>
    )
  }
}
