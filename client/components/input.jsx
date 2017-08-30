import React from 'react'
import { form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

const style = {
  inputField: {
    marginLeft: 500,
    position: 'absolute',
    zIndex: 1,
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  getValidationState() {
    //check if user enters valid country
    console.log('Validating...')
    let a = 'a'
    if (this.state.value === a) {
      console.log('match!');
    } else {
      console.log('no match');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.countries !== nextProps.countries) {
      this.setState({ countries: nextProps.countries })
      console.log('updated inputForm countries state')
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return(
      <form style={style.inputField}>
        <FormGroup 
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Enter country name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="type..."
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> ?? </HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

module.exports = InputForm
