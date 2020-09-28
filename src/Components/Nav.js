import React from 'react';
import { Router, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <Router>
                <Link><li>Cats</li></Link>
                <Link><li>Dogs</li></Link>
                <Link><li>Birds</li></Link>
            </Router>
        </ul>
    );
}

export default Nav;