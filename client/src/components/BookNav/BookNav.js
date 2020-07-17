import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

const BookNav = () => {
    return (
        <div>
            <Nav>
                <NavLink href="#">Google Books</NavLink> <NavLink href="#">Search</NavLink> <NavLink href="#">Saved</NavLink>
            </Nav>
            <hr />
        </div>
    )
}

export default BookNav
