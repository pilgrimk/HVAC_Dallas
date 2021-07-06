import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    }; 

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    {props.company_name}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>                      
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={extendElement}
                    >
                        <Link to='/services' className='nav-links' >
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                            {props.phone}
                        </Link>
                    </li>                  
                </ul>
                <Button phone={props.phone} />
            </nav>
        </>
    )
};

export default Navbar;

