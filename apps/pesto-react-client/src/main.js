import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { USER_FEATURE_KEY, userActions, userReducer } from './app/shared/slices/user/user.slice';
import { getAuthToken } from './app/shared/utils/auth-token-storage';

const store = configureStore(
  {
    reducer: { [USER_FEATURE_KEY]: userReducer },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const authToken = getAuthToken();
if (authToken) {
  console.log(authToken);
  console.log(store);
  store.dispatch(userActions.loginByAuthToken());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
