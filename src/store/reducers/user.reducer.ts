const INITIAL_STATE = {
  user: null,
  token: null
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    case USER_LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

// Types ========================================

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
