import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function NavItem(props) {
    return <li><Link to={props.url}>{props.text}</Link></li>
}
NavItem.propTypes = {
    url:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NavItem