import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="react-hw-05-movies">
      <App />
      <GlobalStyle />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
