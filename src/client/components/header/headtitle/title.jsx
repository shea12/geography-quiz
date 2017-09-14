import React from 'react'

const style = {
  title_div: {
    paddingLeft: '96%',
  },
  title: {
    position: 'absolute',
    zIndex: 3,
    paddingTop: 0,
  },
}

function Title() {
  return (
    <div style={style.title_div} >
      <h5 style={style.title} >
        GQ
      </h5>
    </div>
  )
}

module.exports = Title
