import React from 'react';

const HomeDetail = (props) => {
    return (
        <div>
            <h2>{props.company_name}</h2>
            <br></br>
            <p>HVAC systems are a necessity for any home or business.
            </p><br></br>
            <p>They keep your family safe and comfortable, but they can also be expensive to maintain. That’s why we offer comprehensive services that include repair, replacement, and maintenance of all types of heating and cooling systems. We know how important it is to have an HVAC system that works well year-round so you never have to worry about the temperature in your house again.
            </p><br></br>
            <p>Our team has been installing new HVAC systems for many years, so we know what it takes to make sure yours lasts as long as possible too! We offer free estimates on all our work with no obligation whatsoever – just call us today at {props.phone}!
            </p><br></br>
            <p>We’re always available 24/7 for emergency service when you need us most! And if you want more information before deciding whether or not to hire us!
            </p><br></br>
            <p>Call now for a free estimate on installation of a new air conditioner from one of America's top rated companies - {props.phone}!
            </p><br></br>
            <iframe className='video-player' src={props.src_url} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default HomeDetail;