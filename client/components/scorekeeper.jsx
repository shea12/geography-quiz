import React from 'react'
import {  } from 'react-bootstrap'

const style = {
  scoreDiv: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 200,
  }

}

export default class ScoreKeeper extends React.Component {
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
      remain: this.props.continent.length
    })  
  }

  componentWillReceiveProps(nextProps) {
    let remain = nextProps.countries.length
    if (this.state.continent === nextProps.continent) {
      // the continent has not changed
      // check for updates to found and remaining
      this.setState({
        remain: remain
      })
    } else {
      // the continent has changed, must reset state
      this.setState({
        continent: nextProps.continent,
        remain: remain
      })
    }
  }

  render() {
    return (
      <div style={style.scoreDiv}>
        <h2>Score</h2>
        <h4>Remaining: {this.state.remain}</h4>
      </div>
    )
  }
}
