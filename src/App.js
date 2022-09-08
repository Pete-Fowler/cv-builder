import React, { Component } from 'react';
import Header from './components/Header';
import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <General />
          <Practical />
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
