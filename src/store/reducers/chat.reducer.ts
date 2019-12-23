const INITIAL_STATE = {
  conversations: [],
  searchedUsers: []
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, searchedUsers: action.payload };
    case CLEAR_SEARCH_USERS:
      return { ...state, searchedUsers: [] };

    case ADD_CHAT_TO_LIST:
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
export const ADD_CHAT_TO_LIST = "ADD_CHAT_TO_LIST";
