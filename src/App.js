import React, { Component } from 'react';
import './App.css';
import Users from './components/AddUser';
import { Alert } from "reactstrap";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import './components/Nav.css';
import Default from './components/Default';
import HomeCard from './components/HomeCard';
import HomeLink from './components/HomeLink';
import UserLink from './components/UserLink';
import FeedEditorLink from './components/FeedEditorLink';
import SearchResults from './components/SearchResults';
// import Error from './components/Error';



class App extends Component {
  
  render() {
    return ( 
  
      <BrowserRouter>
      <Switch>
          <> 
         
        <Nav />
        {/* <>  */}
      
      <Route exact path='/' component={HomeLink} />
      <Route path='/userlink' component={UserLink} />
      <Route path='/feedEditorLink' component={FeedEditorLink} />
      <Route path='/Search/:query' exact component={SearchResults} />
   
     
        {/* <div>
          <Default />
        </div>
       </> */}
      
        </>
        </Switch>
        </BrowserRouter>
      
      
    );
  }
}

export default App;
