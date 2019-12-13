import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStylesHelper } from './src/constants/GlobalStylesHelper';
import { fonts } from './src/constants/UI/Fonts.constant';
import { theme } from './src/constants/UI/Theme.constant';
import NavigationHelper from './src/helpers/NavigationHelper';
import RootNavigator from './src/navigation/Root.navigator';
import { persistor, store } from './src/store/persist.store';

enableScreens(); // screen transition performance

// tslint:disable-next-line: no-default-export
export default class App extends Component {
  public state = {
    isDataLoaded: false
  };

  public fetchFonts() {
    return Font.loadAsync(fonts);
  }

  public render() {
    if (!this.state.isDataLoaded) {
      return (
        <AppLoading
          startAsync={async () => {
            await this.fetchFonts();
            GlobalStylesHelper.init(); // load global styles
          }}
          onFinish={() => this.setState({ isDataLoaded: true })}
          onError={err => console.log(err)}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
              <RootNavigator
                ref={navigatorRef =>
                  NavigationHelper.setTopLevelNavigator(navigatorRef)
                }
              />
            </PersistGate>
          </PaperProvider>
        </Provider>
      );
    }
  }
}
