import React from 'react'
import PropTypes from 'prop-types'
import ContinentButton from './continents/af'

const style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 0,
    marginLeft: '28%',
    marginTop: 8,
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
    } else if (!stateCaps && !countryCaps) {
      // user selects states quiz
      this.props.handleLocation(selContinent, selCountry, false)
    } else if (countryCaps) {
      // user selects country capitals quiz
      // console.log('country caps')
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

  render() {
    return (
      <div style={style.buttonGrouping}>
        <ContinentButton continent="N. America" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
        <ContinentButton continent="S. America" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
        <ContinentButton continent="Africa" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
        <ContinentButton continent="Asia" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
        <ContinentButton continent="Europe" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
        <ContinentButton continent="Oceania" onButtonClick={this.onButtonClick} showOrHide={this.state.visible} />
      </div>
    )
  }
}

Continents.propTypes = {
  handleLocation: PropTypes.func.isRequired,
}
