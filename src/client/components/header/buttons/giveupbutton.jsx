import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

export default class GiveUpButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          position: 'absolute',
          marginTop: 8,
          zIndex: 2,
          marginLeft: 140,
        }}
        onClick={
          () => this.props.handleBack()
        }
      >
        Give Up
      </RaisedButton>
    )
  }
}

GiveUpButton.propTypes = {
  handleGiveUp: PropTypes.func,
}
