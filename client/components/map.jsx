import React from 'react'
import MapboxGl from 'mapbox-gl'
import PropTypes from 'prop-types'
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

let map = {}

const getCountryLabels = () => {
  // eventually could have a parameter 'continent' as a boolean to 
  // indicate if should compile all labels or just the labels of the selected
  const world = Continents
  const countryLabels = []
  // linter says for... in loops are very bad, refactor to Object. instead
  for (const continent in world) {
    for (const country in world[continent].abbrevs) {
      const abbreviationLabel = `${world[continent].abbrevs[country]}_LABEL`
      countryLabels.push(abbreviationLabel)
    }
  }
  return countryLabels
}

const setMapLayerProperty = (layer, labelArray, status) => {
  if (layer.id === labelArray) {
    map.setLayoutProperty(labelArray, 'visibility', status)
  }
}

const showHideLabels = (labelArray, status) => {
  // linter says 'don't make functions within a loop'
  for (let i = 0; i < labelArray.length; i += 1) {
    map.style.stylesheet.layers.forEach((layer) => {
      setMapLayerProperty(layer, labelArray[i], status)
    })
  }
}

export default class Maps extends React.Component {
  componentDidMount() {
    MapboxGl.accessToken = Keys.access_token
    // remember: mapbox uses [long, lat] not [lat, long]
    map = new MapboxGl.Map({
      container: 'map',
      style: Keys.style_key,
      center: this.props.lonlat,
      zoom: this.props.zoom,
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,
      minZoom: 2,
    })
    // map.on('click', (e) => {
    //   // using e to pass linting error
    //   return e
    //   // const features = map.queryRenderedFeatures(e.point)
    //   // console.log('features: ', features)
    // })
  }

  componentWillReceiveProps(nextProps) {
    // will be checking previous props against nextProps in order
    // to determine what action needs to be performed on the map

    // color in and display label of country after it is found
    if (this.props.countryToShade !== nextProps.countryToShade) {
      // translate this.props.countryToShade to its 2letter abbreviation
      const foundContinent = this.props.selectedContinent
      const countryAbbrev = Continents[foundContinent].abbrevs[nextProps.countryToShade]

      // shade in found country fill
      // map.setPaintProperty(countryAbbrev, 'fill-opacity', 1)
      // map.setPaintProperty(countryAbbrev, 'fill-outline-color', 'rgb(33, 200, 30)')

      // display found country label
      const label = `${countryAbbrev}_LABEL`
      map.style.stylesheet.layers.forEach((layer) => {
        if (layer.id === label) {
          map.setLayoutProperty(label, 'visibility', 'visible')
        }
      })
    }
    // check if the map needs to hide labels
    if (this.props.showLabels === true && nextProps.showLabels === false) {
      // gather array of country abbreviations
      const allLabels = getCountryLabels()
      // iterate through layers to hide country label layers
      showHideLabels(allLabels, 'none')
    }
    // check if map needs to show labels
    if (this.props.showLabels === false && nextProps.showLabels === true) {
      // gather array of country abbreviations
      const allLabels = getCountryLabels()
      // iterate through layers to show country label layers
      showHideLabels(allLabels, 'visible')
    }
    // check if the map needs to pan to a new location
    if (this.props.lonlat !== nextProps.lonlat) {
      //
      map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom })
    }
    // check for the selected continent
    if (this.props.selectedContinent !== nextProps.selectedContinent) {
      // 
      map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom })
    }
  }

  render() {
    return (
      <div id="map" style={style.map} />
    )
  }
}

Maps.propTypes = {
  lonlat: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  countryToShade: PropTypes.string.isRequired,
  selectedContinent: PropTypes.string.isRequired,
  showLabels: PropTypes.bool.isRequired,
}
