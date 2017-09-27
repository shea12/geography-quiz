import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class NextButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          position: 'absolute',
          marginTop: 8,
          zIndex: 2,
          marginLeft: 710,
        }}
        onClick={
          () => this.props.handleNextButton()
        }
      >
        Next
      </RaisedButton>
    )
  }
}

NextButton.propTypes = {
  handleNextButton: PropTypes.func.isRequired,
}
