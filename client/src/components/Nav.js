import React from 'react'
import NavItem from './NavItems'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'

class Nav extends React.Component {
    render(){
        const navItemsArr = this.props.links.map(link =>
            <NavItem key={link.url}
                     url={link.url}
                     text={link.text}/>)
        return(<nav >
            <h2>{this.props.mytitle}</h2>
            <ul>
                {navItemsArr}
            </ul>
        </nav>)
    }
}

const { string, arrayOf, shape } = PropTypes
// const string = PropTypes.string

Nav.propTypes = {
    mytitle: string.isRequired,
    links: arrayOf(shape({
        url: string.isRequired,
        text:string.isRequired
    })).isRequired
}

export default Nav