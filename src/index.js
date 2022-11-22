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
    <Container >
    <Router >
    <App />
    </Router>
    </Container>
  </React.StrictMode>
);

