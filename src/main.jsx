import ReactDOM from 'react-dom/client';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

useEffect(() => {
  if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      window.location.href = redirect;
  }
}, []);


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
)};
