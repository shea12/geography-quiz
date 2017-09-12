import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

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
          () => this.props.handleBack()
        }
      >
        Pause
      </RaisedButton>
    )
  }
}

PauseButton.propTypes = {
  handlePause: PropTypes.func,
}
