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
    marginTop: 4,
    marginLeft: 846,
    paddingBottom: 10,
    fontColor: 'black',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingLeft: '10px',
    marginTop: '10px',
    width: '240px',
    fontColor: 'black',
    height: '36px',
  },
}

export default class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: [],
      inputcheck: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    this.setState({ countries: this.props.countries })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countries: nextProps.countries })
  }

  // TODO: this method is doing a lot, will refactor logic 
  handleKeyPress(target) {
    this.setState({ inputcheck: null })
    // check if user enters valid country
    if (target.charCode === 13) {
      // upon enter being pressed, iterate through countries array
      // checking for a match to the user input
      const length = this.state.countries.length
      for (let i = 0; i < this.state.countries.length; i += 1) {
        if (this.state.value.toLowerCase() === this.state.countries[i].toLowerCase()) {
          this.setState({ inputcheck: 'success', value: '' })
          // call colorCountry function to shade in the named country
          this.props.colorCountry(this.state.countries[i])
          // remove named country from list
          this.state.countries.splice(i, 1)
          // setState with updated list
          this.setState({ countries: this.state.countries })
          // check if they have countries left to name
          if (this.state.countries.length === 0) {
            /* eslint-disable */
            // alert('You named all the countries!')
            /* eslint-enable */
            this.props.handleTimer(false)
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
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  colorCountry: PropTypes.func.isRequired,
}
