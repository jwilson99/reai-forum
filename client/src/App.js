import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import SidebarItem from './components/SidebarItem';
import Books from './components/data/Books';
import MoviesandShows from './components/data/MoviesandShows';
import Music from './components/data/Music';
import Videogames from './components/data/Videogames';

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

                            <i className="material-icons md-18 search-icon">search</i>
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
                            link="/books"
                            discussions="128"
                            subheader="the latest post..."
                            color="Card-purple"/>
                        <Card
                            name="Video Games"
                            link="/videogames"
                            discussions="128"
                            subheader="the latest post..."
                            color="Card-orange"/>
                        <Card
                            name="Movies & Shows"
                            link="/moviesandshows"
                            discussions="128"
                            subheader="the latest post..."
                            color="Card-blue"/>
                        <Card
                            name="Music"
                            link="/music"
                            discussions="128"
                            subheader="the latest post..."
                            color="Card-indigo"/>
                    </h1>
                </header>

                <div className="App-body">
                    <div className="sidebar">
                        <Button name="Start a Discussion" color="Button-green Button-large"/>
                        <SidebarItem name="All Discussions" icon="forum"/>
                        <SidebarItem name="Following" icon="star"/>
                        <SidebarItem name="Members"/>
                        <SidebarItem name="General Discussions"/>
                    </div>
                    <div className="forums">
                        <div className="button-row">
                            <Button name="Recent" color="Button-grey" icon="swap_vert"/>
                            <div className="button-right">
                                <Button name="" color="Button-grey" icon="loop"/>
                                <Button name="" color="Button-grey" icon="check"/>
                            </div>
                        </div>


                        <Switch>
                            <Route exact path="/books" component={Books}/>
                            <Route exact path="/moviesandshows" component={MoviesandShows}/>
                            <Route exact path="/music" component={Music}/>
                            <Route exact path="/videogames" component={Videogames}/>
                        </Switch>

                    </div>
                </div>

            </div>
        )
            ;
    }
}

export default App;
