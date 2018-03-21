import React, { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {
    render() {
        var className = 'nav-menu';

        if (this.props.navOpen) {
            className += ' open';
        }

        return (
            <div className={className}>

            </div>
        )
    }
}

export default NavMenu;