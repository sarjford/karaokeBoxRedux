import React, {Component} from 'react';
import {render} from 'react-dom';
import Landing from './Landing';
import Signup from './Signup';
import mainGame from './mainGame';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
const ReactDOM = require('react-dom');

export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isAuthenticated: false,
    userName: '',
    passw: ''
  };
}
  render() {
    return (
      <div id='App'>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/signup" component={Signup} />
    <Route path="/game" component = {mainGame} />
  </Router>
), document.getElementById('main-container'));
