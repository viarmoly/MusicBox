import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navigation from'./components/Nav'
import{Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Albums from "./container/Albums";
import Tracks from "./container/Tracks";
import LikedTracks from "./container/LikedTracks";
import Admin from "./container/Admin";
import {loadAlbums} from "./actions/albumAction";
import logo from './logo.png';
import Menu from "./components/Menu";
import AdminTrack from "./container/adminside/AdminTrack";


class App extends Component {

    componentDidMount() {
        if (this.props.albums.length === 0) {
            this.props.loadData();
        }
    }
    render() {


        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} alt="logo" className="App-logo"/>
                        <h2>MUSIC CLOUD</h2>
                    </div>
                </div>


            <div className="ui container">
                <div className="ui three item massive menu">
                    <Link className="item" to="/album/:id">Album Track</Link>
                    <Link className="item" to="/likedtraks">Liked Track</Link>
                    <Link className="item" to="/admin">Admin</Link>
                </div>
                <Route exact path='/' component={Albums}/>
                <Route path='/album/:id' component={AdminTrack}/>
                <Route path='/likedtraks' component={LikedTracks}/>
                <Route path='/admin' component={Admin}/>
            </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    albums: state.albums
});
const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(loadAlbums())
});
export default connect(mapStateToProps, mapDispatchToProps)(App)

