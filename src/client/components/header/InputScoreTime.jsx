import React from 'react'
import PropTypes from 'prop-types'
import Input from './inputscoretime/input'
import ScoreKeeper from './inputscoretime/scorekeeper'
import Timer from './inputscoretime/timer'
import BackButton from './buttons/backbutton'
import GiveUpButton from './buttons/giveupbutton'

// LINT: component should be written as a pure function
export default class InputScoreTime extends React.Component {
  render() {
    return (
      <div>
        <Input handleInput={this.props.handleInput} />
        <ScoreKeeper remaining={this.props.remaining} />
        <BackButton handleBack={this.props.handleBack} />
        <GiveUpButton handleGiveUp={this.props.handleGiveUp} />
        <Timer
          timing={this.props.timing}
          getFinalTime={this.props.getFinalTime}
          handleTimer={this.props.handleTimer}
        />
      </div>
    )
  }
}

InputScoreTime.propTypes = {
  timing: PropTypes.bool.isRequired,
  remaining: PropTypes.number.isRequired,
  handleTimer: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  getFinalTime: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
}
