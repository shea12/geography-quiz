import React from 'react'
import { Card, CardHeader } from 'material-ui/Card'

const style = {
  headerStyle: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    backgroundColor: 'rgba(140, 140, 140, 0.5)',
  },
}

function HeaderCard() {
  return (
    <Card>
      <CardHeader
        style={style.headerStyle}
        className="small"
      />
    </Card>
  )
}

module.exports = HeaderCard
