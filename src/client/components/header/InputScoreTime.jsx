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
        <Timer
          timing={this.props.timing}
          getFinalTime={this.props.getFinalTime}
        />
        <BackButton handleBack={this.props.handleBack} />

        <GiveUpButton handleGiveUp={this.props.handleGiveUp} />
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
  getFinalTime: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
}
