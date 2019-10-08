/*#############################################################|
|                        REDUCERS
*##############################################################*/

import { combineReducers } from "redux";
import testReducer from "./test.reducer";

export default combineReducers({
  reducerVar: testReducer
});
