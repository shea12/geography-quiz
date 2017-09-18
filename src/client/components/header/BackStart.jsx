import React from 'react'
import PropTypes from 'prop-types'
import StartButton from './buttons/startbutton'
import BackButton from './buttons/backbutton'

// LINT: component should be written as a pure function
export default class BackStart extends React.Component {
  render() {
    return (
      <div>
        <StartButton handleStart={this.props.handleStart} />
        <BackButton handleBack={this.props.handleBack} />
      </div>
    )
  }
}

BackStart.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}
