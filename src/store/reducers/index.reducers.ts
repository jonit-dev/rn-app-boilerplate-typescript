import { combineReducers } from 'redux';

import uiReducer from './ui.reducer';
import userReducer from './user.reducer';

// tslint:disable-next-line: no-default-export
export default combineReducers({
  uiReducer,
  userReducer
});
