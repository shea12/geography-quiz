import React from 'react'
import PropTypes from 'prop-types'
/* eslint-disable */
import Input from './inputscoretime/input.jsx'
import ScoreKeeper from './inputscoretime/scorekeeper.jsx'
import Timer from './inputscoretime/timer.jsx'
import BackButton from './buttons/backbutton.jsx'

import GiveUpButton from './buttons/giveupbutton.jsx'
import PauseButton from './buttons/pausebutton.jsx'
/* eslint-enable */

// LINT: component should be written as a pure function
export default class InputScoreTime extends React.Component {
  render() {
    return (
      <div>
        <Input
          placesArray={this.props.placesArray}
          capitals={this.props.capitals}
          handleNamedPlace={this.props.handleNamedPlace}
          handleTimer={this.props.handleTimer}
        />
        <ScoreKeeper
          placesArray={this.props.placesArray}
          continent={this.props.continent}
        />
        <Timer timing={this.props.timing} />
        <BackButton handleBack={this.props.handleBack} />

        <GiveUpButton handleGiveUp={this.props.handleGiveUp} />
        <PauseButton handlePause={this.props.handlePause} />
      </div>
    )
  }
}

InputScoreTime.propTypes = {
  placesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  continent: PropTypes.string.isRequired,
  capitals: PropTypes.bool.isRequired,
  timing: PropTypes.bool.isRequired,
  handleNamedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
}
