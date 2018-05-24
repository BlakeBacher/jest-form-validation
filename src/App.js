import React, { Component } from 'react';
import Form from './components/Form';
import Password from './components/Password';
//css
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <hr />
        <Password />
      </div>
    );
  }
}

export default App;
