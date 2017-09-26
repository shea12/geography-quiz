import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class ClearMapButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          position: 'relative',
          marginTop: '48%',
          zIndex: 2,
          marginLeft: '3%',
        }}
        onClick={
          () => this.props.handleClearMap()
        }
      >
        Clear Map
      </RaisedButton>
    )
  }
}

ClearMapButton.propTypes = {
  handleClearMap: PropTypes.func.isRequired,
}
