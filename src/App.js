import React, { Component } from 'react';
import './App.css';
import Users from './components/AddUser';
import { Alert } from "reactstrap";
import Nav from './components/Nav';
import Default from './components/Default';



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
