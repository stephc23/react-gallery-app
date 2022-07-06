import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import './css/index.css';

const container = document.getElementByID('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);