import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeLink from './HomeLink';
import UserLink from './UserLink';
import FeedEditorLink from './FeedEditorLink';

class Nav extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> HomeLink </Link></li>
            <li><Link to={'/userlink'} className="nav-link">UserLink</Link></li>
            <li><Link to={'/feedEditorLink'} className="nav-link">FeedEditorLink</Link></li>
          </ul>
          </nav>
          <hr />
          <>
              <Route exact path='/' component={HomeLink} />
              <Route path='/userlink' component={UserLink} />
              <Route path='/feedEditorLink' component={FeedEditorLink} />
          </>
        </div>
      </Router>
    );
  }
}

export default Nav;