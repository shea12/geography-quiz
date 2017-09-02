import React from 'react'
import { CardPanel } from 'react-materialize'

const style = {
  headerStyle: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    backgroundColor: 'rgba(140, 140, 140, 0.7)',
  },
}

function HeaderCard() {
  return (
    <CardPanel
      style={style.headerStyle}
      className="small"
    />
  )
}

module.exports = HeaderCard
