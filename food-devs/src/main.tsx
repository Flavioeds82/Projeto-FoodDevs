import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import ReactTooltip from 'react-tooltip';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ReactTooltip id="top" place='top' effect='solid'/>
          <ReactTooltip id="right" place='right' effect='solid'/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
