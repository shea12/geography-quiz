import React from 'react'
/* eslint-disable */
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'
import InputForm from './input.jsx'
import ScoreKeeper from './scorekeeper.jsx'
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
    }

    this.handleLocation = this.handleLocation.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
  }

  handleLocation(ll, zm, co, cl, ab) {
    // location will be an object with [lon, lat] [(float), (float)] and zoom (float)

    this.setState({
      lonlat: ll,
      zoom: zm,
      showLabels: false,
      selectedContinent: co,
      countryList: cl,
      abbrevs: ab,
    })
  }

  handleCountry(country) {
    this.setState({ countryToShade: country })
  }

  render() {
    const continentSelected = this.state.selectedContinent
    let inputform = null
    let scorekeeper = null
    if (continentSelected !== '') {
      inputform = (<InputForm
        countries={this.state.countryList}
        colorCountry={this.handleCountry}
      />)
      scorekeeper = (<ScoreKeeper
        countries={this.state.countryList}
        continent={this.state.selectedContinent}
      />)
    } else {
      inputform = <div />
      scorekeeper = <div />
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
        <Continents move={this.handleLocation} />
        {inputform}
        {scorekeeper}
      </div>
    )
  }
}
