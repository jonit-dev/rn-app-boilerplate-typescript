import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import Theme from './src/constants/UI/Theme.constant';
import MainNavigator from './src/navigation/Main.navigator';
import reducers from './src/store/reducers/index.reducers';

const store = createStore(reducers, applyMiddleware(thunk));

useScreens(); // screen transition performance

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={Theme}>
          <MainNavigator />
        </PaperProvider>
      </Provider>
    );
  }
}
