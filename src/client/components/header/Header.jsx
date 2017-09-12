import React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
/* eslint-disable */
import Title from './headtitle/title.jsx'
import HeaderCard from './headtitle/headercard.jsx'
import Continents from './continents.jsx'
import InputScoreTime from './InputScoreTime.jsx'
import BackStart from './BackStart.jsx'
/* eslint-enable */

// LINT: component should be written as a pure function
export default class Header extends React.Component {
  render() {
    let continents = null
    let backstart = null
    let inscoretime = null
    let quiztitle = null

    if (this.props.selectedContinent !== '') {
      // user selected continent, show start & back buttons, hide continents, inscoretime
      continents = <div />
      backstart = (<BackStart
        handleStart={this.props.handleStart}
        handleBack={this.props.handleBack}
      />)
      inscoretime = <div />
      quiztitle = (<h5 style={{ position: 'absolute', zIndex: 2, marginLeft: 380 }}>
        {this.props.quizTitle}
      </h5>)
    } else if (this.props.selectedContinent === '') {
      // hide inscoretime, backstart buttons when no continent is selected
      continents = <Continents handleLocation={this.props.handleLocation} />
      backstart = <div />
      inscoretime = <div />
    }

    if (this.props.timing) {
      // render timer, score, and input when start is clicked
      inscoretime = (<InputScoreTime
        placesArray={this.props.placesArray}
        continent={this.props.selectedContinent}
        timing={this.props.timing}
        capitals={this.props.capitals}
        handleBack={this.props.handleBack}
        handleNamedPlace={this.props.handleNamedPlace}
        handleTimer={this.props.handleTimer}
        handleGiveUp={this.props.handleGiveUp}
        handlePause={this.props.handlePause}
        quizTitle={this.props.quizTitle}
      />)
      backstart = <div />
    } else {
      // need to make a stop button
    }

    return (
      <div>
        <Title />
        <HeaderCard />
        {continents}
        {backstart}
        {inscoretime}
        {quiztitle}
      </div>
    )
  }
}

Header.propTypes = {
  placesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedContinent: PropTypes.string.isRequired,
  quizTitle: PropTypes.string.isRequired,
  capitals: PropTypes.bool.isRequired,
  timing: PropTypes.bool.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleNamedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
}
