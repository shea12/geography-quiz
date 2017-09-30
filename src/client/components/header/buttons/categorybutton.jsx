import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

export default class CategoryButton extends React.Component {
  checkDisabled() {
    if (this.props.disabled === true) {
      return '#848484'
    }
    return '#000000'
  }

  render() {
    const stylecolor = this.checkDisabled()
    return (
      <RaisedButton
        disabled={this.props.disabled}
        disabledBackgroundColor="#d8d8d8"
        backgroundColor={this.props.buttoncolor}
        style={{
          marginRight: 20,
          marginTop: 8,
          width: this.props.width,
          color: stylecolor,
        }}
        onClick={() => this.props.handler(this.props.code)}
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
  width: PropTypes.number.isRequired,
  buttoncolor: PropTypes.string,
  disabled: PropTypes.bool,
}
