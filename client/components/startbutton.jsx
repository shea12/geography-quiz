import React from 'react'
import { Button } from 'react-materialize'
import PropTypes from 'prop-types'

export default class StartButton extends React.Component {
  render() {
    console.log('this.props: ', this.props)
    return(
      <Button
      style={{
        position: 'absolute',
        marginTop: 14,
        zIndex: 2,
        marginLeft: 60,
      }}
      onClick={
        () => this.props.handleStart()
      }
      >
        Start Quiz
      </Button>
    )
  }
}

StartButton.propTypes = {
  handleStart: PropTypes.func.isRequired,
}
