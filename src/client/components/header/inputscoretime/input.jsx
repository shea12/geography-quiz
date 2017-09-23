import React from 'react'
import PropTypes from 'prop-types'
import { form, FormControl, FormGroup } from 'react-bootstrap'

const style = {
  inputField: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 8,
    marginLeft: '19%',
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
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      // send current value of input box to App
      if (this.props.handleInput(this.state.value)) {
        // make input box flash green
        this.setState({ value: '' })
      } else {
        // make input box red
      }
    }
  }

  handleChange(e) {
    this.setState({ 
      value: e.target.value
    })
  }

  render() {
    return (
      <form autoComplete="off" style={style.inputField}>
        <FormGroup validationState={this.state.inputCheck}>
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
  handleInput: PropTypes.func.isRequired,
}



//   const foundIndex = this.checkUserInput(this.state.modifier)
//   // foundIndex will be the index in the array where the match was found
//   // or false if not found
//   if (foundIndex >= 0) {
//     this.setState({ inputCheck: 'success', value: '' })
//     // call App's handleNamedPlace function with place abbrv to shade in area
//     this.props.handleNamedPlace(this.state.placesArray[foundIndex].abbrv)
//     // remove named palce from list
//     this.state.placesArray.splice(foundIndex, 1)
//     this.setState({ placesArray: this.state.placesArray })

//     // check if user has places left to name
//     if (this.state.placesArray.length === 0) {
//       // parameters (endtimer, gotallcountries?)
//       this.props.handleTimer(false, true)
//     } else {
//       // user still has names/capitals left to name, keep going
//     }
//   } else {
//     // user input does not match any modifier (name/capital) in placesArray
//     this.setState({ inputCheck: 'error' })
//   }
// } else {
//   // user hasn't pressed enter
// }


// checkUserInput(modifier) {
//   for (let p = 0; p < this.state.placesArray.length; p += 1) {
//     if (this.state.value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
//       return p
//     }
//   }
//   return -1
// }