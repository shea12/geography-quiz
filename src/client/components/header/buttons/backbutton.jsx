import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class BackButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          position: 'absolute',
          marginTop: 8,
          zIndex: 2,
          marginLeft: 20,
        }}
        onClick={
          () => this.props.handleBackButton()
        }
      >
        Back
      </RaisedButton>
    )
  }
}

BackButton.propTypes = {
  handleBackButton: PropTypes.func.isRequired,
}
