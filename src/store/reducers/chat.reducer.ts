import { USER_LOGOUT } from './user.reducer';

const INITIAL_STATE = {
  conversations: [],
  searchedUsers: [],
  messages: []
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, searchedUsers: action.payload };
    case CLEAR_SEARCH_USERS:
      return { ...state, searchedUsers: [] };

    case USER_LOGOUT:
      return INITIAL_STATE;

    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

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

    default:
      return state;
  }
};

export const SEARCH_USERS = "SEARCH_USERS";
export const CLEAR_SEARCH_USERS = "CLEAR_SEARCH_USERS";

export const ADD_MESSAGE = "ADD_MESSAGE";

export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const ADD_CONVERSATION = "ADD_CONVERSATION";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
