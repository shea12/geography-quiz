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

let getCountryLabels = function() {
  // eventually could have a parameter 'continent' as a boolean to 
  // indicate if should compile all labels
  // or just the labels of the selected continent
  let world = Continents

  let country_labels = []
  for (let continent in world) {
    for (let country in world[continent].abbrevs) {
      let abbreviation_label = world[continent].abbrevs[country] + '_LABEL'
      country_labels.push(abbreviation_label);
    }
  }
  return country_labels
}

let showHideLabels = function(label_array, status) {
  for (let i = 0; i < label_array.length; i++) {
    map.style.stylesheet.layers.forEach(function(layer) {
      if (layer.id === label_array[i]) {
        map.setLayoutProperty(label_array[i], 'visibility', status)
      }
    })
  }
}


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
      minZoom: 2,
    })
    
    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point);
      console.log('features: ', features);
    })

  }

  componentWillReceiveProps(nextProps) {
    // will be checking previous props against nextProps in order
    // to determine what action needs to be performed on the map


    // color in and display label of country after it is found
    if (this.props.location.countryToShade !== nextProps.location.countryToShade) {
      // translate this.props.location.countryToShade to its 2letter abbreviation
      let found_continent = this.props.location.selectedContinent
      let countryAbbrev = Continents[found_continent].abbrevs[nextProps.location.countryToShade]

      // shade in found country fill
      // map.setPaintProperty(countryAbbrev, 'fill-opacity', 1)
      // map.setPaintProperty(countryAbbrev, 'fill-outline-color', 'rgb(33, 200, 30)')

      // display found country label
      let label = countryAbbrev + '_LABEL'
      map.style.stylesheet.layers.forEach(function(layer) {
        if (layer.id === label) {
          map.setLayoutProperty(label, 'visibility', 'visible')
        }
      })
    }
    // check if the map needs to hide labels
    if (this.props.location.showLabels === true && nextProps.location.showLabels === false) {
      // gather array of country abbreviations
      let all_labels = getCountryLabels();
      // iterate through layers to hide country label layers
      showHideLabels(all_labels, 'none');
    }
    // check if map needs to show labels
    if (this.props.location.showLabels === false && nextProps.location.showLabels === true) {
      // gather array of country abbreviations
      let all_labels = getCountryLabels();
      // iterate through layers to show country label layers
      showHideLabels(all_labels, 'visible');
    }
    // check if the map needs to pan to a new location
    if (this.props.location.lonlat !== nextProps.location.lonlat) {
      //
      map.flyTo({center: nextProps.location.lonlat, zoom: nextProps.location.zoom})
    }
    // check for the selected continent
    if (this.props.location.selectedContinent !== nextProps.location.selectedContinent) {
      // 
      map.flyTo({center: nextProps.location.lonlat, zoom: nextProps.location.zoom})
    }
  }

  render() {
    return (
      <div id='map' style={style.map} />
    )
  }
}














