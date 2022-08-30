import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/NavBar.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App nombre="Wanda"/>
  </React.StrictMode>
);

