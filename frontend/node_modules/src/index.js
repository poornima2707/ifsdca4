// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // for React 18 and above
import App from './App';  // Make sure this is the correct path to your App component
import './index.css';
import reportWebVitals from './reportWebVitals';
// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();




