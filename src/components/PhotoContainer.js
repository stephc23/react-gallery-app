import React from 'react';

// import components
import Photo from './Photo';
import NotFound from './NotFound';

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
                {resultsFound ? photoLis : <NotFound />}
            </ul>
        </div>
    );
}

export default PhotoContainer;