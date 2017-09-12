import React from 'react'
import PropTypes from 'prop-types'

import StartButton from './buttons/startbutton.jsx'
import BackButton from './buttons/backbutton.jsx'

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
  handleStart: PropTypes.func,
  handleBack: PropTypes.func
}
