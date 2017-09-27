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

    this.flyToLocation = this.flyToLocation.bind(this)
    this.shadeInCountry = this.shadeInCountry.bind(this)
    this.toggleLabels = this.toggleLabels.bind(this)
    this.showLabel = this.showLabel.bind(this)
  }
  
  flyToLocation(lonlatzoom) {
    if (lonlatzoom) {
      map.flyTo({
        center: [lonlatzoom[0], lonlatzoom[1]],
        zoom: lonlatzoom[2],
        speed: .5,
      })
    }
  }

  shadeInCountry(abbrv, color) {
    // make country shape visible, filled in, {color}, grey outline
    map.setLayoutProperty(abbrv, 'visibility', 'visible')
    map.setPaintProperty(abbrv, 'fill-opacity', 1)
    map.setPaintProperty(abbrv, 'fill-color', color)
    map.setPaintProperty(abbrv, 'fill-outline-color', 'rgba(255, 255, 255, 0)')
  }

  removeShading(abbrvs) {
    for (let i = 0; i < abbrvs.length; i+=1) {
      map.setPaintProperty(abbrvs[i], 'fill-opacity', 0)
    }
  }

  toggleLabels(prefix, abbrvs, visibility) {
    for (let i = 0; i < abbrvs.length; i+=1) {
      let label = prefix + abbrvs[i]
      map.setLayoutProperty(label, 'visibility', visibility)
    }
  }

  showLabel(abbrv) {
    let label = this.props.layer + abbrv
    map.setLayoutProperty(label, 'visibility', 'visible')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.lonlatzoom !== this.props.lonlatzoom) {
      // need to set different timeout intervals depending on props
      let wait = 250
      if (this.props.quizType === 'NTP') { wait = 750 }
      setTimeout(() => { this.flyToLocation(nextProps.lonlatzoom)}, wait)
    }

    if (this.props.namedPlace !== nextProps.namedPlace) {
      let abbrv = nextProps.namedPlace
      this.showLabel(abbrv)
      // if country or country capital quiz, shade country green
      if (this.props.layer === 'C_' || this.props.layer === 'CCAP_') {
        this.shadeInCountry(abbrv, 'rgba(34, 176, 27, 0.26)')
      }

      if (this.props.layer === 'BW_') {
        let waterLabel = this.props.layer + abbrv
        map.setPaintProperty(waterLabel, 'text-color', 'hsla(212, 3%, 39%, 0.85)')
      }
    }

    if (nextProps.showUnnamedPlaces && nextProps.placesArray.length !== 0) {
      console.log('Showing unnamed places')
      for (var i = 0; i < nextProps.placesArray.length; i++) {
        let abbrv = nextProps.placesArray[i].abbrv
        this.showLabel(abbrv)
        // if country or country capital quiz, shade unnamed countries red
        if (this.props.layer === 'C_' || this.props.layer === 'CCAP_') {
          this.shadeInCountry(abbrv, 'rgba(220, 57, 24, 0.26)')
        }
        if (this.props.layer === 'BW_') {
          let waterLabel = this.props.layer + abbrv
          map.setPaintProperty(waterLabel, 'text-color', 'hsla(12, 82%, 49%, 0.8)')
        }
      }
    }

    if (nextProps.clearLabels === true) {
      console.log('in map, clearing map')
      this.toggleLabels('C_', CODES.C, 'none')
      this.toggleLabels('BW_', CODES.BW, 'none')
      this.toggleLabels('TE_', CODES.TE, 'none')
      this.toggleLabels('ST_', CODES.ST, 'none')
      this.toggleLabels('CCAP_', CODES.C, 'none')
      this.toggleLabels('STCAP_', CODES.STCAP, 'none')
      // this.toggleLabels('LM_', CODES.LM, 'none')
      // this.toggleLabels('TECAP_', CODES.TECAP, 'none')
      this.removeShading(CODES.C)
      this.props.resetClearMap()
    }
  }

  render() {
    return (
      <div id="map" style={style.map} />
    )
  }
}

Maps.propTypes = {
  layer: PropTypes.string,
  quizType: PropTypes.string,
  clearLabels: PropTypes.bool,
  showUnnamedPlaces: PropTypes.bool,
  namedPlace: PropTypes.string.isRequired,
  resetClearMap: PropTypes.func.isRequired,
  placesArray: PropTypes.arrayOf(PropTypes.object),
  lonlatzoom: PropTypes.arrayOf(PropTypes.number),
}

// map.on('click', (e) => {
//   return e
//   // const features = map.queryRenderedFeatures(e.point)
//   // console.log('features: ', features)
// })
