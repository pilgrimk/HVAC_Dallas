import React from 'react';
import AboutUsDetail from '../AboutUsDetail';
import ContactUsDetail from '../ContactUsDetail';
import '../../App.css';

const About = (props) => {
    return(
        <div className="my-content-container">
            <AboutUsDetail />
            <ContactUsDetail 
                company_name={props.company_name}
                city={props.city}
                state_long={props.state_long}
                zip={props.zip}
                phone={props.phone} />
        </div>
      )
}

export default About;