import React from 'react'
import PropTypes from 'prop-types'

import CategoryButton from './buttons/categorybutton'
import BackButton from './buttons/backbutton'

const style = {
  buttonGrouping: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '12%',
  },
}

function CreateOptionsButtons(props) {
  // console.log('props: ', props)
  const categories = props.options
  const items = []
  let i = 0
  Object.keys(categories).forEach(function(item) {
    items.push(<CategoryButton key={i} title={categories[item].title} code={item} handler={props.handler} />)
    i += 1
  })
  return (
    <div style={style.buttonGrouping}>
      {items}
    </div>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('receiving props in header')
  }

  render() {
    return (
      <div>
        <CreateOptionsButtons 
          options={this.props.options}
          handler={this.props.handler}
        />
        <BackButton handleBack={this.props.handleBack} />
      </div>
    )
  }
}

Header.propTypes = {
  options: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

/*

{back}
{backstart}
{inscoretime}
{quiztitle}

if (this.props.timing) {
  // render timer, score, and input when start is clicked
  inscoretime = (<InputScoreTime
    placesArray={this.props.placesArray}

    timing={this.props.timing}
    handleBack={this.props.handleBack}
    handleNamedPlace={this.props.handleNamedPlace}
    handleTimer={this.props.handleTimer}
    getFinalTime={this.props.getFinalTime}
    handleGiveUp={this.props.handleGiveUp}
    quizTitle={this.props.quizTitle}
  />)
  backstart = <div />
  quiztitle = <div />
}



switch (this.props.selectedCategory) {
  case 'CTN':
    // user selected CTN
    break
  case 'BOW': 
    // water quizzes selected, show options
    back = <BackButton handleBack={this.props.handleBack} />
    if (this.props.selectedWaterQuiz === '') {
      // user has not selected a water quiz yet, hide ist, backstart
      categoryBOW = <WaterOptions handleWaterQuizChoice={this.props.handleWaterQuizChoice} />
      back = <BackButton handleBack={this.props.handleBack} />
      backstart = <div />
      inscoretime = <div />
    } else if (this.props.selectedWaterQuiz !== '') {
      // user selected a water quiz, show start & back buttons, hide other quizzes, ist
      categoryBOW = <div />
      backstart = (
        <BackStart
          handleStart={this.props.handleStart}
          handleBack={this.props.handleBack}
        />
      )
      inscoretime = <div />
      quiztitle = (
        <p style={{ position: 'absolute', zIndex: 2, marginLeft: '20%' }}>
          Can you name all {this.props.placesArray.length} bodies of water?
        </p>
      )
    }
    break
  case 'GTC':
    back = <BackButton handleBack={this.props.handleBack} />
    categoryGTC = (
      <div style={{ position: 'absolute', zIndex: 2, marginLeft: '24%' }}>
        <p>
          Sorry, this feature is not quite ready yet.
          It was inspired by @Mapbox users #spotted tweets, so in the meantime check those out!
        </p>
      </div>
    )
    break
  case 'LDF':
    back = <BackButton handleBack={this.props.handleBack} />
    categoryLDF = (
      <div style={{ position: 'absolute', zIndex: 2, marginLeft: '30%' }}>
        <p>
          Sorry, landform quizzes are not ready yet.
          Hit the back button to choose another category.
        </p>
      </div>
    )
    break
  case 'LRS':
    back = <BackButton handleBack={this.props.handleBack} />
    categoryLRS = (
      <div style={{ position: 'absolute', zIndex: 2, marginLeft: '30%' }}>
        <p>
          Sorry, world leader quizzes are not ready yet.
          Hit the back button to choose another category.
        </p>
      </div>
    )
    break
  case '':
  default:
    console.log('ruhroh')
}
*/