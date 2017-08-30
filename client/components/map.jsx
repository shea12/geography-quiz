import React from 'react'
import MapboxGl from 'mapbox-gl'
import Keys from '../../keys'
import Continents from '../../continentContents'

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
      center: this.props.location.lonlat,
      zoom: this.props.location.zoom,
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,
    })
    
    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point);
      console.log('features: ', features[0]['properties']);
    })

  }

  componentWillReceiveProps(nextProps) {
    // will be checking previous props against nextProps in order
    // to determine what action needs to be performed on the map
    // console.log('map: ', map);
    // here I check if the map needs to pan to a new location
    if (this.props.location.lonlat !== nextProps.location.lonlat) {
      map.flyTo({center: nextProps.location.lonlat, zoom: nextProps.location.zoom})
    }

    // here I check if the map needs to hide/display labels
    // TODO: this is messy, will need to clean it up
    if (this.props.location.showLabels === true && nextProps.location.showLabels === false) {
      map.style.stylesheet.layers.forEach(function(layer) {
        if (layer.id === 'country label small' ||
            layer.id === 'country label medium' ||
            layer.id === 'country label big' ) {
          map.setLayoutProperty('country label small', 'visibility', 'none')
          map.setLayoutProperty('country label medium', 'visibility', 'none')
          map.setLayoutProperty('country label big', 'visibility', 'none')

          map.setLayoutProperty('city label major', 'visibility', 'none')
          map.setLayoutProperty('city label minor', 'visibility', 'none')
          map.setLayoutProperty('state label', 'visibility', 'none')
          map.setLayoutProperty('admin state', 'visibility', 'none')
          map.setLayoutProperty('admin state case', 'visibility', 'none')
          map.setLayoutProperty('urban', 'visibility', 'none')
        }
      })
    } else if (this.props.location.showLabels === false && nextProps.location.showLabels === true) {
      map.style.stylesheet.layers.forEach(function(layer) {
        if (layer.id === 'country label small' ||
            layer.id === 'country label medium' ||
            layer.id === 'country label big' ) {
          map.setLayoutProperty('country label small', 'visibility', 'visible')
          map.setLayoutProperty('country label medium', 'visibility', 'visible')
          map.setLayoutProperty('country label big', 'visibility', 'visible')
        }
      })
    }

    // here I check for the selected continent
    if (this.props.location.selectedContinent !== nextProps.location.selectedContinent) {
      map.flyTo({center: nextProps.location.lonlat, zoom: nextProps.location.zoom})
      // choose a country from selected continent
      let country = Continents[nextProps.location.selectedContinent][0];
      console.log('Country: ', country);
      map.setPaintProperty('CA', 'fill-opacity', 0.1)
    }

  }

  render() {
    return (
      <div id='map' style={style.map} />
    )
  }
}
