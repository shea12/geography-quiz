import React from 'react';
// import Maps from './map.js';
import MapboxGl from 'mapbox-gl';

export default class Map extends React.Component {

  componentDidMount() {
    MapboxGl.accessToken = 'pk.eyJ1IjoiY2FzaGVhIiwiYSI6ImNqNnd3dm9uZTE5Y2wzM3RiaXJxYng1NHAifQ.nEu0dapbPoEPUe4bEYaq7Q';
    
    console.log(this.container);
    new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/cashea/cj6wcgl2w8z252so32girjg0s',
      center: [-73.974611, 40.771944],
      zoom: 13,

    })
  }



  render() {
    return (
      <div className='Map' style={{height: 1000, margin: 0, padding: 0}}ref={(x) => { this.container = x }}>
      </div>
    )
  }

}

