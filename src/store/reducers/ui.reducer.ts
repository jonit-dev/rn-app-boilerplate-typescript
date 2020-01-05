export interface IUireducer {
  isLoading: object;
}

const INITIAL_STATE = {
  isLoading: {
    status: false,
    key: null
  },
  alert: {
    message: null,
    onPress: () => null,
    onDismiss: () => null
  },
  feed: {
    openModals: {
      post: false
    }
  }
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: {
          status: action.payload.status,
          key: action.payload.key
        }
      };

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

    case TOGGLE_MODAL:
      return {
        ...state,
        feed: {
          ...state.feed,
          openModals: {
            ...state.feed.openModals,
            [action.payload]: !state.feed.openModals[action.payload]
          }
        }
      };

    default:
      return state;
  }
};

// Types ========================================

export const SET_LOADING = "SET_LOADING";
export const SET_MESSAGE = "SET_ERROR";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
