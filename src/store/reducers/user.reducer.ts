const INITIAL_STATE = {
  isLoggedIn: false,
  user: null
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload, isLoggedIn: true };
    case USER_LOGOUT:
      return { ...state, user: {}, isLoggedIn: false };
    default:
      return state;
  }
};

// Types ========================================

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
