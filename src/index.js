import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {ticketsSlice} from './store/tickets'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'



const store = configureStore({
  reducer: ticketsSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, thunkMiddleware]),
  devTools: process.env.NODE_ENV !== 'production',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

