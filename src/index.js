import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bar from './Bar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Bar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
