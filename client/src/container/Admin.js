import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import AdminAlbums from "./adminside/AdminAlbums";
import AdminAlbCreateForm from "./adminside/AdminAlbCreateForm";
import AdminTrack from "./adminside/AdminTrack";
import AdminTrackCreatForm from "./adminside/AdminTrackCreatForm";


class Admin extends React.Component {
    render() {
        const path = this.props.match.path

        return (<div>
                <div className="ui two item compact inverted menu">
                    <Link className="active item" to='/admin/albums/'>Albums</Link>
                    <Link className="active item" to='/admin/tracks/'>Tracks</Link>
                </div>

                <Switch>
                    <Route exact path='/admin/' component={AdminAlbums}/>
                    <Route exact path='/admin/albums/' component={AdminAlbums}/>
                    <Route path='/admin/albums/create' component={AdminAlbCreateForm}/>
                    <Route path='/admin/albums/edit' component={AdminAlbCreateForm}/>
                    <Route exact path='/admin/tracks/' component={AdminTrack}/>
                    <Route path='/admin/tracks/create' component={AdminTrackCreatForm}/>
                    <Route path='/admin/tracks/:id' component={AdminTrackCreatForm}/>
                </Switch>
            </div>
        );
    }
}

export default Admin;

