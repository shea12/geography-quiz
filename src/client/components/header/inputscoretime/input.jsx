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
