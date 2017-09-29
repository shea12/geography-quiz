import React from 'react'
import Dialog from 'material-ui/Dialog'
// import PropTypes from 'prop-types'

const style = {
  modalTitle: {
    textAlign: 'center',
  },
  modalInner: {
    height: 360,
    paddingRight: 20,
    paddingLeft: 20,
  },
  emailLine: {
    fontSize: 14,
  },
  byLine: {
    fontSize: 12,
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
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
        >
          <div style={style.modalInner}>
            <h3> 🌏 🌍 🌎 </h3>
            <p>
              <br />
              <b>Test your knowledge of geographic, administrative, and cultural features around the world!</b>
              <br /><br />
              Feel free to explore the map or
              get started with the quiz categories above.
              <br /><br />
              Current categories include countries, capitals, states, territories,
              bodies of water, landmarks, and world leaders.
              Guess the City, a really neat quiz category inspired by&nbsp;
              <a href="https://twitter.com/search?q=%40mapbox%20%23spotted&src=typd" target="_blank" rel="noopener noreferrer">
              @Mapbox #spotted series
              </a>, will be up soon so be sure to check back for it!
              <br /><br />
              Shout out to <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer"> Mapbox </a>
              for providing a tremendous mapping platform!
            </p>
          </div>
          <div>
            <p style={style.byLine}>
              This project was created by Caroline. 
              <br />
              <a href="mailto:shea.caroline92@gmail.com?subject=Geography%20Quiz">
                Send me an email </a> with comments or suggestions; I'd love to hear from you.
              <br />
              <a href="https://github.com/shea12/geography-quiz" target="_blank" rel="noopener noreferrer">
                &nbsp;Check out the repo</a> if you're into that kind of thing.
            </p>
          </div>
        </Dialog>
      </div>
    )
  }
}

// 🌏🌍🌎✏️📄

