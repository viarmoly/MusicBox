import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addAlbum, deleteAlbum, editAlbum} from "../../actions/albumAction";
import {ALBUMS_ADD, ALBUMS_DELETE} from "../../actions/types";
import {Link, Redirect} from "react-router-dom";
import AlbumCard from "../../components/AlbumCard";



class AdminAlbums extends Component {
    handleClick = () => {
        this.props.history.push("/admin/albums/create");
    }
    editClick = (e) => {
        //this.props.history.push("/admin/albums/create");

        var id = e.target.dataset.id;
        console.log(id);
        this.props.history.push(`/admin/album/edit/${id}`);
    }
    render() {

        return (
            <div>
                <h2>Admin Albums</h2>
                <button className="ui primary button" onClick={this.handleClick}>Add Album</button>
                <p></p>
                <div className="ui four cards">
                    { this.props.albums.map(album => <AlbumCard album={album} key={album.album_id}  />) }
                </div>
                <ul>
                    {this.props.albums.map((album, index) =>
                        <li key={index}>{album.album_name}
                            <button onClick={() => this.props.onDeleteAlbum(album.album_id)}>x</button>
                            <Link to={`/admin/albums/edit#${album.album_id}`}>edit</Link>
                        </li>)}
                </ul>
            </div>
        );
    }
}


export default connect(
    state => ({
        albums: state.albums
    }),
    dispatch => ({
        onAddAlbum: (album_name) => {
            dispatch({type: ALBUMS_ADD, payload: album_name});
        },
        onDeleteAlbum: (album_id) => dispatch(deleteAlbum(album_id)),
        onEditAlbum: (album_id) => dispatch(editAlbum(album_id))

    }))(AdminAlbums);


