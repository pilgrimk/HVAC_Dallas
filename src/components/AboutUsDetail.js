import React, { useEffect } from 'react';
import img_src_value from './images/fast-and-friendly-service.jpg';

const AboutUsDetail = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
      }, [])

      return (
            <div>
                  <h2>About Us</h2>
                  <br></br>
                  <p>HVAC systems are a major investment for your home or business. And while they can last for years, eventually they will need to be repaired or replaced.
                  </p><br></br>
                  <p>That’s where we come in! Our team of experts is here to help you find the best solution for your needs and budget. We offer repair services, replacement services, and more!
                  </p><br></br>
                  <p>Whether it’s time for an annual inspection or you have a specific problem with your system that needs fixing, our technicians are available 24/7 to provide service when you need it most. Let us take care of all your HVAC needs today!
                  </p><br></br>
                  <p>Call us right now and schedule an appointment with one of our qualified professionals today!
                  </p><br></br>
                  <img className='about-us-image' src={img_src_value} alt="fast and friendly service" />
            </div>
      )
}

export default AboutUsDetail;