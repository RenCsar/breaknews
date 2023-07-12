import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/global.css';
import App from './routes/route';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();