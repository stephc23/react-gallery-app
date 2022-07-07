import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import NoResults from './NoResults';

function PhotoContainer({photos, topic}) {
    const resultsFound = photos.length > 0;
    const photoLis = photos.map(photo => (
        <Photo 
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
            title={photo.title}
            key={photo.id.toString()}
        />
    ));

    return (
        <div className="photo-container">
            <h2>{resultsFound ? topic : ''}</h2>
            <ul>
                {resultsFound ? photoLis : <NoResults />}
            </ul>
        </div>
    );
}

PhotoContainer.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    topic: PropTypes.string
};

export default PhotoContainer;