import React from 'react'
import PropTypes from 'prop-types'
// import {  } from 'react-bootstrap'

const style = {
  scoreDiv: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 0,
    marginLeft: '38%',
  },
}

export default class ScoreKeeper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remain: null,
    }
  }

  componentWillMount() {
    this.setState({
      remain: this.props.remaining,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.remaining !== nextProps.remaining) {
      this.setState({
        remain: nextProps.remaining,
      })
    }
  }

  render() {
    return (
      <div style={style.scoreDiv}>
        <h5>{this.state.remain}</h5>
      </div>
    )
  }
}

ScoreKeeper.propTypes = {
  remaining: PropTypes.number.isRequired,
}
