import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { fonts } from './src/constants/UI/Fonts.constant';
import { theme } from './src/constants/UI/Theme.constant';
import MainNavigator from './src/navigation/Main.navigator';
import reducers from './src/store/reducers/index.reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

useScreens(); // screen transition performance

// tslint:disable-next-line: no-default-export
export default class App extends Component {
  public state = {
    isDataLoaded: false
  };

  public fetchFonts() {
    console.log("fetching fonts...");
    return Font.loadAsync(fonts);
  }

  public render() {
    if (!this.state.isDataLoaded) {
      return (
        <AppLoading
          startAsync={() => this.fetchFonts()}
          onFinish={() => this.setState({ isDataLoaded: true })}
          onError={err => console.log(err)}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <MainNavigator />
          </PaperProvider>
        </Provider>
      );
    }
  }
}
