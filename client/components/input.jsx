import React from 'react'
import PropTypes from 'prop-types'
import { form, FormControl, FormGroup } from 'react-bootstrap'
/* eslint-disable */
// import Timer from './timer.jsx'
/* eslint-enable */

const style = {
  inputField: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 8,
    marginLeft: 846,
    paddingBottom: 10,
    fontColor: 'black',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingLeft: 10,
    width: 240,
    fontColor: 'black',
    height: 36,
  },
}

export default class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countryArray: [],
      inputcheck: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    this.setState({ countryArray: this.props.countryArray })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countryArray: nextProps.countryArray })
  }

  // TODO: this method is doing a lot, will refactor logic 
  handleKeyPress(target) {
    this.setState({ inputcheck: null })
    // check if user enters valid country
    if (target.charCode === 13) {
      // upon enter being pressed, iterate through countries array
      // checking for a match to the user input
      const length = this.state.countryArray.length
      for (let i = 0; i < this.state.countryArray.length; i += 1) {
        if (this.state.value.toLowerCase() === this.state.countryArray[i].name.toLowerCase()) {
          this.setState({ inputcheck: 'success', value: '' })
          // call App's namedCountry function with country abbrv to shade in country
          this.props.namedCountry(this.state.countryArray[i].abbrv)
          // remove named country from list
          this.state.countryArray.splice(i, 1)
          this.setState({ countryArray: this.state.countryArray })
          // check if they have countries left to name
          if (this.state.countryArray.length === 0) {
            // parameters (endtimer, gotallcountries?)
            this.props.handleTimer(false, true)
          }
        } else if (i === length - 1) {
          // iterated through country array without match
          this.setState({ inputcheck: 'error' })
        }
      }
    } else {
      // user has typed, has not pressed enter, remind user to press enter
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <form autoComplete="off" style={style.inputField}>
        <FormGroup validationState={this.state.inputcheck}>
          <div>
            <FormControl
              style={style.input}
              type="text"
              value={this.state.value}
              placeholder="Enter country"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </FormGroup>
      </form>
    )
  }
}

InputForm.propTypes = {
  countryArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  namedCountry: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
}
