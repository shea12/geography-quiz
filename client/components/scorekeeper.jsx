import React from 'react'
import PropTypes from 'prop-types'
// import {  } from 'react-bootstrap'

const style = {
  scoreDiv: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 20,
    marginLeft: 840,
  },
}

class ScoreKeeper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      continent: null,
      remain: null,
    }
  }

  componentWillMount() {
    this.setState({
      continent: this.props.continent,
      remain: this.props.countries.length,
    })
  }

  componentWillReceiveProps(nextProps) {
    const remaining = nextProps.countries.length
    if (this.state.continent === nextProps.continent) {
      // the continent has not changed
      // check for updates to found and remaining
      this.setState({
        remain: remaining,
      })
    } else {
      // the continent has changed, must reset state
      this.setState({
        continent: nextProps.continent,
        remain: remaining,
      })
    }
  }

  render() {
    return (
      <div style={style.scoreDiv}>
        <h4>Remaining: {this.state.remain}</h4>
      </div>
    )
  }
}

ScoreKeeper.propTypes = {
  continent: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
}

module.exports = ScoreKeeper
