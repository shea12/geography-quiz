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

var map = {};

export default class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sup: false
    }
  }

  componentDidMount() {
    MapboxGl.accessToken = Keys.access_token
    // remember: mapbox uses [long, lat] not [lat, long]
    map = new MapboxGl.Map({
      container: 'map',
      style: Keys.style_key,
      center: this.props.loc.lonlat,
      zoom: this.props.loc.zoom,
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,
    })
  }

  componentWillReceiveProps(nextProps) {
    map.flyTo({center: nextProps.loc.lonlat, zoom: nextProps.loc.zoom})
  }

  render() {
    return (
      <div id='map' style={style.map} />
    )
  }
}