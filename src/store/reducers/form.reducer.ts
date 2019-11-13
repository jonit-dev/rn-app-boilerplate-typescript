import { ACTION_TYPE } from '../actions/types';

const INITIAL_STATE = {
  login: {
    email: null,
    password: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return { ...state };
    default:
      return state;
  }
};
