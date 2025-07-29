import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
const base = document.createElement('base')
base.setAttribute('href', import.meta.env.BASE_URL)
document.head.insertBefore(base, document.head.firstChild)

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