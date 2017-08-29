import React from 'react';

export default class App extends React.Component {
  
  // componentDidMount() {

  // }

  render() {
    return (
      <div style={style.title_div}>
        <h1 style={style.title}>geoQuiz</h1>
      </div>
    )
  }

}


const style = {
  title_div: {
    paddingLeft: 100,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
  }

}