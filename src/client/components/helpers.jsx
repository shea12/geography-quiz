
export function FFAcheckUserInput(value, modifier) {
  for (let p = 0; p < this.state.placesArray.length; p += 1) {
    if (value.toLowerCase() === this.state.placesArray[p][modifier].toLowerCase()) {
      return p
    }
  }
  return -1
}

export function FFAhandleInput(value) {
  const foundIndex = FFAcheckUserInput.call(this, value, this.state.modifier)
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

export function NTPcheckUserInput(value) {
  if (this.state.selection === 'LR') {
    let fullName = this.state.currentLocation.toLowerCase()
    let lastName = fullName.split(' ')[fullName.split(' ').length-1]
    if (value.toLowerCase() === fullName || value.toLowerCase() === lastName) {
      return true
    } else {
      return false
    }
  }

  if (value.toLowerCase() === this.state.currentLocation.toLowerCase()) {
    return true
  } else {
    return false
  }
}

export function NTPgetRandomPlace() {
  const randomIndex = function(max) {
    let min = Math.ceil(0)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min 
  }
  const index = randomIndex(this.state.placesArray.length)
  this.setState({
    currentLocation: this.state.placesArray[index].name,
    currentIndex: index,
    lonlatzoom: this.state.placesArray[index].lonlatzoom,
  })
}

export function NTPhandleInput(value) {
  const identified = NTPcheckUserInput.call(this, value)
  if (identified) {
    // remove currentLocation from placesArray, get next location
    this.handleNamedPlace(this.state.placesArray[this.state.currentIndex].abbrv)
    this.state.placesArray.splice(this.state.currentIndex, 1)
    this.setState({ placesArray: this.state.placesArray })
    if (this.state.placesArray.length === 0) {
      this.handleTimer(false, true)
      return true
    }
    NTPgetRandomPlace.call(this)
    return true
  } else {
    return false
  }
}
