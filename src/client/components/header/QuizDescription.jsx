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
    marginTop: 8,
  },
}

export default class QuizDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <StartButton style={style.buttons} handleStart={this.props.handleStart} />
        <BackButton style={style.buttons} handleBack={this.props.handleBack} />
      </div>
    )
  }
}


QuizDescription.propTypes = {
  quizTitle: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}