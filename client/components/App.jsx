import React from 'react';
import Maps from './map.jsx';
import Title from './title.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Maps />
      </div>
    )
  }

}

const style = {
  container: {
    margin: 0,
    padding: 0
  }

}

