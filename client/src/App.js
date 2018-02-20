import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import SidebarItem from './components/SidebarItem';
import ForumItem from './components/ForumItem';

class App extends Component {
    render() {
        return (
            <div className="App">

                <nav className="nav">
                    <div className="nav-section">
                        <div className="nav-item">
                            LOGO PLACEHOLDER
                        </div>
                        <div className="nav-item">
                            Chat
                        </div>
                        <div className="nav-item">
                            Report a Bug
                        </div>
                    </div>
                    <div className="nav-section">
                        <div className="nav-item search">
                            <input
                                type="text"
                                placeholder="Search Forum"
                                className="search-bar"/>
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
                        <Card
                            name="Books"
                            discussions="128"
                            color="Card-purple"/>
                        <Card
                            name="Video Games"
                            discussions="128"
                            color="Card-orange"/>
                        <Card
                            name="Movies & Shows"
                            discussions="128"
                            color="Card-blue"/>
                        <Card
                            name="Music"
                            discussions="128"
                            color="Card-indigo"/>
                    </h1>
                </header>

                <div className="App-body">
                    <div className="sidebar">
                        <Button name="Start a Discussion" color="Button-green Button-large"/>
                        <SidebarItem name="All Discussions"/>
                        <SidebarItem name="Following"/>
                        <SidebarItem name="Members"/>
                        <SidebarItem name="General Discussions"/>
                    </div>
                    <div className="forums">
                        <Button name="Recent" color="Button-grey"/>
                        <ForumItem name="Test 1 for some Title"/>
                        <ForumItem name="Test 2 for some Title"/>
                        <ForumItem name="Test 3 for some Title"/>
                        <ForumItem name="Test 4 for some Title"/>
                        <ForumItem name="Test 5 for some Title"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
