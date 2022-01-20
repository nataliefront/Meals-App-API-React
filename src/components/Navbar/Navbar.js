import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar'>
            <div className='navbar-heading'>
                <h1>Meals <span>App</span></h1>
            </div>
            <div className='menu_icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className='navbar-link'>
                    <Link to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='navbar-link'>
                    <Link to="/search" onClick={closeMobileMenu}>Search</Link>
                    </li>
                    <li className='navbar-link'>
                    <Link to='/random' onClick={closeMobileMenu}>Random</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
