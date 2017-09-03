import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 0,
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
      visible: true,
    }
  }

  onButtonClick(continent) {
    this.props.move(continent)
    this.setVisibilityOfButtons(false)
  }

  setVisibilityOfButtons(visibility) {
    this.setState({ visible: visibility })
  }

  // TODO: refactor to dynamically render with map fn, will reduce redundancy 
  render() {
    const showOrHide = this.state.visible ? 2 : 0
    return (

      <div style={style.buttonGrouping}>
        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('NA')}
        >
          N. America
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('SA')}
        >
          S. America
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('EU')}
        >
          Europe
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('AF')}
        >
          Africa
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('AS')}
        >
          Asia
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('OC')}
        >
          Oceania
        </RaisedButton>
      </div>
    )
  }
}

ContinentMenu.propTypes = {
  move: PropTypes.func.isRequired,
}
