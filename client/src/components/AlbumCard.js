import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteAlbum} from "../actions/albumAction";


class AlbumCard extends Component {

    constructor (props ) {
        super()
        console.log(props)

        console.log(props.album);
    }

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.album.album_cover} alt="Album Cover"/>
                </div>
                <div className="content">
                    <div className="header">{this.props.album.album_name}</div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/album/create/${this.props.album.album_id}`}
                              className="ui basic button green">Edit</Link>
                        <div className="ui basic button red" onClick={() => this.props.onDeleteAlbum(this.props.album.album_id)}>Delete</div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    albums: state.albums
});

const mapDispatchToProps = dispatch => ({
    onDeleteAlbum: (album_id) => dispatch(deleteAlbum(album_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard)