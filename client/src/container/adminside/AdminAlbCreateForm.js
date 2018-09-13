import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {addAlbum, loadAlbums} from '../../actions/albumAction';
import classnames from 'classnames';
import './AdminAlbums.css'



class AdminAlbumsForm extends Component {

    state = {
        album_name: '',
        album_cover: '',
        errors: {},
        loading: false
    }

    constructor(props) {
        super(props);
        var id = props.location.hash.substring(1);
        console.log(props);
        console.log(id);

    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]:e.target.value,
            });
        } else {
            this.setState({[e.target.name]: e.target.value});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //validation
        let errors = {};
        if (this.state.album_name === '') errors.album_name = "Can't be empty"
        if (this.state.album_cover === '') errors.album_cover = "Can't be empty"
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0

        // if (isValid) {
        //     const {album_name, album_cover} = this.state;
        //     this.setState({loading: true})
        //     this.props.saveAlbum({album_name, album_cover}).then(
        //         () => {},
        //         (err) => err.response.json().then(({errors})=> this.setState({errors, loading: false}))
        //     );
        // }
    }

    render() {
        const form = (
            <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
                <h2>Create a new album</h2>
                {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
                <div className={classnames('field', {error: !!this.state.errors.album_name})}>
                    <label htmlFor="album_name">Album title</label>
                    <input
                        type="text"
                        id="album_name"
                        name="album_name"
                        value={this.state.album_name}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.album_name}</span>
                </div>
                <div className={classnames('field', {error: !!this.state.errors.album_cover})}>
                    <label htmlFor="album_cover">Cover URL</label>
                    <input
                        type="text"
                        id="album_cover"
                        name="album_cover"
                        value={this.state.album_cover}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.album_cover}</span>
                </div>
                <div className="field">
                    {this.state.album_cover !== '' && <img src={this.state.album_cover} alt="cover" className="ui small bordered image"/>}
                </div>
                <div className="field">
                    <button className="ui primary button" onClick={() => this.props.onNewAlbum(this.state.album_name, this.state.album_cover)}>Save</button>
                </div>
            </form>
        );
        return (
            <div>
                {this.state.done ? <Redirect to="/admin"/> : form}
            </div>
        );
    }
}
const mapStateProps = state => ({
    albums: state.albums
})
const mapDispatchToProps = dispatch => ({
    onNewAlbum: (album_name, album_cover) => dispatch(addAlbum(album_name, album_cover))
});

export default connect(mapStateProps, mapDispatchToProps)(AdminAlbumsForm)