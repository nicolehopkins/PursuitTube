import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeLink from './HomeLink';
import UserLink from './UserLink';
import FeedEditorLink from './FeedEditorLink';
import './Nav.css';
import Search from './Search'

class Nav extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="topnav">
                        <div className='link-container'>
                            <img src="/images/pursuit_logo.jpg" alt="Pursuit Logo" width='42' height='42'></img>
                            <li>Pursuit Tube</li>
                            <ul>
                                <li><Link to={'/'} className="nav-link">Home</Link></li> 
                                {/* removed homelink */}
                                <li><Link to={'/userlink'} className="nav-link">User</Link></li>
                                <li><Link to={'/feedEditorLink'} className="nav-link">FeedEditor</Link></li>
                            </ul>
                        </div>
                    <Search />
                    </div>

                    <Route exact path='/' component={HomeLink} />
                    <Route path='/userlink' component={UserLink} />
                    <Route path='/feedEditorLink' component={FeedEditorLink} />
                </>
            </Router>
        );
    }
}

export default Nav;