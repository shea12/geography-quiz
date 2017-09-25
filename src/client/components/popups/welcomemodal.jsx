import React from 'react'
import Dialog from 'material-ui/Dialog'
// import PropTypes from 'prop-types'

const style = {
  modalTitle: {
    textAlign: 'center',
  },
  modalInner: {
    height: '400px',
  },
  byLine: {
    fontSize: '12px',
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
          title="Welcome to the Geography Quiz"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          <div style={style.modalInner}>
            <p>
              <br />
              Test your knowledge on a wide
              array of geographic and administrative features around the world.
              <br /><br />
              All quizzes are timed so you can keep track of your progress.
              Current quizzes include countries, capitals, states, territories, bodies of water and landmarks.
              <br /><br />
              Quizzes coming soon: cities and world leaders
              <br /><br />
              Feel free to explore the map and when you are ready,
              get started with the quiz categories above.
              <br /><br />
              Some categories are not live yet but check back soon,
              I am always creating more quizzes.
              <br /><br />
              Please <u>leave a comment</u> if you have any suggestions; feedback is welcome.
            </p>
          </div>
          <div>
            <p style={style.byLine}>
              This project was created by Caroline. Learn more
              <a href="https://github.com/shea12/geography-quiz" target="_blank" rel="noopener noreferrer"> here
              </a>.
            </p>
          </div>
        </Dialog>
      </div>
    )
  }
}
