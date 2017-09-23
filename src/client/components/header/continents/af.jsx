import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const style = {
  fontSize: '14px',
}

export default class ContinentButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 2,
      open: false,
    }

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  // LINT: do not use setState in componentDidMount
  /* eslint-disable */
  componentDidMount() {
    this.setState({ visible: this.props.showOrHide })
  }
  /* eslint-enable */

  handleTouchTap(event) {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    })
  }

  // TODO: refactor to utilize filter function
  render() {
    const showOrHide = this.state.visible ? 2 : 0
    let menuItems = ''
    if (this.props.continent === 'N. America') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('NA', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('NA', true, null, false)} />
          <MenuItem style={style} primaryText="States: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', false)} />
          <MenuItem style={style} primaryText="Capitals: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', true)} />
          <MenuItem style={style} primaryText="States: Mexico" onClick={() => this.props.onButtonClick('NA', false, 'MX', false)} />
          <MenuItem style={style} primaryText="Provinces: Canada" onClick={() => this.props.onButtonClick('NA', false, 'CA', false)} />
        </Menu>
      )
    } else if (this.props.continent === 'S. America') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('SA', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('SA', true, null, false)} />
        </Menu>
      )
    } else if (this.props.continent === 'Africa') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('AF', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('AF', true, null, false)} />
          <MenuItem style={style} primaryText="Provinces: South Africa" onClick={() => this.props.onButtonClick('AF', false, 'ZA', false)} />
        </Menu>
      )
    } else if (this.props.continent === 'Europe') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('EU', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('EU', true, null, false)} />
          <MenuItem style={style} primaryText="Countries: United Kingdom" onClick={() => this.props.onButtonClick('EU', false, 'GB', false)} />
        </Menu>
      )
    } else if (this.props.continent === 'Asia') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('AS', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('AS', true, null, false)} />
        </Menu>
      )
    } else if (this.props.continent === 'Oceania') {
      menuItems = (
        <Menu>
          <MenuItem style={style} primaryText="Countries" onClick={() => this.props.onButtonClick('OC', false, null, false)} />
          <MenuItem style={style} primaryText="Capitals" onClick={() => this.props.onButtonClick('OC', true, null, false)} />
          <MenuItem style={style} primaryText="Provinces: Australia" onClick={() => this.props.onButtonClick('OC', false, 'AU', false)} />
        </Menu>
      )
    } else {
      // console.log('non valid continent name sent')
    }
    return (
      <div style={{ display: 'inline-block' }}>
        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, marginRight: 20, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={this.handleTouchTap}

        >
          {this.props.continent}
        </RaisedButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          {menuItems}
        </Popover>
      </div>
    )
  }
}

ContinentButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  showOrHide: PropTypes.bool.isRequired,
  continent: PropTypes.string.isRequired,
}
