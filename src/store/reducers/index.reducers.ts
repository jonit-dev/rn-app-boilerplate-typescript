import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { chatReducer } from './chat.reducer';
import { feedPostReducer } from './feedpost.reducer';
import { uiReducer } from './ui.reducer';
import { userReducer } from './user.reducer';

// const chatPersistconfig = {
//   key: "chatReducer",
//   storage: AsyncStorage,
//   whitelist: ["conversations"]
// };

const rootReducerPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userReducer"]
};

// tslint:disable-next-line: no-default-export
const rootReducer = combineReducers({
  uiReducer,
  userReducer,
  feedPostReducer,
  // @ts-ignore
  // chatReducer: persistReducer(chatPersistconfig, chatReducer)
  chatReducer
});

// tslint:disable-next-line: no-default-export
export default persistReducer(rootReducerPersistConfig, rootReducer);
