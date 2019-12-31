const INITIAL_STATE = {
  feedPosts: []
};

export const feedPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDPOST_READ:
      return { ...state, feedPosts: action.payload };
    default:
      return state;
  }
};

export const FEEDPOST_CREATE = "FEEDPOST_CREATE";
export const FEEDPOST_READ = "FEEDPOST_READ";
export const FEEDPOST_UPDATE = "FEEDPOST_UPDATE";
export const FEEDPOST_DELETE = "FEEDPOST_DELETE";
