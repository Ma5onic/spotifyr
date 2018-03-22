import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {        
        return (
            <a href='index.js'>
                <h1 className="header">
                    Spotifyr
                </h1>
            </a>
        )
    }
}

export default Header;