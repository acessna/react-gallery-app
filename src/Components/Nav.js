import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav"> 
            <ul>
                    <li><Link to="/Cars">Cars</Link></li>
                    <li><Link to="/Houses">Houses</Link></li>
                    <li><Link to="/Birds">Birds</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;