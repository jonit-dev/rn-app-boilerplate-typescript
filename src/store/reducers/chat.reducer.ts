import { USER_LOGOUT } from './user.reducer';

const INITIAL_STATE = {
  conversations: [],
  currentConversation: [],
  searchedUsers: []
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, searchedUsers: action.payload };
    case CLEAR_SEARCH_USERS:
      return { ...state, searchedUsers: [] };

    case USER_LOGOUT:
      return INITIAL_STATE;

    case GET_CONVERSATION:
      return { ...state, currentConversation: action.payload };

    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload
      };

    case ADD_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      };

    case RESTART_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversation: INITIAL_STATE.currentConversation
      };

    default:
      return state;
  }
};

export const SEARCH_USERS = "SEARCH_USERS";
export const CLEAR_SEARCH_USERS = "CLEAR_SEARCH_USERS";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const ADD_CONVERSATION = "ADD_CONVERSATION";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
export const GET_CONVERSATION = "GET_CONVERSATION";

export const RESTART_CURRENT_CONVERSATION = "RESTART_CURRENT_CONVERSATION";
