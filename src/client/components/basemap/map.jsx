import React from 'react'
import MapboxGl from 'mapbox-gl'
import PropTypes from 'prop-types'
import KEYS from '../../assets/keys'
import CODES from '../../assets/countryCodes'

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

const showHideAllCountryLabels = (countryCodeArray, status) => {
  for (let i = 0; i < countryCodeArray.length; i += 1) {
    map.setLayoutProperty(`${countryCodeArray[i]}_LABEL`, 'visibility', status)
    map.setPaintProperty(countryCodeArray[i], 'fill-opacity', 0)
  }
}

const showHideAllStateLabels = (stateCodeArray, status) => {
  for (let i = 0; i < stateCodeArray.length; i += 1) {
    map.setLayoutProperty(`USST_${stateCodeArray[i]}`, 'visibility', status)
    map.setLayoutProperty(`USSTCAP_${stateCodeArray[i]}`, 'visibility', status)
  }
}

export default class Maps extends React.Component {
  componentDidMount() {
    MapboxGl.accessToken = KEYS.access_token
    // remember: mapbox uses [long, lat] not [lat, long]
    map = new MapboxGl.Map({
      container: 'map',
      style: KEYS.style_key,
      center: [this.props.lonlatzoom[0], this.props.lonlatzoom[1]],
      zoom: this.props.lonlatzoom[2],
      pitchWithRotate: false,
      dragRotate: false,
      hash: true,
      minZoom: 2,
    })
    history.pushState(null, null, '/?')
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

      if (nextProps.states && nextProps.capitals) {
        // show state and state capital name
        map.setLayoutProperty(`USST_${placeCode}`, 'visibility', 'visible')
        map.setLayoutProperty(`USSTCAP_${placeCode}`, 'visibility', 'visible')
      } else if (!nextProps.states && nextProps.capitals) {
        // need to add label layers for every country capital
        // map.setLayoutProperty(`${placeCode}_LABEL`, 'visibility', 'visible')
      } else if (nextProps.states && !nextProps.capitals) {
        // show state name
        map.setLayoutProperty(`USST_${placeCode}`, 'visibility', 'visible')
      } else {
        // show country name
        map.setLayoutProperty(`${placeCode}_LABEL`, 'visibility', 'visible')
      }

      // map.setPaintProperty(placeCode, 'fill-opacity', 1)
      // map.setPaintProperty(placeCode, 'fill-outline-color', 'rgb(41, 169, 45)')
    }

    // check if the map needs to pan to a new location
    if (this.props.lonlatzoom !== nextProps.lonlatzoom) {
      showHideAllCountryLabels(CODES.COUNTRIES, 'none')
      showHideAllStateLabels(CODES.US_STATES, 'none')
      map.flyTo({
        center: [nextProps.lonlatzoom[0], nextProps.lonlatzoom[1]],
        zoom: nextProps.lonlatzoom[2],
        speed: 0.4
      })
    }

    // check for the selected continent
    if (this.props.selectedContinent !== nextProps.selectedContinent) {
      map.flyTo({
        center: [nextProps.lonlatzoom[0], nextProps.lonlatzoom[1]],
        zoom: nextProps.lonlatzoom[2],
        speed: 0.4
      })
    }
  }

  render() {
    return (
      <div id="map" style={style.map} />
    )
  }
}

Maps.propTypes = {
  lonlatzoom: PropTypes.arrayOf(PropTypes.number).isRequired,
  namedPlace: PropTypes.string.isRequired,
  selectedContinent: PropTypes.string.isRequired,
  states: PropTypes.bool.isRequired,
  capitals: PropTypes.bool.isRequired,
}
