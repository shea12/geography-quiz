import React from 'react'
import PropTypes from 'prop-types'

const style = {
  time: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 0,
    marginLeft: 1200,
  },
}

// TODO: format timer to MM:SS
class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      time: null,
      timing: false,
    }
    this.ticktock = this.ticktock.bind(this)
  }

  getInitialState() {
    this.setState({ time: 0 })
  }

  componentDidMount() {
    // this.timer = setInterval(this.ticktock, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  ticktock() {
    this.setState({ time: new Date() - this.state.start })
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
      // need to report back the final time 
      this.setState({ timing: false })
      clearInterval(this.timer)
    }
  }

  render() {
    let timerComponent = null
    const elapsed = Math.round(this.state.time / 100)
    const seconds = (elapsed / 10).toFixed(0)
    timerComponent = (<p>Time: {seconds}</p>)
    return (
      <div style={style.time}>
        {timerComponent}
      </div>
    )
  }
}

Timer.propTypes = {
  timing: PropTypes.bool.isRequired,
}

module.exports = Timer
