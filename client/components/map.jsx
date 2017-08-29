import React from 'react';
import MapboxGl from 'mapbox-gl';
import Keys from '../../keys.js';


export default class Map extends React.Component {

  componentDidMount() {
    MapboxGl.accessToken = Keys.access_token;
    //remember: mapbox uses [long, lat] not [lat, long]
    new MapboxGl.Map({
      container: this.container,
      style: Keys.style_key,
      center: [11.6, 31],
      zoom: 1.4,
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,

    })
  }

  render() {
    return (
      <div className='Map' style={style.map} ref={(x) => { this.container = x }}>
      </div>
    )
  }

}

const style = {
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 0,
  }

}

