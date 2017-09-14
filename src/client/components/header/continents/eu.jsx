import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const style = {
  item: {
    fontSize: '14px',
  },
}

export default class EUButton extends React.Component {
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
          style={{ zIndex: showOrHide, marginRight: 20, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={this.handleTouchTap}
        >
        Europe
        </RaisedButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem style={style.item} primaryText="Countries" onClick={() => this.props.onButtonClick('EU', false, null, false)} />
            <MenuItem style={style.item} primaryText="Capitals" onClick={() => this.props.onButtonClick('EU', true, null, false)} />
            <MenuItem style={style.item} primaryText="Countries: United Kingdom" onClick={() => this.props.onButtonClick('EU', false, 'GB', false)} />
            <MenuItem style={style.item} primaryText="Capitals: United Kingdom" onClick={() => this.props.onButtonClick('EU', false, 'GB', true)} />
          </Menu>
        </Popover>
      </div>
    )
  }
}

EUButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  showOrHide: PropTypes.bool.isRequired,
}
