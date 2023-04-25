import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import SupportAdmin from './components/SupportAdmin'
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const path = window.location.pathname
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin />}
  </BrowserRouter>
);
