import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { theme } from './src/constants/UI/Theme.constant';
import { Login } from './src/screens/account/Login.screen';
import reducers from './src/store/reducers/index.reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

useScreens(); // screen transition performance

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Login />
        </PaperProvider>
      </Provider>
    );
  }
}
