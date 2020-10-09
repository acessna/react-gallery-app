import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav"> 
            <ul>
                    <li><NavLink to="/Cars">Cars</NavLink></li>
                    <li><NavLink to="/Houses">Houses</NavLink></li>
                    <li><NavLink to="/Birds">Birds</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;