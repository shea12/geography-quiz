import React from 'react'
import PropTypes from 'prop-types'

import Input from './inputscoretime/input.jsx'
import ScoreKeeper from './inputscoretime/scorekeeper.jsx'
import Timer from './inputscoretime/timer.jsx'
import BackButton from './backstart/backbutton.jsx'

export default class InputScoreTime extends React.Component {

  render() {
    return (
      <div>
        <Input 
          placesArray={this.props.placesArray}
          handleNamedPlace={this.props.handleNamedPlace}
          handleTimer={this.props.handleTimer}
        />
        <ScoreKeeper
          placesArray={this.props.placesArray}
          continent={this.props.continent}
        />
        <Timer 
          timing={this.props.timing}
        />
        <BackButton handleBack={this.props.handleBack} />
      </div>
    )
  }
}

