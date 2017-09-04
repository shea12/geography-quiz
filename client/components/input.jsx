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
      placesArray: [],
      inputcheck: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    this.setState({ placesArray: this.props.placesArray })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ placesArray: nextProps.placesArray })
  }

  // TODO: this method is doing a lot, will refactor logic 
  handleKeyPress(target) {
    this.setState({ inputcheck: null })
    // check if user enters valid place
    if (target.charCode === 13) {
      // upon enter being pressed, iterate through countries array
      // checking for a match to the user input
      const length = this.state.placesArray.length
      for (let i = 0; i < this.state.placesArray.length; i += 1) {
        if (this.state.value.toLowerCase() === this.state.placesArray[i].name.toLowerCase()) {
          this.setState({ inputcheck: 'success', value: '' })
          // call App's namedPlace function with place abbrv to shade in area
          this.props.namedPlace(this.state.placesArray[i].abbrv)
          // remove named palce from list
          this.state.placesArray.splice(i, 1)
          this.setState({ placesArray: this.state.placesArray })
          // check if user has countries left to name
          if (this.state.placesArray.length === 0) {
            // parameters (endtimer, gotallcountries?)
            this.props.handleTimer(false, true)
          }
        } else if (i === length - 1) {
          // iterated through place array without match
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
              placeholder="Enter name of place"
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
  placesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  namedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
}
