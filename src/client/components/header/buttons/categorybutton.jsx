import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class CategoryButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          marginTop: 8,
          marginBottom: 8,
          marginRight: 10,
          zIndex: 2,
          paddingRight: 10,
          paddingLeft: 10,
        }}
        onClick={
          () => this.props.handler(this.props.code)
        }
      >
        {this.props.title}
      </RaisedButton>
    )
  }
}

CategoryButton.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}
