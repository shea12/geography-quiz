import React from 'react'
import { Input, form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

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
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // TODO: this method is doing a lot, will refactor out some logic 
  handleKeyPress(target) {
    //check if user enters valid country
    if (target.charCode === 13) {
      // upon enter being pressed, iterate through countries array
      // checking for a match to the user input

      console.log('countryList: ', this.state.countries);
      let length = this.state.countries.length
      for (var i = 0; i < this.state.countries.length; i++) {

        if (this.state.value.toLowerCase() === this.state.countries[i].toLowerCase()) {
          console.log('Good!')

          // call colorCountry function to shade in the named country
          this.props.colorCountry(this.state.countries[i]);

          // when correct country is named reset input area
          this.setState({value: ''})

          // remove named country from list
          this.state.countries.splice(i, 1)
          // setState with updated list
          this.setState({countries: this.state.countries})

          // check if they have countries left to name
          if (this.state.countries.length > 0) {
            console.log(length-1 + ' countries left') 
          } else {
            console.log('You named all the countries!')
          }

        } else if (i === length-1) {
          // iterated through country array without match
          console.log('Sorry, not a country. Try again')
        }
      }
    } else {
      // do something if the take a really long time to
      // press enter... maybe have a timer?

    }
    
  }

  componentDidMount() {
    this.setState({ countries: this.props.countries })
    // console.log('initial inputForm countries')
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countries: nextProps.countries })
    // console.log('updated inputForm countries')
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return(
      <form style={style.inputField}>
        <FormGroup controlId="formBasicText" >
          <ControlLabel>Enter country name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="type..."
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <FormControl.Feedback />
          <HelpBlock> ?? </HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

module.exports = InputForm
