import React, {useState, useEffect} from 'react';
import apiKey from '../config';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        
    });

    function handlePerformSearch(searchInput) {
        const endpoint = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`;
        fetch(endpoint)
            .then(response => response.json)
            .then(jsonData => {
                setPhotos(jsonData.photos.photo);
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    return (
        <div className="container">
            <SearchForm performSearch={handlePerformSearch}/>
            <Nav />
            <PhotoContainer />
        </div>
    );
}

export default App;