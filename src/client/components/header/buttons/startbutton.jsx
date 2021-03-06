import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class StartButton extends React.Component {
  render() {
    return (
      <RaisedButton
        backgroundColor="#77d868"
        style={{
          position: 'absolute',
          marginTop: 8,
          zIndex: 2,
          marginLeft: '10%',
        }}
        onClick={
          () => this.props.handleStart()
        }
      >
        Start Quiz
      </RaisedButton>
    )
  }
}

StartButton.propTypes = {
  handleStart: PropTypes.func.isRequired,
}
