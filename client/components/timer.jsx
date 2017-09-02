import React from 'react'
import PropTypes from 'prop-types'

const style = {
  time: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 8,
    marginLeft: 1210,
  },
}

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      time: null,
    }
    this.ticktock = this.ticktock.bind(this)
  }

  getInitialState() {
    this.setState({ time: 0 })
  }

  componentDidMount() {
    this.timer = setInterval(this.ticktock, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  ticktock() {
    this.setState({ time: new Date() - this.props.start })
  }

  render() {
    const elapsed = Math.round(this.state.time / 100)
    const seconds = (elapsed / 10).toFixed(1)

    return (
      <div style={style.time}>
        <p>Time: {seconds}</p>
      </div>
    )
  }
}

Timer.propTypes = {
  start: PropTypes.Date.isRequired,
}

module.exports = Timer
