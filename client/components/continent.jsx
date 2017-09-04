import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const style = {
  buttonGrouping: {
    position: 'absolute',
    padding: 0,
    margin: 6,
  },
  button: {
    margin: 2,
    backgroundColor: 'rgba(35, 121, 196, 0.9)',
  },
}

export default class ContinentMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      open: false,
    }
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  /* PARAMS: 
      selContinent: string: 2 Letter Continent Abbreviation,
      countryCaps: boolean: Country capitals quiz,
      selCountry: string: 2 Letter Country Abbreviation
      stateCaps: boolean: State capitals quiz
  */
  onButtonClick(selContinent, countryCaps, selCountry, stateCaps) {
    if (stateCaps) {
      // user selects state capitals quiz
      this.props.move(selContinent, selCountry, true)
    } else if (!stateCaps) {
      // user selects states quiz
      this.props.move(selContinent, selCountry, false)
    } else if(countryCaps) {
      // user selects country capitals quiz
      this.props.move(selContinent, null, true)
    } else {
      // user selects countries of continent quiz
      this.props.move(selContinent, null, false)
    }
    this.setVisibilityOfButtons(false)
  }

  setVisibilityOfButtons(visibility) {
    this.setState({ visible: visibility })
  }

  // TODO: refactor to dynamically render with map fn, will reduce redundancy 
  render() {
    const showOrHide = this.state.visible ? 2 : 0
    return (

      <div style={style.buttonGrouping}>
        <div>
          <RaisedButton
            className="waves-effect"
            style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
            // onClick={() => this.onButtonClick('NA')}
            onClick={this.handleTouchTap}
            label='N. America'
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText='All countries' onClick={() => this.onButtonClick('NA', false, null, false)}/>
              <MenuItem primaryText='Capitals of Countries'  onClick={() => this.onButtonClick('NA', true, null, false)}/>
              <MenuItem primaryText='States of US' onClick={() => this.onButtonClick('NA', false, 'US', false)}/>
              <MenuItem primaryText='Capitals of US States' onClick={() => this.onButtonClick('NA', false, 'US', true)}/>
            </Menu>
          </Popover>
        </div>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('SA')}
        >
          S. America
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('EU')}
        >
          Europe
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('AF')}
        >
          Africa
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('AS')}
        >
          Asia
        </RaisedButton>

        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={() => this.onButtonClick('OC')}
        >
          Oceania
        </RaisedButton>
      </div>
    )
  }
}

ContinentMenu.propTypes = {
  move: PropTypes.func.isRequired,
}
