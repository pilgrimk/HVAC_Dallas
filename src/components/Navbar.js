import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };  

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);    

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {props.company_name}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>{props.phone}</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>{props.phone}</Button>}
            </nav>
        </>
    )
};

export default Navbar;

