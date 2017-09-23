import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  button: {
    position: 'absolute',
    padding: 0,
    marginLeft: '40%',
    marginTop: 8,
    display: 'inline-block',
    zIndex: 2,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  innerbutton: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
}

export default class WaterOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick(quizName) {
    this.props.handleWaterQuizChoice(quizName)
    this.setVisibilityOfButtons(false)
  }

  setVisibilityOfButtons(visibility) {
    this.setState({ visible: visibility })
  }

  render() {
    return (
      <div style={style.button}>
        <RaisedButton
          style={style.innerbutton}
          onClick={() => this.onButtonClick('MBW')}
        >
          Major Bodies of Water
        </RaisedButton>
     </div>
    )
  }
}

WaterOptions.propTypes = {
  handleWaterQuizChoice: PropTypes.func.isRequired,
}
