import React from 'react'
import Maps from './map.jsx'
import Title from './title.jsx'

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
    }

    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(loc) {
    // loc will be an object with [lon, lat] and zoom (float)
    console.log('changing location: ', loc);
    this.setState({lonlat: loc.lonlat, zoom: loc.zoom})
  }

  render() {
    return (
      <div style={style.container}>
        <Title move={this.handleLocation}/>
        <Maps loc={this.state} />
      </div>
    )
  }
}

module.exports = App