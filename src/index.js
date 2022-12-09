import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Container from 'react-bootstrap/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='container mx-auto'>
        <App />
      </div>
    </Router>
  </React.StrictMode>
);

