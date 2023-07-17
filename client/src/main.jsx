import React from 'react'
import { createRoot } from 'react-dom/client'
import style from './main.module.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import AppRoutes from './routes.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <BrowserRouter>
      <div className={style.app}>
      <ToastContainer />
        <AppRoutes />   
      </div>
    </BrowserRouter>
  </Provider>
);
