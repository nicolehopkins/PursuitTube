import React, { Component } from 'react';
import './App.css';
import Users from './components/AddUser';
import { Alert } from "reactstrap";



class App extends Component {
  render() {
    return (

      <>
      <h1>Hello World</h1>
      <Users />
      
      </>
    );
  }
}

export default App;
