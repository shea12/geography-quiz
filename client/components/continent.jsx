import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-materialize'
import Continents from '../../continentContents'

const style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 6,
    margin: 6,
  },
  button: {
    margin: 2,
    backgroundColor: 'rgba(35, 121, 196, 0.9)',
  },

}

export default class ContinentMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  componentWillMount() {
    // console.log('mounting continent buttons')
  }

  setVisibilityOfButtons(visibility) {
    this.setState({ visible: visibility })
  }

  onButtonClick(continent) {
    const continentCopy = Object.assign({}, Continents[continent])
    this.props.move(continentCopy, continent)
    this.setVisibilityOfButtons(false)
  }

  // TODO: refactor to dynamically render with map fn, will reduce redundancy 
  render() {
    let showOrHide = this.state.visible ? 2 : 0
    return (
      <div style={style.buttonGrouping}>
        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('NA')}
        >
          N. America
        </Button>

        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('SA')}
        >
          S. America
        </Button>

        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('EU')}
        >
          Europe
        </Button>

        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('AF')}
        >
          Africa
        </Button>

        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('AS')}
        >
          Asia
        </Button>

        <Button
          className="waves-effect"
          style={{zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)',}}
          onClick={() => this.onButtonClick('OC')}
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
