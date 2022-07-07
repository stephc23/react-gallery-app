import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />
                <Nav />
                <Routes>
                    <Route path="" element={<Navigate to="cats" replace /> } />
                    <Route path="cats" element={<Gallery />} />
                    <Route path="dogs" element={<Gallery />} />
                    <Route path="birds" element={<Gallery />} />
                    <Route path="search" element={<Outlet />} />
                    <Route path="search/:topic" element={<Gallery />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;