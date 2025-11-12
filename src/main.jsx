import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const base = document.createElement('base');
base.setAttribute('href', import.meta.env.BASE_URL)
document.head.insertBefore(base, document.head.firstChild)

import App from './App.jsx'


const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(container)

if (container.hasChildNodes()) {
  root.hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  )
} else {
  root.render(
    <HelmetProvider>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </HelmetProvider>
)}
