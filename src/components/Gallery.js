import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import apiKey from '../config';
import PhotoContainer from './PhotoContainer';

function Gallery() {
    // Initiate `photos` and `isLoading` states
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get topic from params (if provided through search) or from location object (if links are used and param doesn't exist)
    const location = useLocation();
    let {topic} = useParams();
    topic = topic ? topic : location.pathname.slice(1);

    // Use `topic` to fetch photos and update `photos` and `isLoading` states  
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

export default Gallery;