import React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
/* eslint-disable */
import Title from './headtitle/title.jsx'
import HeaderCard from './headtitle/headercard.jsx'
import CategoryButton from './buttons/categorybutton.jsx'

import Continents from './continents.jsx'
import InputScoreTime from './InputScoreTime.jsx'
import BackStart from './BackStart.jsx'
import BackButton from './buttons/backbutton.jsx'
/* eslint-enable */

const style = {
  buttonGrouping: {
    position: 'absolute',
    zIndex: 2,
    display: 'inline-block',
    marginLeft: '24.5%',
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

    if (this.props.selectedCategory === 'CTN') {
      // continents category has been selected, show subcategories
      if (this.props.selectedContinent !== '') {
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
      } else if (this.props.selectedContinent === '') {
        // hide inscoretime, backstart buttons when no continent is selected
        categoryContinent = <Continents handleLocation={this.props.handleLocation} />
        back = <BackButton handleBack={this.props.handleBack} />
        backstart = <div />
        inscoretime = <div />
      }

      if (this.props.timing) {
        // render timer, score, and input when start is clicked
        inscoretime = (<InputScoreTime
          placesArray={this.props.placesArray}
          continent={this.props.selectedContinent}
          timing={this.props.timing}
          capitals={this.props.capitals}
          handleBack={this.props.handleBack}
          handleNamedPlace={this.props.handleNamedPlace}
          handleTimer={this.props.handleTimer}
          getFinalTime={this.props.getFinalTime}
          handleGiveUp={this.props.handleGiveUp}
          quizTitle={this.props.quizTitle}
        />)
        backstart = <div />
        quiztitle = <div />
      } else {
        // need to make a stop button
      }
    } else if (this.props.selectedCategory === 'GTC') {
      // Guess the City feature is not ready yet
      back = <BackButton handleBack={this.props.handleBack} />
      categoryCity = (
        <div style={{ position: 'absolute', zIndex: 2, marginLeft: '24%'}}>
          <p>
            Sorry, this feature isn't quite ready yet.
            It was inspired by @Mapbox users #spotted tweets, so in the meantime check those out!
          </p>
        </div>
      )
    } else if (this.props.selectedCategory === 'BOW') {
      // Bodies of water are not ready yet, need to create map layers
      back = <BackButton handleBack={this.props.handleBack} />
      categoryWater = (
        <div style={{ position: 'absolute', zIndex: 2, marginLeft: '26%'}}>
          <p>
            Sorry, quizzes about bodies of water are not ready yet.
            Hit the back button to choose another category.
          </p>
        </div>
      )
    } else if (this.props.selectedCategory === 'LDF') {
      // landforms are not ready yet, need to create map layers
      back = <BackButton handleBack={this.props.handleBack} />
      categoryWater = (
        <div style={{ position: 'absolute', zIndex: 2, marginLeft: '30%'}}>
          <p>
            Sorry, landform quizzes are not ready yet.
            Hit the back button to choose another category.
          </p>
        </div>
      )
    } else if (this.props.selectedCategory === 'LRS') {
      // landforms are not ready yet, need to create map layers
      back = <BackButton handleBack={this.props.handleBack} />
      categoryLeaders = (
        <div style={{ position: 'absolute', zIndex: 2, marginLeft: '30%'}}>
          <p>
            Sorry, world leader quizzes are not ready yet.
            Hit the back button to choose another category.
          </p>
        </div>
      )
    } else if (this.props.selectedCategory === '') {
      // category has NOT been selected, show category buttons
      categoryContinentButton = <CategoryButton title='Continents' code='CTN' handleCategorySelection={this.props.handleCategorySelection}/>
      categoryCityButton = <CategoryButton title='Guess the City' code='GTC' handleCategorySelection={this.props.handleCategorySelection} />
      categoryWaterButton = <CategoryButton title='Bodies of Water' code='BOW' handleCategorySelection={this.props.handleCategorySelection}/>
      categoryLandformsButton = <CategoryButton title='Landforms' code='LDF' handleCategorySelection={this.props.handleCategorySelection} />
      categoryLeadersButton = <CategoryButton title='Leaders' code='LRS' handleCategorySelection={this.props.handleCategorySelection} />
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
  handleLocation: PropTypes.func.isRequired,
  handleNamedPlace: PropTypes.func.isRequired,
  handleTimer: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  getFinalTime: PropTypes.func.isRequired,
  handleGiveUp: PropTypes.func.isRequired,
}
