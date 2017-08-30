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
        <Button onClick={() => this.props.move(CTS.NA.lonlat, CTS.NA.zoom, 'NA', CTS.NA.countries, CTS.NA.abbrevs)}>
          North America
        </Button>
        <Button onClick={() => this.props.move(CTS.SA.lonlat, CTS.SA.zoom, 'SA', CTS.SA.countries, CTS.SA.abbrevs)}>
          South America
        </Button>
        <Button onClick={() => this.props.move(CTS.AF.lonlat, CTS.AF.zoom, 'AF', CTS.AF.countries, CTS.AF.abbrevs)}>
          Africa
        </Button>
        <Button onClick={() => this.props.move(CTS.EU.lonlat, CTS.EU.zoom, 'EU', CTS.EU.countries, CTS.EU.abbrevs)}>
          Europe
        </Button>
        <Button onClick={() => this.props.move(CTS.AS.lonlat, CTS.AS.zoom, 'AS', CTS.AS.countries, CTS.AS.abbrevs)}>
          Asia
        </Button>
        <Button onClick={() => this.props.move(CTS.OC.lonlat, CTS.OC.zoom, 'OC', CTS.OC.countries, CTS.OC.abbrevs)}>
          Oceania
        </Button>
      </ButtonGroup>
    )
  }

}

module.exports = ContinentMenu