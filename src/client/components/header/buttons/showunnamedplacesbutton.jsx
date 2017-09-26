import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class ShowUnnamedPlacesButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          background: 'rgb(149, 150, 148)',
          position: 'relative',
          zIndex: 2,
          marginLeft: '22%',
          width: 200,
        }}
        onClick={
          () => this.props.handleShowUnnamedPlaces()
        }
      >
        Show Unnamed Places
      </RaisedButton>
    )
  }
}

ShowUnnamedPlacesButton.propTypes = {
  handleShowUnnamedPlaces: PropTypes.func.isRequired,
}
