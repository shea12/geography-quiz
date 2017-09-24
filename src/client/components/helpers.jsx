const freeForAll = {
  checkUserInput(value, modifier) {
    for (let p = 0; p < this.state.placesArray.length; p += 1) {
      if (value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
        return p
      }
    }
    return -1
  },

  handleInput(value) {
    const foundIndex = this.checkUserInput(value, this.state.modifier)
    if (foundIndex >= 0) {
      this.handleNamedPlace(this.state.placesArray[foundIndex].abbrv)
      this.state.placesArray.splice(foundIndex, 1)
      this.setState({ placesArray: this.state.placesArray })
      if (this.state.placesArray.length === 0) {
        this.handleTimer(false, true)
        return true
      }
      return true
    } else {
      return false
    }
  }

}

const nameThisPlace = {
  checkUserInput(value) {
    console.log('this: ', this)
    if (value.toLowerCase() === this.state.currentLocation.name) {
      console.log('correct')
      return true
    } else {
      console.log('incorrect')
      return false
    }
  },

  handleInput(value) {
    const identified = this.checkUserInput(value)
    if (identified) {
      // remove currentLocation from placesArray, get next location
      this.handleNamedPlace(currentLocation.abbrv)
      this.state.placesArray.splice(this.state.index, 1)
      this.setState({ placesArray: this.state.placesArray })
      if (this.state.placesArray.length === 0) {
        this.handleTimer(false, true)
        return true
      }
      getRandomPlace()
      return true
    } else {
      console.log('nope, incorrect')
      return false
    }
  },

  getRandomPlace() {
    const randomIndex = function(max) {
      let min = Math.ceil(0)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min 
    }
    const index = randomIndex(this.state.placesRemaining)
    console.log('index: ', index)
    this.setState({
      currentLocation: this.state.placesArray[index],
      currentIndex: index,
      lonlatzoom: this.state.placesArray[index].lonlatzoom,
    })
  }
}

module.exports = {FFA: freeForAll, NTP: nameThisPlace}
