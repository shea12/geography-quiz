import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import CTS from '../../continentContents'

const style = {
  buttons: {
    position: 'absolute',
    zIndex: 2,
  },
}

class ContinentMenu extends React.Component {
  componentWillMount() {
    console.log('mounting continent buttons')
  }

  render() {
    return (
      <ButtonGroup style={style.buttons}>
        <Button onClick={() => this.props.move(CTS.NA.lonlat, CTS.NA.zoom, 'NA', CTS.NA.countries)}>
          North America
        </Button>
        <Button onClick={() => this.props.move(CTS.SA.lonlat, CTS.SA.zoom, 'SA', CTS.SA.countries)}>
          South America
        </Button>
        <Button onClick={() => this.props.move(CTS.AF.lonlat, CTS.AF.zoom, 'AF', CTS.AF.countries)}>
          Africa
        </Button>
        <Button onClick={() => this.props.move(CTS.EU.lonlat, CTS.EU.zoom, 'EU', CTS.EU.countries)}>
          Europe
        </Button>
        <Button onClick={() => this.props.move(CTS.AS.lonlat, CTS.AS.zoom, 'AS', CTS.AS.countries)}>
          Asia
        </Button>
        <Button onClick={() => this.props.move(CTS.OC.lonlat, CTS.OC.zoom, 'OC', CTS.OC.countries)}>
          Oceania
        </Button>
      </ButtonGroup>
    )
  }

}

module.exports = ContinentMenu