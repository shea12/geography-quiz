import React from 'react'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const style = {
  menuDiv: {
    paddingLeft: '96%',
  },
  menu: {
    position: 'absolute',
    zIndex: 3,
    paddingTop: 0,
    marginTop: 4,
  },
  menuItem: {
  },
}

export default class Menu extends React.Component {
  render() {
    return (
      <div style={style.menuDiv} >
        <IconMenu
          style={style.menu}
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem
            style={style.menuItem}
            primaryText="Clear Map"
            onClick={() => this.props.handleClearMap()}
          />
          <MenuItem
            style={style.menuItem}
            primaryText="Center Map"
            onClick={() => this.props.handleBackButton([0.2, 20.6, 2])}
          />
        </IconMenu>
      </div>
    )
  }
}

Menu.propTypes = {
  handleClearMap: PropTypes.func.isRequired,
  handleBackButton: PropTypes.func.isRequired,
}
