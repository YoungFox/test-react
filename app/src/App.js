import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function testJs(obj){
  return obj.name;
}

const obj={
  name: 'ywl'
}

let abs = (
  <h1 className="hello">
    Hello world!
  </h1>
);
class App extends Component {
  render() {
    return (
      <div className="App" data-auther={testJs(obj)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {abs}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to re
        </p>
      </div>
    );
  }
}

export default App;
