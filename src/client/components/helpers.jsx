
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
  }
  return false
}

export function NTPcheckUserInput(value) {
  if (this.state.selection === 'LR') {
    const fullName = this.state.placesArray[0].name.toLowerCase()
    const lastName = fullName.split(' ')[fullName.split(' ').length-1]
    if (value.toLowerCase() === fullName || value.toLowerCase() === lastName) {
      return true
    }
    return false
  }
  if (value.toLowerCase() === this.state.placesArray[0].name.toLowerCase()) {
    return true
  }
  return false
}

export function NTPskipCurrentPlace() {
  const current = this.state.placesArray.splice(0, 1)
  this.state.placesArray.push(current[0])
  this.setState({
    placesArray: this.state.placesArray,
    lonlatzoom: this.state.placesArray[0].lonlatzoom,
  })
}

export function NTPhandleInput(value) {
  const identified = NTPcheckUserInput.call(this, value)
  if (identified) {
    // remove first place from placesArray, get next location
    this.handleNamedPlace(this.state.placesArray[0].abbrv, this.state.placesArray[0].name)
    this.state.placesArray.splice(0, 1)
    if (this.state.placesArray.length === 0) {
      this.handleTimer(false, true)
      return true
    }
    this.setState({
      placesArray: this.state.placesArray,
      lonlatzoom: this.state.placesArray[0].lonlatzoom,
    })
    return true
  }
  return false
}
