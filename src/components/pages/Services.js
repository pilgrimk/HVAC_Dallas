import React from 'react';
import '../../App.css';

function Services() {
    const src_url_value = "https://www.youtube.com/embed/vJjaRTPiksA"

    return (
        <div className="my-content-container">
            <div className="item">
                <h2>Services</h2>
                <br></br>
                <p>Do you need a new HVAC system?
                </p><br></br>
                <p>We’ve been providing quality heating and cooling services for over 30 years. All of our technicians are licensed, insured, and trained to provide the best customer service in the industry. Our goal is to make sure that your home or business is comfortable all year round with minimal disruption to your daily life.
                </p><br></br>
                <p>When it comes time for an upgrade or repair on your current system, we can help! From installation to repairs, we have everything you need at prices that won't break the bank. Call us today for more information about how we can help keep you cool this summer!
                </p><br></br>
                <p>Call today for a free estimate from one of our qualified technicians!
                </p><br></br>
            </div>
            <iframe src={src_url_value} title="YouTube video player" frameBorder="0" width="600" height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Services;
