const INITIAL_STATE = {
  conversations: null,
  searchedUsers: []
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, searchedUsers: action.payload };
    case CLEAR_SEARCH_USERS:
      return { ...state, searchedUsers: [] };
    default:
      return state;
  }
};

export const SEARCH_USERS = "SEARCH_USERS";
export const CLEAR_SEARCH_USERS = "CLEAR_SEARCH_USERS";
