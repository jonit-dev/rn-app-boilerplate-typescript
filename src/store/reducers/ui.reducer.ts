export interface IUireducer {
  isLoading: boolean;
}

const INITIAL_STATE = {
  isLoading: false,
  alert: {
    message: null,
    onPress: () => null,
    onDismiss: () => null
  }
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload.status };

    case SET_MESSAGE:
      return {
        ...state,
        alert: action.payload
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        alert: INITIAL_STATE.alert
      };

    default:
      return state;
  }
};

// Types ========================================

export const SET_LOADING = "SET_LOADING";
export const SET_MESSAGE = "SET_ERROR";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
