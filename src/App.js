import React, { Component } from 'react';
import './App.css';
import Users from './components/AddUser';
import { Alert } from "reactstrap";
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Default from './components/Default';
import VideoPlayer from './components/videoPlayer'



class App extends Component {

  render() {
    return (
    <>
      <Nav />
        <HashRouter>
            <>
            <Switch>
              {/* <Route exact path='/' component={HomeLink} />
              <Route path='/userlink' component={UserLink} />
              <Route path='/feedEditorLink' component={FeedEditorLink} />
              <Route path='/Search/:query' exact component={SearchResults} /> */}
              <Route path='/video/:id' exact component={VideoPlayer} />
              <div>
                <Default />
              </div>
            </Switch>
        </>
        </HashRouter>
      </>
    );
  }
}

export default App;
