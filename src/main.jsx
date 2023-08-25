import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './assets/Footer.jsx'
import Nav from './Nav.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Nav/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
