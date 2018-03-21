import React, { Component } from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar-container">
                <NavBarButton src="/assets/icons/hamburger-white.svg" onNavToggle={this.props.onNavToggle}/>
            </nav>
        );
    }
}

export default NavBar;