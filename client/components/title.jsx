import React from 'react'

const style = {
  title_div: {
    paddingLeft: 100,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
  },
}

function Title() {
  return (
    <div style={style.title_div}>
      <h1 style={style.title}>geoQuiz</h1>
    </div>
  )
}

module.exports = Title
