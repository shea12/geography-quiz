import React from 'react'
import MapboxGl from 'mapbox-gl'
import PropTypes from 'prop-types'
import Keys from '../../../../assets/keys'
import WORLD from '../../../../assets/continentContents'
import CODES from '../../../../assets/countryCodes'


const style = {
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
}

let map = {}

const showHideCountryLabels = (countryCodeArray, status) => {
  for (let i = 0; i < countryCodeArray.length; i += 1) {
    map.setLayoutProperty(`${countryCodeArray[i]}_LABEL`, 'visibility', status)
    map.setPaintProperty(countryCodeArray[i], 'fill-opacity', 0)
  }
}

const showHideStateLabels = (stateCodeArray, status) => {
  for (let i = 0; i < stateCodeArray.length; i += 1) {
    map.setLayoutProperty(`USST_${stateCodeArray[i]}`, 'visibility', status)
    map.setLayoutProperty(`USSTCAP_${stateCodeArray[i]}`, 'visibility', status)
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
    //   // using e to pass = linting error
    //   return e
    //   // const features = map.queryRenderedFeatures(e.point)
    //   // console.log('features: ', features)
    // })
  }

  componentWillReceiveProps(nextProps) {
    // will be checking previous props against nextProps in order
    // to determine what action needs to be performed on the map

    // display country label, shade in country area after it is found
    if (this.props.namedPlace !== nextProps.namedPlace) {

      const placeCode = nextProps.namedPlace
      if (nextProps.states) {
        map.setLayoutProperty(`USST_${placeCode}`, 'visibility', 'visible')
      } else if (nextProps.capitals) {
        map.setLayoutProperty(`USSTCAP_${placeCode}`, 'visibility', 'visible')
      } else {
        map.setLayoutProperty(`${placeCode}_LABEL`, 'visibility', 'visible')
      }

      // map.setPaintProperty(placeCode, 'fill-opacity', 1)
      // map.setPaintProperty(placeCode, 'fill-outline-color', 'rgb(41, 169, 45)')
    }

    // check if map needs to change visibility of labels
    if (!nextProps.showLabels || !this.props.showLabels) {
      nextProps.showLabels ? showHideCountryLabels(CODES.COUNTRIES, 'visible') : showHideCountryLabels(CODES.COUNTRIES, 'none')
      nextProps.showLabels ? showHideStateLabels(CODES.US_STATES, 'visible') : showHideStateLabels(CODES.US_STATES, 'none')
    }

    // check if the map needs to pan to a new location
    if (this.props.lonlat !== nextProps.lonlat) {
      map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom, speed: 0.4 })
    }

    // check for the selected continent
    if (this.props.selectedContinent !== nextProps.selectedContinent) {
      map.flyTo({ center: nextProps.lonlat, zoom: nextProps.zoom, speed: 0.4 })
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
  namedPlace: PropTypes.string.isRequired,
  selectedContinent: PropTypes.string.isRequired,
  showLabels: PropTypes.bool.isRequired,
  states: PropTypes.bool.isRequired,
  capitals: PropTypes.bool.isRequired,
}
