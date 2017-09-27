import React from 'react'
import Dialog from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import ShowUnnamedPlacesButton from '../header/buttons/showunnamedplacesbutton'

export default class QuizModal extends React.Component {
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
    this.props.handleBackButton()
  }

  render() {
    const actions = []
    const time = this.props.time
    let title = 'Great Job!'
    let dialogue = `You completed ${this.props.quizTitle} quiz in ${time}`
    let showunnamedplacesbutton = <div />
    if (this.props.gaveUp) {
      title = 'Keep Studying'
      dialogue = `Nice try, you identified ${(this.props.placesNumber - this.props.placesRemaining)} out of ${this.props.placesNumber} places in ${time}`
      showunnamedplacesbutton = <ShowUnnamedPlacesButton handleShowUnnamedPlaces={this.props.handleShowUnnamedPlaces} />
    }
    return (
      <div>
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          {dialogue}
          {showunnamedplacesbutton}
        </Dialog>
      </div>
    )
  }
}

QuizModal.propTypes = {
  handleBackButton: PropTypes.func.isRequired,
  // time: PropTypes.string.isRequired,
  quizTitle: PropTypes.string.isRequired,
  gaveUp: PropTypes.bool.isRequired,
  placesNumber: PropTypes.number.isRequired,
  placesRemaining: PropTypes.number.isRequired,
  handleShowUnnamedPlaces: PropTypes.func.isRequired,
}
