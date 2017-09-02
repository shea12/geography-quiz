import React from 'react'
/* eslint-disable */
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'
import HeaderCard from './headercard.jsx'
import InputForm from './input.jsx'
import ScoreKeeper from './scorekeeper.jsx'
import StartButton from './startbutton.jsx'
import Timer from './timer.jsx'
import World from '../../continentContents'
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
      world: World,
      lonlat: [0.2, 20.6],
      zoom: 2,
      showLabels: true,
      selectedContinent: '',
      countryList: [],
      abbrevs: [],
      countryToShade: '',
      timing: false,
    }

    this.handleLocation = this.handleLocation.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
  }

  handleLocation(continentObj, selectedCont) {
    console.log('continentObj: ', continentObj)
    this.setState({
      lonlat: continentObj.lonlat,
      zoom: continentObj.zoom,
      selectedContinent: selectedCont,
      showLabels: true,
      countryList: continentObj.countries,
      abbrevs: continentObj.abbrevs,
    })
  }

  handleStart() {
    this.setState({ timing: true })
  }

  handleCountry(country) {
    this.setState({ countryToShade: country })
  }

  handleTimer(startStop) {
    if (startStop) {
      // setState of timer to true
      this.setState({ timing: true })
    } else {
      // setState of timer to false
      this.setState({ timing: false, selectedContinent: '' })
    }
  }

  render() {
    let inputform = null
    let scorekeeper = null
    let startbutton = null
    let timer = null
    let continentButtons = null

    if (this.state.selectedContinent !== '') {
      // user selected a continent, show start button and continent info
      startbutton = <StartButton handleStart={this.handleStart} />
      continentButtons = <div />
    } else {
      inputform = <div />
      scorekeeper = <div />
      startbutton = <div />
      continentButtons = ( <Continents move={this.handleLocation} /> )
    }

    if (this.state.timing) {
      inputform = (<InputForm
        countries={this.state.countryList}
        colorCountry={this.handleCountry}
        handleTimer={this.handleTimer}
      />)
      scorekeeper = (<ScoreKeeper
        countries={this.state.countryList}
        continent={this.state.selectedContinent}
      />)
      timer = (<Timer
        timing={this.state.timing}
      />)
      startbutton = <div />
    } else {
      // check if finished, gave up, or paused (need to make a pause button?)
    }

    return (
      <div style={style.container}>
        <Title />
        <Maps
          lonlat={this.state.lonlat}
          zoom={this.state.zoom}
          countryToShade={this.state.countryToShade}
          selectedContinent={this.state.selectedContinent}
          showLabels={this.state.showLabels}
        />
        <HeaderCard />
        {continentButtons}
        {inputform}
        {scorekeeper}
        {startbutton}
        <Timer timing={this.state.timing} handleTimer={this.handleTimer} />
      </div>
    )
  }
}
