import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from './App';

const rootElement = document.getElementById('root');
export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
