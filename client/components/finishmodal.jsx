import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'

export default class FinishModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }

    this.close = this.close.bind(this)
  }

  componentDidMount() {
    this.setState({ showModal: true })
  }

  open() {
    this.setState({ open: true })
  }

  close() {
    this.setState({ open: false })
    this.props.onClose()
  }

  render() {
    const actions = [];
    const number = '?'
    const continent = '?'
    const time = '?'

    return (
      <div>
        <Dialog
          title="Great Job!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          You named all {number} countries of {continent} in {time} time
        </Dialog>
      </div>
    )
  }

}

FinishModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}