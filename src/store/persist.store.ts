import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './reducers/index.reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
