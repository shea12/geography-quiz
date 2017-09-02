import React from 'react'

const style = {
  title_div: {
    paddingLeft: 1260,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
  },
}

export default class Title extends React.Component {
  componentDidMount() {
    // console.log('Title mounted')
  }

  render() {
    return (
      <div style={style.title_div} >
        <h3 style={style.title} >
          geoQuiz
        </h3>
      </div>
    )
  }
}

