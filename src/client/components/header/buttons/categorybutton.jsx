import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

// LINT: component should be written as a pure function
export default class CategoryButton extends React.Component {
  render() {
    return (
      <RaisedButton
        style={{
          margin: 8,
          marginRight: 20,
          zIndex: 2,
          width: 120,
        }}
        onClick={
          () => this.props.handleCategorySelection(this.props.code)
        }
      >
        {this.props.title}
      </RaisedButton>
    )
  }
}

CategoryButton.propTypes = {
  handleCategorySelection: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}
