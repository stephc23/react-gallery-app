import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// import components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />
                <Nav />
                <Routes>
                    <Route path="" element={<Navigate to="cats" replace/> } />
                    <Route path=":topic" element={<Gallery />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;