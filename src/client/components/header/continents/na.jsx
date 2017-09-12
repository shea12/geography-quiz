import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class NAButton extends React.Component {
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

  render() {
    const showOrHide = this.state.visible ? 2 : 0
    return (
      <div style={{ display: 'inline-block' }}>
        <RaisedButton
          className="waves-effect"
          style={{ zIndex: showOrHide, margin: 2, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={this.handleTouchTap}
          label="N. America"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Countries" onClick={() => this.props.onButtonClick('NA', false, null, false)} />
            <MenuItem primaryText="Capitals" onClick={() => this.props.onButtonClick('NA', true, null, false)} />
            <MenuItem primaryText="States: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', false)} />
            <MenuItem primaryText="Capitals: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', true)} />
            <MenuItem primaryText="States: Mexico" onClick={() => this.props.onButtonClick('NA', false, 'MX', false)} />
            <MenuItem primaryText="Capitals: Mexico" onClick={() => this.props.onButtonClick('NA', false, 'MX', true)} />
            <MenuItem primaryText="Provinces: Canada" onClick={() => this.props.onButtonClick('NA', false, 'CA', false)} />
            <MenuItem primaryText="Capitals: Canada" onClick={() => this.props.onButtonClick('NA', false, 'CA', true)} />
          </Menu>
        </Popover>
      </div>
    )
  }
}

NAButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  showOrHide: PropTypes.bool.isRequired,
}
