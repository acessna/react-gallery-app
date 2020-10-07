import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav"> 
            <ul>
                    <li><Link to="/cars">Cars</Link></li>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/birds">Birds</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;