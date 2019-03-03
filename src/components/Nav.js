import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
// import './Nav.css';
import Search from './Search'

class Nav extends Component {
    render() {
        return (
            

                <>


                    <div className="topnav">
                        <div className='link-container'>
                            <img src="/images/pursuit_logo.jpg" className= "nav-img" alt="Pursuit Logo" width='42' height='42'></img>
                            <p>Pursuit Tube</p>
                            <div>
                                <NavLink to={'/'} className="nav-link"> Home </NavLink>
                                <NavLink to={'/userlink'} className="nav-link">User</NavLink>
                                <NavLink to={'/feedEditorLink'} className="nav-link">FeedEditor</NavLink>
                            </div>
                        </div>
                    <Search />
                    </div>
                </>
        );
    }
}

export default Nav;