import React from 'react'
import PropTypes from 'prop-types'
/* eslint-disable */
import StartButton from './buttons/startbutton.jsx'
import BackButton from './buttons/backbutton.jsx'
/* eslint-enable */

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
