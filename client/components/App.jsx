import React from 'react'
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'
import InputForm from './input.jsx'
import ScoreKeeper from './scorekeeper.jsx'
import World from '../../continentContents'

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
      lonlat: [11.6, 16.8],
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

  handleLocation(lonlat, zoom, continent, countryList, abbrevs) {
    // location will be an object with [lon, lat] [(float), (float)] and zoom (float)

    this.setState({
      lonlat: lonlat,
      zoom: zoom,
      showLabels: false,
      selectedContinent: continent,
      countryList: countryList,
      abbrevs: abbrevs,
    })

  }

  handleCountry(country) {
    this.setState({countryToShade: country})
  }

  render() {
    let continentSelected = this.state.selectedContinent
    let inputform = null
    let scorekeeper = null
    console.log('in render: ', this.state.countryList);
    if (continentSelected !== '') {
      inputform = <InputForm countries={this.state.countryList} colorCountry={this.handleCountry} />
      scorekeeper = <ScoreKeeper countries={this.state.countryList} continent={this.state.selectedContinent} />
    } else {
      inputform = <div></div>
      scorekeeper = <div></div>
    }

    return (
      <div style={style.container}>
        <Title />
        <Maps location={this.state} />
        <Continents move={this.handleLocation} />
        {inputform}
        {scorekeeper}
      </div>
    )
  }
}
