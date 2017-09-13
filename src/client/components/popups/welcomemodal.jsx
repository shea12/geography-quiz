import React from 'react'
import Dialog from 'material-ui/Dialog'
import PropTypes from 'prop-types'

const style = {
  modalTitle: {
    textAlign: 'center',
  },
  modal: {
    height: '400px',
  },

}

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
  }

  render() {
    const actions = []

    return (
      <div>
        <Dialog
          style={style.modalTitle}
          title="GeoQuiz"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          <div style={style.modal}> 
            <p>
              Hello and welcome to GeoQuiz! Use the buttons above to choose a quiz.
            </p>
          </div>
        </Dialog>
      </div>
    )
  }
}

WelcomeModal.propTypes = {}
