import React from 'react'
import PropTypes from 'prop-types'
// import RaisedButton from 'material-ui/RaisedButton'
// import Popover from 'material-ui/Popover'
// import Menu from 'material-ui/Menu'
// import MenuItem from 'material-ui/MenuItem'
/* eslint-disable */
import NAButton from './continents/na.jsx'
import SAButton from './continents/sa.jsx'
import EUButton from './continents/eu.jsx'
import AFButton from './continents/af.jsx'
import OCButton from './continents/oc.jsx'
import ASButton from './continents/as.jsx'
/* eslint-enable */

const style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 0,
    margin: 6,
    display: 'inline-block',
  },
}

export default class Continents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  /* PARAMS: 
      selContinent: string: 2 Letter Continent Abbreviation,
      countryCaps: boolean: Country capitals quiz,
      selCountry: string: 2 Letter Country Abbreviation
      stateCaps: boolean: State capitals quiz
  */
  onButtonClick(selContinent, countryCaps, selCountry, stateCaps) {
    if (stateCaps) {
      // user selects state capitals quiz
      this.props.handleLocation(selContinent, selCountry, true)
    } else if (!stateCaps) {
      // user selects states quiz
      this.props.handleLocation(selContinent, selCountry, false)
    } else if (countryCaps) {
      // user selects country capitals quiz
      this.props.handleLocation(selContinent, null, true)
    } else {
      // user selects countries of continent quiz
      this.props.handleLocation(selContinent, null, false)
    }
    this.setVisibilityOfButtons(false)
  }

  setVisibilityOfButtons(visibility) {
    this.setState({ visible: visibility })
  }

  // TODO: refactor
  render() {
    // const showOrHide = this.state.visible ? 2 : 0
    return (
      <div style={style.buttonGrouping}>

        <NAButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

        <SAButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

        <AFButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

        <EUButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

        <ASButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

        <OCButton onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />

      </div>
    )
  }
}

Continents.propTypes = {
  handleLocation: PropTypes.func.isRequired,
}
