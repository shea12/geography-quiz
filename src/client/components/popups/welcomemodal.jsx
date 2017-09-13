import React from 'react'
import Dialog from 'material-ui/Dialog'
import PropTypes from 'prop-types'

export default class WelcomeModal extends React.Component {
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

  close() {
    this.setState({ open: false })
    // this.props.onClose()
  }

  render() {
    const actions = []

    return (
      <div>
        <Dialog
          title="Welcome to geoQuiz!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          Welcome!
        </Dialog>
      </div>
    )
  }
}

WelcomeModal.propTypes = {
  // onClose: PropTypes.func.isRequired,
}
