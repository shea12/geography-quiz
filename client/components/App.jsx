import React from 'react'
import Maps from './map.jsx'
import Title from './title.jsx'
import Continents from './continent.jsx'

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
      selectedContinent: '',
      showLabels: true,
    }

    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(location) {
    // loc will be an object with [lon, lat] and zoom (float)
    console.log('changing location: ', location);

    this.setState({
      selectedContinent: location.name,
      lonlat: location.lonlat,
      zoom: location.zoom,
      showLabels: false,
    })
  }

  render() {
    return (
      <div style={style.container}>
        <Title move={this.handleLocation}/>
        <Maps location={this.state} />
        <Continents move={this.handleLocation}/>
      </div>
    )
  }
}

module.exports = App