import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-materialize'
import CTS from '../../continentContents'

const style = {
  buttonGrouping: {
    position: 'absolute',
    zIndex: 2,
    padding: 6,
    margin: 6,
  },
  button: {
    margin: 2,
    backgroundColor: 'rgba(35, 121, 196, 0.9)',
  },

}

export default class ContinentMenu extends React.Component {
  componentWillMount() {
    // console.log('mounting continent buttons')
  }

  // TODO: refactor to dynamically render with map
  // will reduce redundancy x6
  render() {
    return (
      <div style={style.buttonGrouping}>
        <Button
          className="waves-effect"
          style={style.button}
          onClick={() => this.props.move(
            CTS.NA.lonlat,
            CTS.NA.zoom,
            'NA',
            CTS.NA.countries,
            CTS.NA.abbrevs,
          )}
        >
          N. America
        </Button>

        <Button
          className="waves-effect"
          style={style.button}
          onClick={() => this.props.move(
            CTS.SA.lonlat,
            CTS.SA.zoom,
            'SA',
            CTS.SA.countries,
            CTS.SA.abbrevs,
          )}
        >
          S. America
        </Button>

        <Button
          className="waves-effect"
          style={style.button}
          onClick={() => this.props.move(
            CTS.EU.lonlat,
            CTS.EU.zoom,
            'EU',
            CTS.EU.countries,
            CTS.EU.abbrevs,
          )}
        >
          Europe
        </Button>

        <Button
          className="disabled"
          style={style.button}
          onClick={() => this.props.move(
            CTS.AF.lonlat,
            CTS.AF.zoom,
            'AF',
            CTS.AF.countries,
            CTS.AF.abbrevs,
          )}
        >
          Africa
        </Button>

        <Button
          className="disabled"
          style={style.button}
          onClick={() => this.props.move(
            CTS.AS.lonlat,
            CTS.AS.zoom,
            'AS',
            CTS.AS.countries,
            CTS.AS.abbrevs,
          )}
        >
          Asia
        </Button>

        <Button
          className="disabled"
          style={style.button}
          onClick={() => this.props.move(
            CTS.OC.lonlat,
            CTS.OC.zoom,
            'OC',
            CTS.OC.countries,
            CTS.OC.abbrevs,
          )}
        >
          Oceania
        </Button>
      </div>
    )
  }
}

ContinentMenu.propTypes = {
  move: PropTypes.func.isRequired,
}
