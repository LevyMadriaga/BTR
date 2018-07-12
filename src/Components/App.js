import React, { Component } from 'react';
import '../Assets/App.css';
import Navigation from './Navigation.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
      </div>
    );
  }
}

export default App;
