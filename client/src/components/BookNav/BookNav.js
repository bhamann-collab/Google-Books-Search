import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import './BookNav.css'

const BookNav = () => {
    return (
        <div>
            <Nav className="whitenText">
                <NavLink href="#">Google Books</NavLink>
                <Link to="/">
                    <NavLink href="/">Search</NavLink>
                </Link>
                <Link to="/Saved">
                    <NavLink href="/Saved">Saved</NavLink>
                </Link> 
            </Nav>
            <hr />
        </div>
    )
}

export default BookNav
