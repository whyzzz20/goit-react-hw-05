import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App/App';
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
