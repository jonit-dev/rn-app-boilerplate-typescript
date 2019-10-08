import { TEST_TYPE } from "../actions/types";

const INITIAL_STATE = {
  someVar: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST_TYPE:
      return state;
    default:
      return state;
  }
};

/*

 =========  Safe state update in reducers =========

// From arrays
Removing: state.filter(element => element !== 'hi');
adding: [...state, 'hi'];
replacing: state.map(el => el === 'hi' ? 'bye': el);

//From objects
updating: {...state, name: 'Sam'};
adding: {...state, age: 30};
removing: {state, age: undefined }

*/
