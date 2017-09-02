import React from 'react'
import { CardPanel, CardTitle } from 'react-materialize'

const style = {
  headerStyle: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    backgroundColor: 'rgba(140, 140, 140, 0.7)'
  },
}

class HeaderCard extends React.Component {
  render() {
    return(
      <CardPanel 
        style={style.headerStyle}
        className='small'>
      </CardPanel>
    )
  }
}

module.exports = HeaderCard
