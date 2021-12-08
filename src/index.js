import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore'; 

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);