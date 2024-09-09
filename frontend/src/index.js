import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ESP32Status from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <h1>ESP32-S3 Status Monitor</h1>
      </header>
      <main>
        <ESP32Status />
      </main>
    </div>
  </React.StrictMode>
);