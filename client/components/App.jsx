import React from 'react'
import Maps from './map'
import Title from './title'

const style = {
  container: {
    margin: 0,
    padding: 0,
  },
}

function App() {
  return (
    <div style={style.container}>
      <Title />
      <Maps />
    </div>
  )
}

module.exports = App
