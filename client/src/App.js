import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="nav">
                    <div className="nav-section">
                        <div className="nav-item">
                            LOGO
                        </div>
                        <div className="nav-item">
                            Chat
                        </div>
                        <div className="nav-item">
                            Report a Bug
                        </div>
                    </div>
                    <div className="nav-section">
                        <div className="nav-item">
                            <input type="text"/>
                        </div>
                        <div className="nav-item">
                            Sign Up
                        </div>
                        <div className="nav-item">
                            Log In
                        </div>
                    </div>
                </nav>
                <header className="App-header">
                    <h1 className="App-title">
                        <Card name="Books" color="Card-purple"/>
                        <Card name="Video Games" color="Card-orange"/>
                        <Card name="Movies & Shows" color="Card-blue"/>
                        <Card name="Music" color="Card-indigo"/>
                    </h1>
                </header>
                <p className="App-intro">

                </p>
            </div>
        );
    }
}

export default App;
