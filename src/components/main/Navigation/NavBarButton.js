import React, { Component } from 'react';
import './NavBarButton.css';

class NavBarButton extends Component {
    constructor(props) {
            super(props);

            this.state = {
                
            };

            this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.action) {
            this.props.action();
        }

        if (this.props.onNavToggle) {
            this.props.onNavToggle();
        }
    }

    navIsOpen() {
        return this.state.navIsOpen();
    }

    render() {        
        return (
            <button className="nav-bar-button" onClick={this.handleClick}>
                <img className="nav-bar-button-icon" 
                    src={this.props.src} 
                    alt={this.props.altText}/>
            </button>
        )
    }
}

export default NavBarButton;