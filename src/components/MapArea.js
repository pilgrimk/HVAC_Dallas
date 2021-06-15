import React from 'react';
import './MapArea.css';

const MapArea = (props) => {
    return (
        <div>
            <div>
                <div className='map-container'>
                    <iframe src={props.url}
                        width="560" height="315" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default MapArea;