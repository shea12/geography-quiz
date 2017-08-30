import React from 'react'
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'
import InputForm from './input.jsx'

const style = {
  container: {
    margin: 0,
    padding: 0,
  },
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lonlat: [11.6, 31],
      zoom: 1.4,
      showLabels: true,
      selectedContinent: '',
      countryList: []
    }

    this.handleLocation = this.handleLocation.bind(this)
  }

  handleLocation(lonlat, zoom, continent, countryList) {
    // location will be an object with [lon, lat] [(float), (float)] and zoom (float)
    console.log('changing location to: ', name)

    this.setState({
      lonlat: lonlat,
      zoom: zoom,
      showLabels: false,
      selectedContinent: continent,
      countryList: countryList
    })

  }

  render() {
    let continentSelected = this.state.selectedContinent
    let inputform = null
    if (continentSelected !== '') {
      inputform = <InputForm countries={this.state.countryList}/>
    } else {
      inputform = <div></div>
    }

    return (
      <div style={style.container}>
        <Title />
        <Maps location={this.state} />
        <Continents move={this.handleLocation} />
        {inputform}
      </div>
    )
  }
}

module.exports = App