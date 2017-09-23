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

const showHideAllWaterLabels = (waterCodeArray, status) => {
  for (let i = 0; i < waterCodeArray.length; i += 1) {
    map.setLayoutProperty(`${waterCodeArray[i]}_LABEL`, 'visibility', status)
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
    //   return e
    //   // const features = map.queryRenderedFeatures(e.point)
    //   // console.log('features: ', features)
    // })
  }

  componentWillReceiveProps(nextProps) {
    // display country label, shade in country area after it is found
    if (this.props.namedPlace !== nextProps.namedPlace) {
      const placeCode = nextProps.namedPlace
      let layerIdentifier = ''
      if (this.props.layer.charAt(0) === '_') {
        layerIdentifier = placeCode + this.props.layer
        console.log('setting layout and paint')
        map.setLayoutProperty(placeCode, 'visibility', 'visible')
        map.setPaintProperty(placeCode, 'fill-opacity', 1)
        map.setPaintProperty(placeCode, 'fill-color', 'hsla(115, 56%, 65%, 1)')
      } else {
        layerIdentifier = this.props.layer + placeCode
      }
      map.setLayoutProperty(layerIdentifier, 'visibility', 'visible')

      // map.setPaintProperty(layerIdentifier, 'fill-outline-color', 'rgb(41, 169, 45)')
    }

    if (nextProps.lonlatzoom !== this.props.lonlatzoom) {
      map.flyTo({
        center: [nextProps.lonlatzoom[0], nextProps.lonlatzoom[1]],
        zoom: nextProps.lonlatzoom[2],
        speed: 0.4,
      })

      if (nextProps.clearLabels === true) {
        showHideAllCountryLabels(CODES.COUNTRIES, 'none')
        showHideAllStateLabels(CODES.US_STATES, 'none')
        showHideAllWaterLabels(CODES.WATER, 'none')
      }
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
  layer: PropTypes.string.isRequired,
  clearLabels: PropTypes.bool,
}
