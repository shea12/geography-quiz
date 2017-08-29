import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const CONTINENTS = {
  NORTH_AM: {name: 'NA', lonlat: [-86.49, 35.27], zoom: 3.16},
  SOUTH_AM: {name: 'SA', lonlat: [-60.81, -26.15], zoom: 2.8},
  AFRICA: {name: 'AF', lonlat: [22.48, 1.62], zoom: 2.79},
  EUROPE: {name: 'EU',lonlat: [15.0, 54.18], zoom: 3.34},
  ASIA: {name: 'AS', lonlat: [90.93, 28.19], zoom: 2.87},
  OCEANIA: {name: 'OC', lonlat: [161.85, -21.84], zoom: 3.07},
}

const style = {
  buttons: {
    position: 'absolute',
    zIndex: 1,
  },
}

class ContinentMenu extends React.Component {
  componentWillMount() {
    console.log('mounting continent buttons')
  }

  render() {
    return (
      <ButtonGroup style={style.buttons}>
        <Button onClick={() => this.props.move(CONTINENTS.NORTH_AM)}>
          North America
        </Button>
        <Button onClick={() => this.props.move(CONTINENTS.SOUTH_AM)}>
          South America
        </Button>
        <Button onClick={() => this.props.move(CONTINENTS.AFRICA)}>
          Africa
        </Button>
        <Button onClick={() => this.props.move(CONTINENTS.EUROPE)}>
          Europe
        </Button>
        <Button onClick={() => this.props.move(CONTINENTS.ASIA)}>
          Asia
        </Button>
        <Button onClick={() => this.props.move(CONTINENTS.OCEANIA)}>
          Oceania
        </Button>
      </ButtonGroup>
    )
  }

}

module.exports = ContinentMenu