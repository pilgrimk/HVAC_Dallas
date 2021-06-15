import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return(
        <div className="footer">
            <span>&copy; {props.company_name}. All rights reserved.</span>
        </div>
      )
}

export default Footer;