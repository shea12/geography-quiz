import React from 'react'
import { Input, form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

const style = {
  inputField: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 2,
    marginLeft: 600,
    paddingBottom: 10
  }
}

export default class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: [],
      inputcheck: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // TODO: this method is doing a lot, will refactor out some logic 
  handleKeyPress(target) {
    this.setState({ inputcheck: null })
    //check if user enters valid country
    if (target.charCode === 13) {
      // upon enter being pressed, iterate through countries array
      // checking for a match to the user input
      let length = this.state.countries.length
      for (var i = 0; i < this.state.countries.length; i++) {
        if (this.state.value.toLowerCase() === this.state.countries[i].toLowerCase()) {
          this.setState({ inputcheck: 'success', value: '' })
          // call colorCountry function to shade in the named country
          this.props.colorCountry(this.state.countries[i]);
          // remove named country from list
          this.state.countries.splice(i, 1)
          // setState with updated list
          this.setState({countries: this.state.countries})

          // check if they have countries left to name
          if (this.state.countries.length === 0) {
            alert('You named all the countries!')
          }

        } else if (i === length-1) {
          // iterated through country array without match
          this.setState({ inputcheck: 'error' })
        }
      }
    } else {
      // user has typed, has not pressed enter, remind user to press enter
    }
    
  }

  componentDidMount() {
    this.setState({ countries: this.props.countries })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countries: nextProps.countries })
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return(
      <form autoComplete='off' style={style.inputField}>
        <FormGroup validationState={this.state.inputcheck}>
          <ControlLabel></ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder='Enter country'
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
      </form>
    )
  }
}
