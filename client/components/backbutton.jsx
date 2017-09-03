import React from 'react'
// import { Button } from 'react-materialize'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

export default class BackButton extends React.Component {
  render() {
    console.log('this.props: ', this.props)
    return(
      <RaisedButton
      style={{
        position: 'absolute',
        marginTop: 8,
        zIndex: 2,
        marginLeft: 20,
      }}
      onClick={
        () => this.props.handleBack()
      }
      >
        Back
      </RaisedButton>
    )
  }
}

BackButton.propTypes = {
  handleBack: PropTypes.func.isRequired,
}
