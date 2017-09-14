import React from 'react'
import Dialog from 'material-ui/Dialog'
import PropTypes from 'prop-types'

export default class WinnerModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }

    this.close = this.close.bind(this)
  }

  // LINT: do not use setState in componentDidMount
  /* eslint-disable */
  componentDidMount() {
    this.setState({ showModal: true })
  }
  /* eslint-enable */

  open() {
    this.setState({ open: true })
  }

  close() {
    this.setState({ open: false })
    this.props.onClose()
  }

  render() {
    const actions = []
    const time = this.props.time
    return (
      <div>
        <Dialog
          title="Great Job!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          You completed {this.props.quizTitle} quiz in {time}
        </Dialog>
      </div>
    )
  }
}

WinnerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  quizTitle: PropTypes.string.isRequired,
  selectedContinent: PropTypes.string.isRequired,
  capital: PropTypes.bool.isRequired,
  states: PropTypes.bool.isRequired,
}
