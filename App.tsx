import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Redux specific
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers/index.reducers";
import { Main } from "./components/Main";

const store = createStore(reducers, applyMiddleware());

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
