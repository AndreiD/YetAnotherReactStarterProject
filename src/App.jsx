import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import FirstComponent from './components/first-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FirstComponent title="Yet Another React Starter Project" />;
  }
}

export default hot(module)(App);
