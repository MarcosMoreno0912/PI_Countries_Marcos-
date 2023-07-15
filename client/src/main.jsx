import React from 'react'
import { createRoot } from 'react-dom/client'
import './main.modules.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import AppRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <BrowserRouter>
      <div className="container">
        <AppRoutes />   
      </div>
    </BrowserRouter>
  </Provider>
);
