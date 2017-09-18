import React from 'react'
import PropTypes from 'prop-types'

const style = {
  time: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 0,
    marginLeft: '42%',
  },
}

function convertTime(s) {
  // let sec = seconds
  // const numerator = (sec - (sec %= 60))
  // // LINT: expected literal to be on the right side of <
  // /* eslint-disable */
  // const denominator = 60 + (9 < sec ? ':' : ':0') + sec
  // /* eslint-enable */
  // return numerator / denominator
  return (s-(s%=60))/60+(9<s?':':':0')+s
}

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      time: 0,
      timing: false,
    }
    this.ticktock = this.ticktock.bind(this)
  }

  getInitialState() {
    this.setState({ time: 0 })
  }

  componentWillReceiveProps(nextProps) {
    if ((!this.state.timing) && (nextProps.timing)) {
      this.setState({
        timing: true,
        time: 0,
        start: new Date(),
      })
      this.timer = setInterval(this.ticktock, 1000)
    } else if ((this.state.timing) && (!nextProps.timing)) {
      this.setState({ timing: false })
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    // need to report back the final time
    const seconds = ((Math.round(this.state.time / 100)) / 10).toFixed(0)
    const finalTime = convertTime(seconds)
    this.props.getFinalTime(finalTime)
    clearInterval(this.timer)
  }

  ticktock() {
    this.setState({ time: new Date() - this.state.start })
  }

  render() {
    let timerComponent = null
    const elapsed = Math.round(this.state.time / 100)
    const seconds = (elapsed / 10).toFixed(0)
    timerComponent = (<p>Time: {convertTime(seconds)}</p>)
    return (
      <div style={style.time}>
        {timerComponent}
      </div>
    )
  }
}

Timer.propTypes = {
  timing: PropTypes.bool.isRequired,
  getFinalTime: PropTypes.func.isRequired,
}

module.exports = Timer
