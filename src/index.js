import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './ScrollTop';
import ContextP from './Pages/Context/ContextP';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextP>
    <BrowserRouter>
    <ScrollTop>
    <App />
    </ScrollTop>
   
    </BrowserRouter>
    </ContextP>
    
    
  </React.StrictMode>
);


