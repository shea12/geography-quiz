import React from 'react'
import PropTypes from 'prop-types'

import StartButton from './buttons/startbutton'
import BackButton from './buttons/backbutton'

const style = {
  buttons: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '2%',
    marginTop: 6,
  },
  desc: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '20%',
  },
  descFont: {
    fontSize: 16,
  },
}

export default class QuizDescription extends React.Component {
  render() {
    return (
      <div>
        <StartButton style={style.buttons} handleStart={this.props.handleStart} />
        <BackButton style={style.buttons} handleBackButton={this.props.handleBackButton} />
        <div style={style.desc}>
          <p style={style.descFont}>{this.props.quizDescription}</p>
        </div>
      </div>
    )
  }
}

QuizDescription.propTypes = {
  // quizTitle: PropTypes.string.isRequired,
  quizDescription: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleBackButton: PropTypes.func.isRequired,
}
