import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App'

/* eslint-disable */
console.log('Hey geography nerds!')
/* eslint-enable */
ReactDOM.render(<App />, document.getElementById('root'))


// render((
//   <Router history={browserHistory}> 
//     <Route path="/" component={App}></Route>
//   </Router>
// ), document.getElementById('app'));