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
          style={{ zIndex: showOrHide, marginRight: 20, backgroundColor: 'rgba(35, 121, 196, 0.9)' }}
          onClick={this.handleTouchTap}
        >
          N. America
        </RaisedButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem style={style.item} primaryText="Countries" onClick={() => this.props.onButtonClick('NA', false, null, false)} />
            <MenuItem style={style.item} primaryText="Capitals" onClick={() => this.props.onButtonClick('NA', true, null, false)} />
            <MenuItem style={style.item} primaryText="States: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', false)} />
            <MenuItem style={style.item} primaryText="Capitals: USA" onClick={() => this.props.onButtonClick('NA', false, 'US', true)} />
            <MenuItem style={style.item} primaryText="States: Mexico" onClick={() => this.props.onButtonClick('NA', false, 'MX', false)} />
            <MenuItem style={style.item} primaryText="Capitals: Mexico" onClick={() => this.props.onButtonClick('NA', false, 'MX', true)} />
            <MenuItem style={style.item} primaryText="Provinces: Canada" onClick={() => this.props.onButtonClick('NA', false, 'CA', false)} />
            <MenuItem style={style.item} primaryText="Capitals: Canada" onClick={() => this.props.onButtonClick('NA', false, 'CA', true)} />
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
