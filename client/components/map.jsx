import React from 'react'
import MapboxGl from 'mapbox-gl'
import Keys from '../../keys'

const style = {
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 0,
  },
}

export default class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sup: false
    }

    this.flyToLocation = this.flyToLocation.bind(this)
  }

  componentDidMount() {
    MapboxGl.accessToken = Keys.access_token
    // remember: mapbox uses [long, lat] not [lat, long]
    let Maps = new MapboxGl.Map({
      container: this.container,
      style: Keys.style_key,
      center: this.props.loc.lonlat,
      zoom: this.props.loc.zoom,
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,
    })
  }

  flyToLocation() {
    this.Maps.flyTo({center: this.props.loc.lonlat})
  }

  render() {
    return (
      <div className="Maps" style={style.map} ref={(x) => { this.container = x }} />
    )
  }
}

// document.getElementById('fly').addEventListener('click', function () {
//     // Fly to a random location by offsetting the point -74.50, 40
//     // by up to 5 degrees.
//     map.flyTo({
//         center: [
//             -74.50 + (Math.random() - 0.5) * 10,
//             40 + (Math.random() - 0.5) * 10]
//     });
// });