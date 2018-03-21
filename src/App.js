import React, { Component } from 'react';
import NavBar from './components/main/Navigation/NavBar';
import NavMenu from './components/main/Navigation/NavMenu';
import ViewPort from './components/main/ViewPort';
import ControlBar from './components/main/ControlBar';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navOpen: false
        };

        this.onNavToggle = this.onNavToggle.bind(this);
    }

    onNavToggle() {
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <NavBar navOpen={this.state.navOpen} onNavToggle={this.onNavToggle} />
                    <NavMenu navOpen={this.state.navOpen}/>
                    <ViewPort />
                    <ControlBar />
                </div>
            </div>
        );
    }
}

export default App;
