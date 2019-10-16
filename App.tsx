import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store/reducers/index.reducers";
import thunk from "redux-thunk";
import { useScreens } from "react-native-screens";
import MainNavigator from "./navigation/Main.navigator";
import { Provider as PaperProvider } from "react-native-paper";
import Theme from "./constants/UI/Theme.constant";

const store = createStore(reducers, applyMiddleware(thunk));

useScreens(); //screen transition performance

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={Theme}>
          <MainNavigator />
        </PaperProvider>
      </Provider>
    );
  }
}
