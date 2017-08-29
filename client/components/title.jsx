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

export default class Title extends React.Component {
  componentDidMount() {
    console.log('Title mounted');
  }

  render() {
    return (
      <div style={style.title_div}>
        <button style={style.title} onClick={() => this.props.move({lonlat: [0,0], zoom: 8})}>
          geoQuiz
        </button>
      </div>
    )
  }
}

