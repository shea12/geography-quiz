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
let lonlat = [-70, 45];
let zoom = 10;
let locationObject = {
  lonlat: lonlat,
  zoom: zoom
}

export default class Title extends React.Component {
  componentDidMount() {
    console.log('Title mounted');
  }

  render() {
    return (
      <div style={style.title_div}>
        <button style={style.title} onClick={() => this.props.move(locationObject)}>
          geoQuiz
        </button>
      </div>
    )
  }
}

