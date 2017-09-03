import React from 'react'

const style = {
  title_div: {
    paddingLeft: 1330,
  },
  title: {
    position: 'absolute',
    zIndex: 2,
    paddingTop: 0,
  },
}

function Title() {
  return (
    <div style={style.title_div} >
      <h5 style={style.title} >
        geoQuiz
      </h5>
    </div>
  )
}

module.exports = Title
