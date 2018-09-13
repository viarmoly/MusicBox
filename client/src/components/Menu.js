import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Albums</Link>
                <Link to="/album/:id">Album Track</Link>
                <Link to="/likedtraks">Liked Track</Link>
                <Link to="/admin">Admin</Link>
            </div>
        );
    }
}

export default Menu;