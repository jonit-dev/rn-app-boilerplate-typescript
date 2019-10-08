import React from "react";

//Redux specific
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store/reducers/index.reducers";
import { Main } from "./components/Main";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
