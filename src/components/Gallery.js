import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

// Import apiKey and component
import apiKey from '../config';
import PhotoContainer from './PhotoContainer';

function Search() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams();

    useEffect(() => {
        const endpoint = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`;
        fetch(endpoint)
            .then(response => response.json())
            .then(jsonData => {
                setPhotos(jsonData.photos.photo);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }, [topic]);

    return (isLoading ? <p>Loading...</p> : <PhotoContainer photos={photos} topic={topic} />);
}

export default Search;