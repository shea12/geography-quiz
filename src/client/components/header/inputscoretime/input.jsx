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
      modifier: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    let modifier = null
    if (this.props.capitals) {
      modifier = 'cap'
    } else {
      modifier = 'name'
    }
    this.setState({
      placesArray: this.props.placesArray,
      modifier: modifier,
    })
  }

  componentWillReceiveProps(nextProps) {
    let modifier = null
    if (this.props.capitals) {
      modifier = 'cap'
    } else {
      modifier = 'name'
    }
    this.setState({
      placesArray: nextProps.placesArray,
      modifier: modifier,
    })
  }

  checkUserInput(modifier) {
    for (let p = 0; p < this.state.placesArray.length; p += 1) {
      if (this.state.value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
        return p
      }
    }
    return -1
  }
  
  // TODO: this method is doing a lot, will refactor logic 
  handleKeyPress(target) {
    this.setState({ inputcheck: null })
    // check if user enters valid place
    if (target.charCode === 13) {
      // const length = this.state.placesArray.length

      let foundIndex = this.checkUserInput(this.state.modifier)
      // foundIndex will be the index in the array where the match was found
      // or -1 if not found, thus evaluating to false
      if (foundIndex) {
        this.setState({ inputcheck: 'success', value: '' })
        // call App's handleNamedPlace function with place abbrv to shade in area
        this.props.handleNamedPlace(this.state.placesArray[foundIndex].abbrv)
        // remove named palce from list
        this.state.placesArray.splice(foundIndex, 1)
        this.setState({ placesArray: this.state.placesArray })
        // check if user has countries left to name
        if (this.state.placesArray.length === 0) {
          // parameters (endtimer, gotallcountries?)
          this.props.handleTimer(false, true)
        } else {
          // still names/capitals left for user to name, keep going
        }
      } else {
        // user input does not match any modifier (name/capital) in placesArray
        this.setState({ inputcheck: 'error' })
      }   
    } else {
      // user hasn't pressed enter
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
  handleNamedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
}
