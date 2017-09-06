import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/* eslint-disable */
import Title from './headtitle/title.jsx'
import HeaderCard from './headtitle/headercard.jsx'
import Continents from './continents.jsx'
import InputScoreTime from './InputScoreTime.jsx'
import BackStart from './BackStart.jsx'
/* eslint-enable */


export default class Header extends React.Component {

  render() {
    let continents = null
    let backstart = null
    let inscoretime = null

    if (this.props.appState.selectedContinent !== '') {
      // user selected continent, show start & back buttons, hide continents, inscoretime
      continents = <div />
      backstart = <BackStart handleStart={this.props.handleStart} handleBack={this.props.handleBack} />
      inscoretime = <div />
    } else if (this.props.appState.selectedContinent === '') {
      // hide inscoretime, backstart buttons when no continent is selected
      continents = <Continents handleLocation={this.props.handleLocation} />
      backstart = <div />
      inscoretime = <div />
    }

    if (this.props.appState.timing) {
      // render timer, score, and input when start is clicked
      inscoretime = <InputScoreTime 
        placesArray={this.props.appState.placesArray}
        handleNamedPlace={this.props.handleNamedPlace}
        handleTimer={this.props.handleTimer}
        continent={this.props.appState.selectedContinent}
        timing={this.props.appState.timing}
      />
      backstart = <div />
    } else {
      // need to make a pause button
    }

    return (
      <div>
        <Title />
        <HeaderCard />
        {continents}
        {backstart}
        {inscoretime}
      </div>
    )
  }
}
