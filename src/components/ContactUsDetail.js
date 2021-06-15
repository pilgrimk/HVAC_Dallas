import React from 'react';
import './ContactUsDetail.css';
import img_src_value from './images/company_pic1.jpg';

const ContactUsDetail = (props) => {
    const img_text_value = "company pic"
    
    return (
        <div className='contactUsDetail'>
            <div>
                <h2>Contact Us</h2>
                <br></br>
                <img src={img_src_value} alt={img_text_value} width="400" height="300"></img>
            </div>
            <div>
                <br></br>
            </div>
            <div>
                <p>
                {props.company_name}<br></br>
                {props.city}, {props.state_long} {props.zip}<br></br>
                Phone: {props.phone}<br></br>
                </p>
            </div>
            <div>
            <br></br>
            </div>
            <div>
                <p>
                Business Hours<br></br>
                Mon – Fri: 8 am – 5 pm<br></br>
                Saturday: 9 am – 4 pm<br></br>
                Sunday: 9 am – 1 pm<br></br>
                </p>
            </div>
        </div>
    )
}

export default ContactUsDetail;