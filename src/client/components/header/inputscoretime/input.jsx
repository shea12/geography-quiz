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
    borderBottom: '2px solid rgb(99, 99, 99)',
    paddingLeft: 10,
    width: 240,
    fontColor: 'black',
    height: 36,
  },
  correctInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottom: '4px solid rgb(27, 135, 13)',
    paddingLeft: 10,
    width: 240,
    fontColor: 'black',
    height: 36,
  },
  badInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottom: '4px solid rgb(204, 48, 48)',
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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  validateInput() {
    const regex = /^[\w ]+$/
    // const regex = (?:\s*[a-zA-Z0-9]{2,}\s*)*
    if (!regex.test(this.state.value)) {
      return false
    }
    return true
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.setState({ boxStyle: 'neutral' })
      const valid = this.validateInput()
      if (valid) {
        // send current value of input box to App
        if (this.props.handleInput(this.state.value)) {
          // make input box flash green
          this.setState({ invalid: false, value: '', boxStyle: 'valid' })
        } else {
          // make input box red
          this.setState({ invalid: true, boxStyle: 'invalid' })
        }
      } else if (!valid) {
        // invalid input, make box red, remind user of rules
        this.setState({ invalid: true, boxStyle: 'invalid' })
      }
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    let boxstyle = style.input
    if (this.state.boxStyle === 'invalid') {
      boxstyle = style.badInput
    } else if (this.state.boxStyle === 'valid') {
      boxstyle = style.correctInput
    } else {
      boxstyle = style.input
    }

    return (
      <form autoComplete="off" style={style.inputField}>
        <FormGroup validationState={this.state.inputCheck}>
          <div>
            <FormControl
              style={boxstyle}
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
