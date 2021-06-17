import React, { useEffect } from 'react';
import HomeDetail from '../HomeDetail';
import ContactUsDetail from '../ContactUsDetail';
import '../../App.css';

const Home = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
  }, [])
      
    return (
        <div className="my-content-container">
            <HomeDetail 
                company_name={props.company_name}
                phone={props.phone}/>
            <ContactUsDetail 
                company_name={props.company_name}
                city={props.city}
                state_long={props.state_long}
                zip={props.zip}
                phone={props.phone} />
        </div>
    )
}

export default Home;