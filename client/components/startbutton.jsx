import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

export default class StartButton extends React.Component {
  render() {
    console.log('this.props: ', this.props)
    return(
     <RaisedButton
      style={{
        position: 'absolute',
        marginTop: 14,
        zIndex: 2,
        marginLeft: 140,
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
