import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
            super(props);
    }

    render() {        
        return (
            <a href='#'>
                <h1 className="header">
                    Spotifyr
                </h1>
            </a>
        )
    }
}

export default Header;