import React from 'react';
import PropTypes from 'prop-types';

function Photo({server, id, secret, title}) {
    return (
        <li>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
        </li>
    );
}

Photo.propTypes = {
    server: PropTypes.string, 
    id: PropTypes.string, 
    secret: PropTypes.string, 
    title: PropTypes.string 
};

export default Photo;