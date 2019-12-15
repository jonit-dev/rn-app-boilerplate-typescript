import { AsyncStorage } from 'react-native';

const INITIAL_STATE = {
  user: null,
  token: null,
  onboarding: false
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REFRESH_INFO:
    case USER_LOGIN:
      // Store token on async storage as well (some classes cannot access redux, so we'll have to use async storage to store the token)

      AsyncStorage.setItem("token", action.payload.token);

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        onboarding: false
      };

    case USER_SET_ONBOARDING:
      return { ...state, onboarding: action.payload };

    default:
      return state;
  }
};

// Types ========================================

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH_INFO = "USER_REFRESH_INFO";
export const USER_SET_ONBOARDING = "USER_SET_ONBOARDING";
