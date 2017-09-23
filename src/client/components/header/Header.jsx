import React from 'react'
import PropTypes from 'prop-types'

import Title from './headtitle/title'
import HeaderCard from './headtitle/headercard'
import CategoryButton from './buttons/categorybutton'
import Continents from './Continents'
import WaterOptions from './WaterOptions'
import InputScoreTime from './InputScoreTime'
import BackStart from './BackStart'
import BackButton from './buttons/backbutton'

const style = {
  buttonGrouping: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '12%',
  },
}

// LINT: component should be written as a pure function
export default class Header extends React.Component {
  render() {
    let categoryContinentButton = null
    let categoryContinent = null
    let categoryCityButton = null
    let categoryCity = null
    let categoryWaterButton = null
    let categoryWater = null
    let categoryLandformsButton = null
    let categoryLandforms = null
    let categoryLeadersButton = null
    let categoryLeaders = null

    let back = null
    let backstart = null
    let inscoretime = null
    let quiztitle = null

    switch (this.props.selectedCategory) {
      case 'CTN':
        // continents category has been selected, show subcategories
        if (this.props.selectedContinent === '') {
          // hide inscoretime, backstart buttons when no continent is selected
          categoryContinent = <Continents handleQuizChoice={this.props.handleQuizChoice} />
          back = <BackButton handleBack={this.props.handleBack} />
          backstart = <div />
          inscoretime = <div />
        } else if (this.props.selectedContinent !== '') {
          // user selected continent, show start & back buttons, hide continents, inscoretime
          categoryContinent = <div />
          backstart = (
            <BackStart
              handleStart={this.props.handleStart}
              handleBack={this.props.handleBack}
            />
          )
          inscoretime = <div />
          quiztitle = (
            <p style={{ position: 'absolute', zIndex: 2, marginLeft: '20%' }}>
              Can you name all {this.props.placesArray.length} {this.props.quizTitle}?
            </p>
          )
        }
        break
      case 'BOW': 
        // water quizzes selected, show options
        back = <BackButton handleBack={this.props.handleBack} />
        if (this.props.selectedWaterQuiz === '') {
          // user has not selected a water quiz yet, hide ist, backstart
          categoryWater = <WaterOptions handleWaterQuizChoice={this.props.handleWaterQuizChoice} />
          back = <BackButton handleBack={this.props.handleBack} />
          backstart = <div />
          inscoretime = <div />
        } else if (this.props.selectedWaterQuiz !== '') {
          // user selected a water quiz, show start & back buttons, hide other quizzes, ist
          categoryWater = <div />
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
        categoryCity = (
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
        categoryLandforms = (
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
        categoryLeaders = (
          <div style={{ position: 'absolute', zIndex: 2, marginLeft: '30%' }}>
            <p>
              Sorry, world leader quizzes are not ready yet.
              Hit the back button to choose another category.
            </p>
          </div>
        )
        break
      case '':
        // category has NOT been selected, show category buttons
        categoryContinentButton = <CategoryButton title="Countries & Capitals" code="CTN" handleCategorySelection={this.props.handleCategorySelection} />
        categoryCityButton = <CategoryButton title="Guess the City" code="GTC" handleCategorySelection={this.props.handleCategorySelection} />
        categoryWaterButton = <CategoryButton title="Bodies of Water" code="BOW" handleCategorySelection={this.props.handleCategorySelection} />
        categoryLandformsButton = <CategoryButton title="Landforms" code="LDF" handleCategorySelection={this.props.handleCategorySelection} />
        categoryLeadersButton = <CategoryButton title="World Leaders" code="LRS" handleCategorySelection={this.props.handleCategorySelection} />
        break
      default:
        console.log('ruhroh')
    }
    if (this.props.timing) {
      // render timer, score, and input when start is clicked
      inscoretime = (<InputScoreTime
        placesArray={this.props.placesArray}
        waterQuiz = {this.props.waterQuiz}
        capitals = {this.props.capitals}
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
    return (
      <div>
        <Title />
        <HeaderCard />
        <div style={style.buttonGrouping}>
          {categoryContinentButton}
          {categoryCityButton}
          {categoryWaterButton}
          {categoryLandformsButton}
          {categoryLeadersButton}
        </div>
        {back}
        {categoryContinent}
        {categoryCity}
        {categoryWater}
        {categoryLandforms}
        {categoryLeaders}
        {backstart}
        {inscoretime}
        {quiztitle}
      </div>
    )
  }
}

Header.propTypes = {
  placesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedContinent: PropTypes.string.isRequired,
  quizTitle: PropTypes.string,
  capitals: PropTypes.bool.isRequired,
  timing: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  handleCategorySelection: PropTypes.func.isRequired,
  handleQuizChoice: PropTypes.func.isRequired,
  handleWaterQuizChoice: PropTypes.func.isRequired,
  handleNamedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  getFinalTime: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
}
