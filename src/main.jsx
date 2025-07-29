import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


// document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
// document.getElementsByTagName('html')[0].setAttribute("lang", "fa");
//Or you can do it where ever you want, base on user selected language, or something else 
// serviceWorker.unregister();