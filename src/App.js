import React, { Component } from 'react';
import Nav from './components/Nav';

import Default from './components/Default';
import './App.css';
import HomeCard from './components/HomeCard';

class App extends Component {
  
  render() {

    return ( 
      <>
        <div>     
          <Nav />
        </div>
        <div>
          <Default />
        </div>
      </>
    );
  }
}


export default App;
