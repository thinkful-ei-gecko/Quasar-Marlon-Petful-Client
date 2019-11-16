import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { PetContextProvider } from './PetContext'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <PetContextProvider>
    <App />
    </PetContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
 );

serviceWorker.unregister();
