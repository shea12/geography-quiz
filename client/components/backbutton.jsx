import React from 'react'
import { Button } from 'react-materialize'
import PropTypes from 'prop-types'

export default class BackButton extends React.Component {
  render() {
    console.log('this.props: ', this.props)
    return(
      <Button
      style={{
        position: 'absolute',
        marginTop: 14,
        zIndex: 2,
        marginLeft: 20,
      }}
      onClick={
        () => this.props.handleBack()
      }
      >
        Back
      </Button>
    )
  }
}

BackButton.propTypes = {
  handleBack: PropTypes.func.isRequired,
}
