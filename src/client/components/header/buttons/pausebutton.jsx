import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class PauseButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          position: 'absolute',
          marginTop: 8,
          zIndex: 2,
          marginLeft: 260,
        }}
        onClick={
          () => this.props.handlePause()
        }
      >
        Pause
      </RaisedButton>
    )
  }
}

PauseButton.propTypes = {
  handlePause: PropTypes.func.isRequired,
}
