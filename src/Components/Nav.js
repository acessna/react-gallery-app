import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav"> 
            <ul>
                    <Link to="/cars"><li>Cars</li></Link>
                    <Link to="/houses"><li>Houses</li></Link>
                    <Link to="/birds"><li>Birds</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;