import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import chat from './reducers'

import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';

const store = createStore(chat);

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
      <App />
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
);
registerServiceWorker();
